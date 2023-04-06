// import React from "react";
import styled from "styled-components";

export const IcBtn = styled.button`
  margin-left: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.color.contentBgColor};
  cursor: ${(props) => (props.btnDisabled ? "default" : "pointer")};
  &:hover {
    /* background-color: ${(props) => props.theme.color.icBtnBgHoverColor}; */
    background-color: ${(props) =>
      props.btnDisabled
        ? ":not" // hover 없애기
        : props.theme.color.icBtnBgHoverColor};
  }
  &.complete {
    background-color: #00c39a;
    &:hover {
      background-color: #06ad8a;
    }
  }
  > svg {
    /* fill: ${(props) => props.theme.color.icon}; */
    stroke: ${(props) => props.theme.color.icon};
    stroke: ${(props) =>
      props.btnDisabled === true
        ? props.theme.color.iconDisabled
        : props.theme.color.icon};
  }
  /* > svg.btnDisabled {
    stroke: ${(props) =>
    props.btnDisabled
      ? props.theme.color.iconDisabled
      : props.theme.color.icon};
  } */
`;

export const TextBtn = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.color.txtBtnBgColor};
  text-align: left;
  color: ${(props) => props.theme.color.contenttxtColor};
  &:hover {
    background-color: ${(props) => props.theme.color.txtBtnBgHoverColor};
  }
  &:active {
    background-color: #00c39a;
  }
`;
