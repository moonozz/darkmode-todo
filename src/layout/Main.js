import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import CreateInput from "../components/CreateInput";

const MainBody = styled.section`
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

const TodoTitle = styled.div`
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

const TodoLengthTag = styled.div`
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.color.taskLengthTagBg};
  color: #00c39a;
  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;
  font-weight: 700;
`;

const TodoFilter = styled.div`
  /* display: flex; */
  /* height: 100; */
  /* background-color: red; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* padding: 0.5rem; */
`;

function Main({ todoList, onCreate }) {
  return (
    <MainBody>
      <MainContainer>
        <CreateInput onCreate={onCreate} />
        <TodoTitle>
          <FilterTxt>할 일 전체보기</FilterTxt>
          <TodoLengthTag>{todoList.length}</TodoLengthTag>
        </TodoTitle>
        <TodoFilter>
          {todoList.map((e) => (
            <TodoItem key={e.id} {...e} />
          ))}
        </TodoFilter>
      </MainContainer>
    </MainBody>
  );
}

export default Main;
