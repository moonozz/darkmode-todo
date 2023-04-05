import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Tab from "../components/Tab";
import { ReactComponent as Moon } from "../images/ic-moon.svg";
import { ReactComponent as Sun } from "../images/ic-sun.svg";
import { TextBtn } from "../components/Btn";
import { Link } from "react-router-dom";

const NavBody = styled.div`
  width: 21rem;
  min-width: 20rem;
  height: 98vh;
  padding: 6rem 2.5rem 2.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color.navColor};
  position: relative;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  /* overflow-y: hidden; */

  // 스크롤할 때 스크롤 안되는 모션 주기위해 넣음
  position: fixed;
`;

const ModeBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: ${(props) => props.theme.color.icBtnBgColor};
  &:hover {
    background-color: ${(props) => props.theme.color.icBtnBgHoverColor};
  }
`;

const FilterMenuBtn = styled.li`
  margin-bottom: 1.25rem;
  /* width: 100%; */
`;

function Nav({ toggleTheme, themeMode }) {
  // const [modeIcon, setmodeIcon] = useState("light");

  // const changeIcon = () => {
  //   setmodeIcon(
  //     themeMode === "light" ? (modeIcon = "light") : (modeIcon = "dark")
  //   );
  //   console.log(modeIcon);
  // };

  // ModeBtn을 누르면 toggleTheme 이 작동해서 dark, light 모드로 변환되는데,
  // 그러면서 icon 의 svg 도 같이 변경됐으면 좋겠다..

  const sunOrMoonIcon =
    themeMode === "light" ? <Sun fill="#B0B6C2" /> : <Moon fill="#B0B6C2" />;

  return (
    <>
      <NavBody>
        <ModeBtn onClick={toggleTheme}>{sunOrMoonIcon}</ModeBtn>
        <h2 id="title">오늘의 할 일을 등록해보세요!</h2>
        <div id="menu">
          <FilterMenuBtn>
            <TextBtn>할 일 전체보기</TextBtn>
          </FilterMenuBtn>
          <FilterMenuBtn>
            <TextBtn>아직 남았어요!</TextBtn>
          </FilterMenuBtn>
          <FilterMenuBtn>
            <TextBtn>할 일 완료 👍</TextBtn>
          </FilterMenuBtn>
          {/* <Link to="/">할 일 전체보기</Link>
          <Link to="/do">아직 남았어요!</Link>
        <Link to="/done">할 일 완료 👍</Link> */}
        </div>
        {/* <Tab /> */}
      </NavBody>
    </>
  );
}

export default Nav;

// const MarginBottom = styled.li`
//   margin-bottom: ${(props) => props.marginBottom * 20 + "px"};
// `;

// 여기서 상태를 줄거고
// 여기에 버튼 누른거에 따라서 상태가 변할거고,
// 그 상태에 따라서 App.js에서 데이터를 필터링할거야

// 상태가 가질 수 있는 값이 세개여야돼...
// 세개에 따라서 필터링
// every 전체
// remain false
// comp true

// 상태도, 상태변경하는 함수도 App 에 만들고,
// 그러고 내려줘 겁내 내려줘..
