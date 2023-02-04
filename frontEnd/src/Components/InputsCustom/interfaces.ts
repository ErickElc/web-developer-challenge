export interface InputProps {
  placeholder?: string | undefined;
  value?: string | (readonly string[] & string);
  onChangeText?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  password?: boolean;
  onPress?: () => void;
  mb?: number;
  editable?: boolean;
  bgColor?: string;
  wd?: string | number;
  length?: number;
  borderColor?: string;
  textColor?: string;
  placeholderColor?: string;
  multi?: boolean;
}
export interface InputAreaProps {
  multi?: boolean;
  wd?: string | number;
  bgColor?: string;
  mb?: number;
  borderColor?: string;
}

export interface InputProps2 {
  wd?: string | number;
  multi?: boolean;
  editable?: boolean;
  placeholderColor?: string;
  textColor?: string;
}
