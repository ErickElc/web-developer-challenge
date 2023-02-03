import { Colors } from "../../Config/Colors";
import styled from "styled-components";
import * as types from "./interfaces";

export const InputArea = styled.div<types.InputAreaProps>`
  width: ${(props) => (props.wd ? props.wd : 100)}%;
  padding-right: 10px;
  padding-left: 10px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : Colors.gray)};
  border-radius: 16px;
  line-height: 24px;
  text-align: left;
`;
export const Input = styled.input<types.InputProps>`
  flex: 1;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
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
  height: 98%;
  &:focus {
    outline: none;
  }
`;
