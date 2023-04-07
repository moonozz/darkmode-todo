import styled, { ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { dummyData } from "./Data/DummyData";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import GlobalStyle from "./styled/GlobalStyle";
import { light, dark } from "./styled/theme";

// tab : 할일 저체 보기, 아직 남았어요, 할일 완료

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* overflow-y: none; */
  overflow: hidden;
`;

const filterOption = [
  { value: "all", name: "할 일 전체보기" },
  { value: "remain", name: "할 수 있어요!" },
  { value: "completed", name: "할 일 완료 👍" },
];

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
  const [todoFilter, setTodoFilter] = useState("all");

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

  // 처음 렌더링할 때 dummydata 가져오기
  useEffect(() => {
    getData();
  }, []);

  // // json-server
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("http://localhost:3001/todos");
  //     setData(res.data);
  //     console.log("되고있니?");
  //     console.log(res.data);
  //   }
  //   fetchData();
  // }, []);

  // todo complete따라서 filter 하기
  const getFilterList = () => {
    const filterCallBack = (e) => {
      if (todoFilter === "completed") {
        return e.complete === true;
      } else {
        return e.complete === false;
      }
    };

    const copyTodo = JSON.parse(JSON.stringify(data));
    const filteredList =
      todoFilter === "all"
        ? copyTodo
        : copyTodo.filter((e) => filterCallBack(e));

    return filteredList;
  };

  // todo 등록하기
  const onCreate = (content) => {
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
        {data && (
          <Container>
            <Nav
              toggleTheme={toggleTheme}
              themeMode={themeMode}
              todoFilter={todoFilter}
              setTodoFilter={setTodoFilter}
              filterOption={filterOption}
              getFilterList={getFilterList}
            />
            <Main
              onCreate={onCreate}
              todoList={data}
              onDelete={onDelete}
              onEdit={onEdit}
              onComplete={onComplete}
              todoFilter={todoFilter}
              getFilterList={getFilterList}
              setTodoFilter={setTodoFilter}
              filterOption={filterOption}
            />
          </Container>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
