import { CSSProperties } from "vue";

export type typeField =
  | "dropdwn"
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "color"
  | "checkbox"
  | "mask"
  | "other"
  | "image-loader"
  | "file-loader";

export interface IConfigField {
  type: typeField;
  title?: string;
  subTitle?: string;
  nameSlot?: string;
  isValid?: boolean;
  propsName?: string;
  key?: string;
  placeholder?: string;
  errorMessage?: string;
  options?: any;
  optionLabel?: string;
  optionValue?: string;
  min?: Date;
  max?: Date;
  mask?: string;
  indexForm?: number;
  typeUI?: enumTypeUI;
  errorPlaceholder?: string;
}

export interface IInputProps {
  id?: string;
  isError?: boolean;
  placeholder?: string;
}

export interface IColorItem {
  title: string;
  style: CSSProperties;
}

export enum enumTypeUI {
  FLOAT = "FLOAT",
  GROUP = "GROUP",
  BASE = "BASE",
}
