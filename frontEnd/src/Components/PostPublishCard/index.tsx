import React from "react";

//Config
import { Colors } from "../../Config/Colors";
import * as types from "./interfaces";
import * as S from "./styles";

// Components
import InputsCustom from "../InputsCustom";

//Images
import CardSVG from "../../Assets/svg/card.svg";

export default ({ name, message, photo }: types.PostPublish) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={CardSVG} alt="None" />
      </S.ImageContainer>
      <S.ContainerInput>
        <InputsCustom
          placeholder={"Nome"}
          bgColor={Colors.inputColor}
          borderColor={"none"}
          textColor={"#FFF"}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <InputsCustom
          placeholder={"Mensagem"}
          bgColor={Colors.inputColor}
          borderColor={"none"}
          textColor={"#FFF"}
          multi={true}
        />
      </S.ContainerInput>
    </S.Container>
  );
};
