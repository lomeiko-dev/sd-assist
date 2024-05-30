import { CSSProperties } from "vue";

export interface IInputProps {
  id?: string;
  isError?: boolean;
  placeholder?: string;
}

export interface IColorItem {
  title: string;
  style: CSSProperties;
}
