// import "./App.css";
import styled, { ThemeProvider } from "styled-components";
// import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { dummyData } from "./Data/DummyData";
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

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    console.log(themeMode);
  };

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (content, complete) => {
    const createdAt = new Date().toLocaleString();
    const newItem = {
      id: dataId.current,
      content,
      complete,
      createdAt,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Nav toggleTheme={toggleTheme} themeMode={themeMode} />
          {/* <Main onCreate={onCreate} todoList={data} dummyData={dummyData} /> */}
          <Main onCreate={onCreate} todoList={data} />
        </Container>
        {/* <Toggle /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
