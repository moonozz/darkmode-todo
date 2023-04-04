import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
// 스타일 리셋하기
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
    font-size: 1rem;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body{
    line-height: 1.2;
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #F6F6F6; */
    background-color: ${(props) => props.theme.color.bgColor};
    /* margin-bottom: 100px; */
    padding: 8px 0px 8px 8px;
  }
  ol, ul{
    list-style: none;
  }
  li {
    list-style:none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h2 {
    font-size: 2rem;
    word-break: keep-all;
    font-weight:700;
    color: ${(props) => props.theme.color.contenttxtColor};
    margin-bottom: 2rem;
  }
`;

export default GlobalStyle;
