export enum enumTypeBackground {
  IMAGE = "IMAGE",
  COLOR = "COLOR",
}

export enum enumTypeDrow {
  PEN = "PEN",
  LINE = "LINE",
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
}

export interface IDrawToolsMethods {
  drawLine: (x: number, y: number) => void;
  drawRect: (x2: number, y2: number) => void;
  drawCircle: (x2: number, y2: number) => void;
  setCoord: (x: number, y: number) => void;
  snapshoting: (x: number, y: number, width: number, height: number, isApply?: boolean) => void;
  loadImage: (src: string, width: number, height: number) => void;
  resetCoord: () => void;
  draw: (x: number, y: number) => void;
}

export interface IHistoryManagerMehods {
  save: () => void;
  undo: () => void;
}

export interface IDrawOptions {
  color?: string;
  size?: number;
  width: number;
  height: number;
}

export interface IHistoryOptions {
  width: number;
  height: number;
}

export interface IText {
  x: number;
  y: number;
  title: string;
  fontSize: number;
  colorHex: string;
  fontWeight: 300 | 400 | 500 | 600 | 700 | 800;
}
