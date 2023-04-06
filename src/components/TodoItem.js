import React, { useState, useRef } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { IcBtn } from "./Btn";
import { ReactComponent as Trash } from "../images/ic-trash.svg";
import { ReactComponent as Edit } from "../images/ic-edit.svg";
import { ReactComponent as Complete } from "../images/ic-complete.svg";
import { ReactComponent as Close } from "../images/ic-close.svg";

// Trash = styled.svg`
//   fill: ${(props) => props.theme.color.icon};
// `;

const TodoBody = styled.div`
  width: 19.75rem;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.color.contentBgColor};
  display: flex;
  flex-direction: column;
`;

const TodoIcBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 2rem;
`;

const TodoContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: right; */
  align-items: flex-end;
`;

// input으로 바꾸기
const TodoInput = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  /* flex-grow: 2; */
  height: 3rem;
  /* color: ${(props) => props.theme.color.contenttxtColor}; */
`;

const TodoContent = styled.p`
  text-decoration: ${(props) =>
    props.txtDecoration ? "line-through" : "none"};
  color: ${(props) =>
    props.txtDecoration
      ? props.theme.color.txtGrayColor
      : props.theme.color.contenttxtColor};
`;

function TodoItem({
  todoList,
  id,
  content,
  createdAt,
  complete,
  onDelete,
  onEdit,
  onComplete,
}) {
  // console.log(createdAt);
  // console.log(id);

  //수정 중인지, 수정 중이지 않은지 판단하기
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  // 수정 버튼 누른 후 textarea 확인
  const [editContent, setEditContent] = useState(content);
  const editContentInput = useRef();

  const handleEdit = (e) => setEditContent(e.target.value);

  // 수정 취소 버튼 눌렀을 때
  const handleEditExit = () => {
    setIsEdit(false);
    setEditContent(content);
  };

  // 수정 완료 버튼 누르면 반영되게
  const handleEditComplete = () => {
    if (editContent.length > 30 || editContent.length === 0) {
      editContentInput.current.focus();
      return;
    }
    onEdit(id, editContent);
    toggleIsEdit();
  };

  // 삭제 버튼 눌렀을 때
  const handleDelete = () => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      return onDelete(id);
    }
  };

  return (
    <>
      <TodoBody>
        {/* 수정 중일때 보여질 버튼 구분 */}
        {isEdit ? (
          <TodoIcBtnContainer>
            <IcBtn onClick={handleEditExit}>
              <Close />
            </IcBtn>
            <IcBtn className="complete" onClick={handleEditComplete}>
              <Complete />
            </IcBtn>
          </TodoIcBtnContainer>
        ) : (
          <TodoIcBtnContainer>
            <IcBtn onClick={handleDelete}>
              <Trash />
            </IcBtn>
            {/* 만약 complete가 true이면 Edit 버튼 disabled */}
            {complete === false ? (
              <IcBtn onClick={toggleIsEdit}>
                <Edit />
              </IcBtn>
            ) : (
              <IcBtn btnDisabled={complete}>
                <Edit />
              </IcBtn>
            )}
            {/* <Edit onClick={toggleIsEdit} btnDisabled={complete} /> */}
          </TodoIcBtnContainer>
        )}

        <TodoContainer>
          <TodoInput>
            {/* 수정 중일때 보여질 content 구분 */}
            {isEdit ? (
              <textarea
                ref={editContentInput}
                value={editContent}
                onChange={handleEdit}
              ></textarea>
            ) : (
              // complete가 true이면 content 에 밑줄 생기게
              <TodoContent txtDecoration={complete}>{content}</TodoContent>
            )}
          </TodoInput>
          <Toggle
            onComplete={onComplete}
            id={id}
            todoList={todoList}
            complete={complete}
            isEdit={isEdit}
          />
        </TodoContainer>
      </TodoBody>
    </>
  );
  // 수정버튼을 눌렀는지 아ㄴㅣ 해
  // text 영역을 edit input으로 만들기
}

export default TodoItem;
