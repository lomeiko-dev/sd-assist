import { CSSProperties } from "vue";

export interface IInputProps {
  id?: string;
  errorPlaceholder?: string;
  placeholder?: string;
}

export interface IColorItem {
  title: string;
  style: CSSProperties
}