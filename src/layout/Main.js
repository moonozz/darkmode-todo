import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Task from "../components/Task";
import CreateInput from "../components/CreateInput";

const MainBody = styled.div`
  // Nav 스크롤 고정해서 생긴 padding-left
  padding-left: 21rem;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  padding: 3.5rem 3rem;
  width: 70.5rem;
`;

const TaskTitle = styled.div`
  /* width: 100%; */
  /* position: fixed; */
  /* background-color: ${(props) => props.theme.color.bgColor}; */
  display: flex;
  align-items: center;
`;

const FilterTxt = styled.p`
  color: ${(props) => props.theme.color.contenttxtColor};
  font-weight: 700;
`;

const TaskLengthTag = styled.div`
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.color.taskLengthTagBg};
  color: #00c39a;
  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;
  font-weight: 700;
`;

const TaskFilter = styled.div`
  /* height: 100; */
  /* background-color: red; */
  /* padding: 0.5rem; */
`;

function Main() {
  return (
    <MainBody>
      <MainContainer>
        <CreateInput />
        <TaskTitle>
          <FilterTxt>할 일 전체보기</FilterTxt>
          <TaskLengthTag>11</TaskLengthTag>
        </TaskTitle>
        <TaskFilter>
          <Task />
        </TaskFilter>
      </MainContainer>
    </MainBody>
  );
}

export default Main;
