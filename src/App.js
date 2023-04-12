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

  // json-server
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3000/todos");
      // setData(res.data);
      setData(res.data.sort((a, b) => b.id - a.id));
      // console.log("되고있니?");
      // console.log(res.data);
    }
    fetchData();
  }, []);

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
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((res) => {
      setData([newItem, ...data]);
    });
    dataId.current += 1;
  };

  // todo 삭제하기
  const onDelete = (targetId) => {
    fetch(`http://localhost:3000/todos/${targetId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("삭제되었습니다.");
        }
      })
      .catch((err) => alert(err));

    const newTodoList = data.filter((e) => e.id !== targetId);
    setData(newTodoList);
  };

  // todo 수정하기
  const onEdit = (targetId, newContent) => {
    // let todoLi = data[targetId];
    let todoLi = data.filter((e) => e.id === targetId)[0];

    fetch(`http://localhost:3000/todos/${targetId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todoLi, content: newContent }),
    })
      .then((res) => {
        console.log(data);
        setData(
          data.map((e) =>
            e.id === targetId ? { ...e, content: newContent } : e
          )
        );
      })
      .catch((err) => alert(err));
  };

  // todo 상태 완료와 진행중 설정하는 toggle 만들기
  const onComplete = (targetId) => {
    // let todoLi = data[targetId];

    // filter 써서 findIndex를 써서 el의 id랑 같은애를 찾는게 더 좋을 듯
    let todoLi = data.filter((e) => e.id === targetId)[0];
    fetch(`http://localhost:3000/todos/${targetId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todoLi,
        complete: !todoLi.complete,
      }),
    })
      .then((res) => {
        setData(
          data.map((e) =>
            e.id === targetId ? { ...e, complete: !e.complete } : e
          )
        );
      })
      .catch((err) => alert(err));

    // setData(
    //   data.map((e) => (e.id === targetId ? { ...e, complete: !e.complete } : e))
    // );
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
