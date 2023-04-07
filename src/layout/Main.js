import React from "react";
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

const TodoContainer = styled.div`
  overflow-y: scroll;
  margin-top: 11.5rem;
  height: 85vh;
`;

const TodoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9rem;
  position: fixed;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 15%;
`;

function Main({
  todoList,
  onCreate,
  onDelete,
  onEdit,
  onComplete,
  todoFilter,
  getFilterList,
  filterOption,
  setTodoFilter,
}) {
  const title = (value) => {
    const test = filterOption.findIndex((obj) => obj.value === value);
    return filterOption[test].name;
  };

  return (
    <MainBody>
      <MainContainer>
        <CreateInput onCreate={onCreate} setTodoFilter={setTodoFilter} />
        <TodoTitle>
          <FilterTxt> {title(todoFilter)}</FilterTxt>
          <TodoLengthTag>{getFilterList().length}</TodoLengthTag>
        </TodoTitle>
        <TodoContainer>
          <TodoFilter>
            {getFilterList().map((e) => (
              <TodoItem
                key={e.id}
                {...e}
                onDelete={onDelete}
                onEdit={onEdit}
                todoFilter={todoFilter}
                onComplete={onComplete}
              />
            ))}
          </TodoFilter>
        </TodoContainer>
      </MainContainer>
    </MainBody>
  );
}

export default Main;
