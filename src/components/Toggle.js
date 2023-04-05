import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ToggleOff from "../images/toggle-off.svg";
import ToggleOn from "../images/toggle-on.svg";

const ToggleContainer = styled.div`
  cursor: pointer;
  position: relative;

  > .toggle-container {
    width: 4rem;
    height: 2.25rem;
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.1);
    border-radius: 0.875rem;
    background-color: ${(props) => props.theme.color.toggleBgColor};
    &.toggle--checked {
      background-color: #00c39a;
    }
  }
  > .toggle-circle {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 0.75rem;
    background-color: #ffffff;
    background-image: url(${ToggleOff});
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.2s;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    // .toggle--checked 클래스가 활성화 되었을 경우의 CSS 구현
    &.toggle--checked {
      left: 30px;
      transition: all 0.3s ease;
      background-image: url(${ToggleOn});
    }
  }
`;

function Toggle({ onComplete, id, todoList }) {
  // toggle 클릭 됐는지 안 됐는지
  const [isOn, setIsOn] = useState(false);

  const toggleHandeler = () => {
    setIsOn(!isOn);
    onComplete(id);
    // 비동기라서 이전의 값이 console에 찍힘
    // console.log(isOn);
    // console.log(id);
    // console.log(todoList);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandeler}>
        <div
          className={`toggle-container ${isOn ? "toggle--checked" : null}`}
        />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </ToggleContainer>
    </>
  );
}

export default Toggle;
