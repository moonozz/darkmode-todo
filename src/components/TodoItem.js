import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { IcBtn } from "./Btn";
import { ReactComponent as Trash } from "../images/ic-trash.svg";
import { ReactComponent as Edit } from "../images/ic-edit.svg";

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
const TodoInput = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;
`;

function TodoItem({ id, content, createdAt, complete }) {
  console.log(createdAt);
  console.log(id);
  return (
    <>
      <TodoBody>
        <TodoIcBtnContainer>
          <IcBtn>
            <Trash />
          </IcBtn>
          <IcBtn>
            <Edit />
          </IcBtn>
        </TodoIcBtnContainer>
        <TodoContainer>
          <TodoInput>{content}</TodoInput>
          <Toggle />
        </TodoContainer>
      </TodoBody>
    </>
  );
  // 수정버튼을 눌렀는지 아ㄴㅣ 해
  // text 영역을 edit input으로 만들기
}

export default TodoItem;
