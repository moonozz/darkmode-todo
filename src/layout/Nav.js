import React from "react";
import styled from "styled-components";

import { ReactComponent as Moon } from "../images/ic-moon.svg";
import { ReactComponent as Sun } from "../images/ic-sun.svg";

const NavBody = styled.div`
  width: 21rem;
  min-width: 20rem;
  height: 98vh;
  margin: 1rem;
  padding: 6rem 2.5rem 2.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color.navColor};
  position: relative;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  z-index: 2;

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

const FilterMenuList = styled.li`
  margin-bottom: 1.25rem;
  /* width: 100%; */
`;

const FilterBtn = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  font-weight: 600;
  color: ${(props) =>
    props.selectBtn
      ? props.theme.color.txtColor
      : props.theme.color.contenttxtColor};
  background-color: ${(props) =>
    props.selectBtn ? "#00C39A" : props.theme.color.txtBtnBgColor};
  text-align: left;
  &:hover {
    background-color: ${(props) =>
      props.selectBtn ? "#00C39A" : props.theme.color.txtBtnBgHoverColor};
  }
`;

function Nav({
  toggleTheme,
  themeMode,
  todoFilter,
  setTodoFilter,
  filterOption,
  getFilterList,
}) {
  // ModeBtn을 누르면 toggleTheme 이 작동해서 dark, light 모드로 변환되는데,
  // 그러면서 icon 의 svg 도 같이 변경됐으면 좋겠다..
  const sunOrMoonIcon =
    themeMode === "light" ? <Sun fill="#B0B6C2" /> : <Moon fill="#B0B6C2" />;

  return (
    <>
      <NavBody>
        <ModeBtn onClick={toggleTheme}>{sunOrMoonIcon}</ModeBtn>
        <h2 id="title">오늘의 할 일을 등록해보세요!</h2>
        <ul id="menu">
          {filterOption.map((e, idx) => (
            <FilterMenuList
              key={idx}
              value={e.value}
              onClick={() => setTodoFilter(e.value)}
              // e.value랑 todoFilter 랑 같으면 선택된 애야
              // 그러면 그때 active 된 css 를 적용시키게 만들거나
            >
              {/* Filter 메뉴버튼을 하나 더 만들던가, filtermenu 버튼에 props로 */}
              <FilterBtn selectBtn={e.value === todoFilter ? true : false}>
                {e.name}
              </FilterBtn>
            </FilterMenuList>
          ))}
        </ul>
      </NavBody>
    </>
  );
}

export default Nav;
