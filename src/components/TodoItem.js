import React, { useState, useRef, useEffect } from "react";
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
  /* width: 19.75rem; */
  /* margin: 0.8rem; */
  height: 252px;
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

const TodoTxtContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  /* flex-grow: 2; */
  height: 3.5rem;
  /* color: ${(props) => props.theme.color.contenttxtColor}; */
`;

const TodoInput = styled.input`
  /* border: 1px solid #00c39a; */
  border: none;
  outline: none;
  resize: none;
  caret-color: #00c39a;
  width: 100%;
  padding: 0;
  background-color: ${(props) => props.theme.color.contentBgColor};
  color: ${(props) => props.theme.color.contenttxtColor};
  /* margin: none; */
`;

const TodoContent = styled.p`
  text-decoration: ${(props) =>
    props.txtDecoration ? "line-through" : "none"};
  color: ${(props) =>
    props.txtDecoration
      ? props.theme.color.txtGrayColor
      : props.theme.color.contenttxtColor};
  font-family: "Pretendard";
`;

const TxtCount = styled.div`
  color: ${(props) => props.theme.color.txtGrayColor};
  margin: 0.5rem;
  font-size: 0.875rem;
  text-align: end;
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

  const [txtCount, setTxtCount] = useState(content?.length);

  // 수정 버튼 누른 후 textarea 확인
  const [editContent, setEditContent] = useState(content);

  const editInputRef = useRef(null);

  const handleEdit = (e) => {
    setEditContent(e.target.value);
    setTxtCount(e.target.value.length);
    // e.focus();
  };

  // 수정 취소 버튼 눌렀을 때
  const handleEditExit = () => {
    setIsEdit(false);
    setEditContent(content);
    setTxtCount(content.length);
  };

  // 수정 완료 버튼 누르면 반영되게
  const handleEditComplete = () => {
    if (editContent.length > 30 || editContent.length === 0) {
      editInputRef.current.focus();
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
          // 닫기, 수정완료 버튼 노출
          <TodoIcBtnContainer>
            <IcBtn onClick={handleEditExit}>
              <Close />
            </IcBtn>
            <IcBtn className="complete" onClick={handleEditComplete}>
              <Complete />
            </IcBtn>
          </TodoIcBtnContainer>
        ) : (
          // 휴지통, 수정 버튼 노출
          <TodoIcBtnContainer>
            <IcBtn onClick={handleDelete}>
              <Trash />
            </IcBtn>
            {/* 만약 complete가 true이면 Edit 버튼 disabled */}
            {complete === false ? (
              <IcBtn
                onClick={(e) => {
                  toggleIsEdit(e);
                  // editContentInput.current.focus();
                }}
              >
                <Edit />
              </IcBtn>
            ) : (
              <IcBtn btnDisabled={complete}>
                <Edit />
              </IcBtn>
            )}
          </TodoIcBtnContainer>
        )}

        <TodoContainer>
          <TodoTxtContainer>
            {/* 수정 중일때 보여질 content 구분 */}
            {isEdit ? (
              <>
                <TodoInput
                  ref={editInputRef}
                  value={editContent}
                  onChange={handleEdit}
                  maxLength={30}
                  //수정 버튼 눌렀을 때 바로 focus 되게
                  autoFocus
                />
                <TxtCount>
                  <span>{txtCount}</span>
                  <span> / 30</span>
                </TxtCount>
              </>
            ) : (
              // complete가 true이면 content에 밑줄 생기게
              <TodoContent txtDecoration={complete}>{content}</TodoContent>
            )}
          </TodoTxtContainer>
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
