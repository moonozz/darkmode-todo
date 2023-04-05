import React, { useState, useRef } from "react";
import styled from "styled-components";
// import { TextBtn } from "./Btn";

const CreateInputBody = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.contentBgColor};
  padding: 0.875rem 0.875rem 0.875rem 2rem;
  margin-bottom: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  color: ${(props) => props.theme.color.contenttxtColor};
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  /* width: 80%; */
  flex-grow: 2;
  background-color: ${(props) => props.theme.color.contentBgColor};
  ::placeholder {
    color: ${(props) => props.theme.color.txtGrayColor};
  }
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

function CreateInput({ onCreate }) {
  const contentInput = useRef();

  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  // input에 입력한 값 보여주기
  const onChange = (e) => {
    setText(e.target.value);
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
    onCreate(text, complete);
    // input 등록하고 내용 초기화해주기
    setText("");
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
        />
        <SubmitBtn onClick={handleSubmit}>등록하기</SubmitBtn>
      </CreateInputBody>
    </>
  );
}

export default CreateInput;
