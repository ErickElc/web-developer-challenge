import { Colors } from "../../Config/Colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${Colors.tertiary};
  border: solid 1px #3b3b3b;
  width: 30%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: row;
  border-radius: 50px;
  padding: 20px;
  border: solid 1px #4b4b4b;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
`;
