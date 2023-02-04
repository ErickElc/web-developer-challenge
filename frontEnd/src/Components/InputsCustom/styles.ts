import { Colors } from "../../Config/Colors";
import styled from "styled-components";
import * as types from "./interfaces";

export const InputArea = styled.div<types.InputAreaProps>`
  width: ${(props) => (props.wd ? props.wd : 100)}%;
  padding-right: 10px;
  padding-left: 10px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  flex-flow: row wrap;
  padding: 10px;
  height: ${(props) => (props.multi ? "100px" : "")};
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : Colors.gray)};
  border-radius: 16px;
  line-height: 24px;
  text-align: left;
`;

export const Input = styled.input<types.InputProps2>`
  flex: 1;
  font-style: normal;
  font-weight: 500;
  resize: none;
  overflow: hidden;
  &::placeholder {
    color: ${(props) =>
      props.placeholderColor ? props.placeholderColor : Colors.gray};
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
  }
  font-size: 16px;
  color: ${(props) => (props.textColor ? props.textColor : "#000")};
  border: none;
  background: none;
  width: 98%;
  word-break: break-all;
  min-height: 48%;
  &:focus {
    outline: none;
  }
`;
export const Input2 = styled.textarea<types.InputProps2>`
  flex: 1;
  font-style: normal;
  font-weight: 500;
  resize: none;
  overflow: hidden;
  &::placeholder {
    color: ${(props) =>
      props.placeholderColor ? props.placeholderColor : Colors.gray};
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
  }
  font-size: 16px;
  color: ${(props) => (props.textColor ? props.textColor : "#000")};
  border: none;
  background: none;
  width: 98%;
  word-break: break-all;
  min-height: 48%;
  &:focus {
    outline: none;
  }
`;
