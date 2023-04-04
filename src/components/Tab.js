import React from "react";
import { useState } from "react";

import styled from "styled-components";

const TabMenu = styled.ul`
  background-color: #e9e9e9;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    /* font-size: 1rem; */
    font-weight: 400;
    cursor: pointer;
  }

  .focused {
    /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */
    font-weight: 800;
    background-color: var(--coz-purple-600);
    color: #fff;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

function Tab() {
  const [currentTab, setTab] = useState(0);

  const menuArr = [
    { name: "할 일 전체보기", content: "Tab menu ONE" },
    { name: "아직 남았어요!", content: "Tab menu TWO" },
    { name: "할 일 완료 👍", content: "Tab menu THREE" },
  ];

  const selectMenuHandler = (i) => {
    setTab(i);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((e, i) => {
            return (
              <li
                key={i}
                className={currentTab === i ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(i)}
              >
                {e.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
}

export default Tab;
