import React from "react";

//Config
import * as S from "./styles";

//Components
import Header from "../../Components/Layout/Header";
import Main from "../../Components/Layout/Main";

export default () => {
  return (
    <S.Container>
      <Header titleHeader={"Buildbox"} subTitleHeader={"WEB CHALLENGE"} />
      <Main />
    </S.Container>
  );
};
