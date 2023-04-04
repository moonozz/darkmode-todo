// import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import AllTask from "./layout/AllTask";
import DoneTask from "./layout/DoneTask";
import DoTask from "./layout/DoTask";
import Nav from "./layout/Nav";
// import Toggle from "./components/Toggle";
import GlobalStyle from "./styled/GlobalStyle";
import { light, dark } from "./styled/theme";
import Main from "./layout/Main";

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Nav toggleTheme={toggleTheme} themeMode={themeMode} />
          <Main />
        </Container>
        {/* <Toggle /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
