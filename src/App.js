// import "./App.css";
import styled, { ThemeProvider } from "styled-components";
// import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import { dummyData } from "./Data/DummyData";
import AllTodo from "./layout/AllTodo";
import DoneTodo from "./layout/DoneTodo";
import DoTodo from "./layout/DoTodo";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
// import Toggle from "./components/Toggle";
import GlobalStyle from "./styled/GlobalStyle";
import { light, dark } from "./styled/theme";

// tab : 할일 저체 보기, 아직 남았어요, 할일 완료

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  // return <div className="App"></div>;
  const [themeMode, setThemeMode] = useState("light");
  const theme = themeMode === "light" ? light : dark;
  // const [modeIcon, setmodeIcon] = useState(false);

  // darkmode 전환하기
  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    // console.log(themeMode);
  };

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  // todo dummydata 가져오기
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (res) => res.json()
    );
    const dummyData = res.slice(0, 10).map((e) => {
      return {
        complete: e.completed,
        content: e.title,
        createdAt: new Date().toLocaleString(),
        id: dataId.current++,
      };
    });

    setData(dummyData);
  };

  useEffect(() => {
    getData();
  }, []);

  // todo 등록하기
  const onCreate = (content, complete) => {
    const createdAt = new Date().toLocaleString();
    const newItem = {
      id: dataId.current,
      content,
      complete: false,
      createdAt,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  // todo 삭제하기
  const onDelete = (targetId) => {
    const newTodoList = data.filter((e) => e.id !== targetId);
    setData(newTodoList);
  };

  // todo 수정하기
  const onEdit = (targetId, newTodo) => {
    setData(
      data.map((e) => (e.id === targetId ? { ...e, content: newTodo } : e))
    );
  };

  // todo 상태 완료와 진행중 설정하는 toggle 만들기
  const onComplete = (targetId) => {
    setData(
      data.map((e) => (e.id === targetId ? { ...e, complete: !e.complete } : e))
    );
    // console.log(data);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Nav toggleTheme={toggleTheme} themeMode={themeMode} />
          <Main
            onCreate={onCreate}
            todoList={data}
            onDelete={onDelete}
            onEdit={onEdit}
            onComplete={onComplete}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
