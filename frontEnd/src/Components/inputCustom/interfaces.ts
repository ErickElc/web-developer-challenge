export interface InputProps {
  IconSvg?: React.FC<React.SVGProps<SVGSVGElement>>;
  IconSvg2?: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  value: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}
export interface InputAreaProps {
  wd?: string | number;
  bgColor?: string;
  mb?: number;
  borderColor?: string;
}

export interface InputProps {
  placeholderColor?: string;
  textColor?: string;
}
