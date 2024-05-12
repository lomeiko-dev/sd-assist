import { CSSProperties, Ref } from "vue";

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

export interface IPaintMethods {
  createNewText: () => void;
  undo: () => void;
  showCropContainer: () => void;
  crop: () => void;
  save: () => void;
}

export interface IDrawToolsMethods {
  canvas: Ref<HTMLCanvasElement | null>;
  context: Ref<CanvasRenderingContext2D | null>;
  isDrawing: Ref<boolean>
  toggleDrawing: () => void;
  init: (ref: HTMLCanvasElement) => void;
  drawLine: (x: number, y: number) => void;
  drawRect: (x2: number, y2: number) => void;
  drawCircle: (x2: number, y2: number) => void;
  setCoord: (x: number, y: number, isStartPosition?: boolean) => void;
  draw: (x: number, y: number) => void;
}

export interface IHistoryManagerMehods {
  history: IHistoryStage[];
  save: (imageData?: string) => void;
  undo: () => void;
}

export interface IDrawOptions {
  color?: string;
  size?: number;
}

export interface ITextManager {
  texts: Ref<IText[]>;
  selectIndex: Ref<Number | null>;
  changedIndex: Ref<Number | null>;
  isChanged: Ref<boolean>;
  setChangedIndex: (index: number | null) => void;
  addText: () => void;
  movingText: (x: number, y: number) => void;
  setStartPosition: (x: number, y: number) => void;
  removeText: () => void;
  setSelectedText: (index: number | null) => void;
  generateStyleText: (index: number) => CSSProperties;
}

export interface IHistoryOptions {
  width: number;
  height: number;
  textManager: ITextManager;
}

export interface ICropManager {
  getShowContainer: () => boolean;
  crop: (recover_size: number) => void;
  setStartPosition: (x: number, y: number) => void;
  moveContainer: (x: number, y: number) => void;
  resizingContainer: (
    rect_width: number,
    rect_height: number,
    rect_top: number,
    rect_left: number,
    x: number,
    y: number,
    type: "sw" | "se" | "nw" | "ne"
  ) => void;
  generateStyleContainer: () => CSSProperties;
  toggleShowContainer: () => void;
}

export interface ICropContainer {
  x: number;
  y: number;
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

export interface IHistoryStage {
  imageData: string;
  texts: IText[];
}
