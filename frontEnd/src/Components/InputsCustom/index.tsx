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
  multi,
}: types.InputProps) => {
  return (
    <S.InputArea
      wd={wd}
      mb={mb}
      bgColor={bgColor}
      borderColor={borderColor}
      multi={multi}
    >
      {multi ? (
        <S.Input2
          wd={wd}
          multi={multi}
          textColor={textColor}
          editable={!editable ? editable : true}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          maxLength={length ? length : 200}
          value={value}
          onChange={onChangeText}
        />
      ) : (
        <S.Input
          wd={wd}
          multi={multi}
          textColor={textColor}
          editable={!editable ? editable : true}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          maxLength={length ? length : 200}
          value={value}
          onChange={onChangeText}
        />
      )}
    </S.InputArea>
  );
};
