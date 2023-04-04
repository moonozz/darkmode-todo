// import React from "react";
import styled from "styled-components";

export const IcBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.color.contentBgColor};
  &:hover {
    background-color: ${(props) => props.theme.color.icBtnBgHoverColor};
  }
`;

export const TextBtn = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  font-weight: 700;
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
