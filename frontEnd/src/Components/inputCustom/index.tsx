import { Colors } from "../../Config/Colors";
import * as types from "./interfaces";
import * as S from "./styles";
export default ({
  placeholder,
  value,
  onChangeText,
  password,
  mb,
  editable,
  bgColor,
  wd,
  length,
  borderColor,
  textColor,
  placeholderColor,
}: types.InputProps) => {
  return (
    <S.InputArea wd={wd} mb={mb} bgColor={bgColor} borderColor={borderColor}>
      <S.Input
        textColor={textColor}
        editable={!editable ? editable : true}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        maxLength={length ? length : 200}
        value={value}
        onChange={onChangeText}
        type={password ? "password" : "text"}
      />
    </S.InputArea>
  );
};
