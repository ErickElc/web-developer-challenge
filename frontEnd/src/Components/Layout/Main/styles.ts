import { Colors } from "../../../Config/Colors";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 30px;
  justify-content: space-between;
  background-color: ${Colors.secundary};
  height: 100%;
`;
