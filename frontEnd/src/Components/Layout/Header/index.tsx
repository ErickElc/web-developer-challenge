import React from "react";

//Config
import * as types from "./interfaces";
import * as S from "./styles";

export default ({ titleHeader, subTitleHeader }: types.HeaderInterface) => {
  return (
    <S.Container>
      <S.TitleHeader>{titleHeader}</S.TitleHeader>
      <S.SubTitleHeader>{subTitleHeader}</S.SubTitleHeader>
    </S.Container>
  );
};
