import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { IcBtn } from "../components/Btn";
import { ReactComponent as Trash } from "../images/ic-trash.svg";
import { ReactComponent as Edit } from "../images/ic-edit.svg";

// Trash = styled.svg`
//   fill: ${(props) => props.theme.color.icon};
// `;

const TaskBody = styled.div`
  width: 19.75rem;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.color.contentBgColor};
  display: flex;
  flex-direction: column;
`;

const TaskIcBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 2rem;
`;

const TaskContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: right; */
  align-items: flex-end;
`;

// input으로 바꾸기
const TaskInput = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;
`;

function Task() {
  return (
    <>
      <TaskBody>
        <TaskIcBtnContainer>
          <IcBtn>
            <Trash />
          </IcBtn>
          <IcBtn>
            <Edit />
          </IcBtn>
        </TaskIcBtnContainer>
        <TaskContainer>
          <TaskInput>
            <p>Task test</p>
          </TaskInput>
          <Toggle />
        </TaskContainer>
      </TaskBody>
    </>
  );
  // 수정버튼을 눌렀는지 아ㄴㅣ 해
  // text 영역을 edit input으로 만들기
}

export default Task;
