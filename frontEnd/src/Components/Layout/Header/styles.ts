import { Colors } from "../../../Config/Colors";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  border-bottom: 1px solid black;
  padding: 20px;
`;

export const TitleHeader = styled.h1`
  color: ${Colors.green};
  font-weight: 700;
  font-size: 28px;
  margin: 0px;
`;

export const SubTitleHeader = styled.h2`
  color: ${Colors.gray};
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  margin-top: 10px;
`;
