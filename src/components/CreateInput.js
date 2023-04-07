import React, { useState, useRef } from "react";
import styled from "styled-components";
// import { TextBtn } from "./Btn";

const CreateInputBody = styled.div`
  width: 100%;
  max-width: 64.5rem;
  background-color: ${(props) => props.theme.color.contentBgColor};
  padding: 0.875rem 0.875rem 0.875rem 2rem;
  margin-bottom: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  color: ${(props) => props.theme.color.contenttxtColor};
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

const InputField = styled.input`
  /* width: 80%; */
  flex-grow: 2;
  background-color: ${(props) => props.theme.color.contentBgColor};
  color: ${(props) => props.theme.color.contenttxtColor};
  ::placeholder {
    color: ${(props) => props.theme.color.txtGrayColor};
  }
`;

const TxtCount = styled.div`
  color: ${(props) => props.theme.color.txtGrayColor};
  margin-left: 1.5rem;
  font-size: 0.75rem;
`;

const SubmitBtn = styled.button`
  margin-left: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 0.875rem;
  background-color: #00c39a;
  font-weight: 700;
  /* font-size: 1rem; */
  color: ${(props) => props.theme.color.txtColor};
  &:hover {
    background-color: #06ad8a;
  }
`;

function CreateInput({ onCreate, setTodoFilter }) {
  const contentInput = useRef();

  const [text, setText] = useState("");
  const [txtCount, setTxtCount] = useState(0);
  // input에 입력한 값 보여주기
  const onChange = (e) => {
    setText(e.target.value);
    setTxtCount(e.target.value.length);
  };

  // 등록하기 버튼 클릭했을 때
  const handleSubmit = () => {
    console.log(text);
    if (text.length > 30 || text.length === 0) {
      contentInput.current.focus();
      return;
    }
    // console.log(text);
    // console.log(complete);
    // input 등록하기(App에서 만든 함수 props로 전달받음
    onCreate(text);
    // input 등록하고 내용 초기화해주기
    setText("");
    setTodoFilter("all");
    setTxtCount(0);
  };

  return (
    <>
      <CreateInputBody>
        <InputField
          ref={contentInput}
          name="content"
          placeholder="오늘의 할 일을 입력해주세요."
          onChange={onChange}
          value={text}
          maxLength={30}
        />
        <TxtCount>
          <span>{txtCount}</span>
          <span> / 30</span>
        </TxtCount>
        <SubmitBtn onClick={handleSubmit}>등록하기</SubmitBtn>
      </CreateInputBody>
    </>
  );
}

export default CreateInput;
