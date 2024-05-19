import { CSSProperties, Ref } from "vue";

export interface IDrawToolsMethods {
  canvas: Ref<HTMLCanvasElement | null>;
  context: Ref<CanvasRenderingContext2D | null>;
  isDrawing: Ref<boolean>;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  toggleDrawing: () => void;
  init: (ref: HTMLCanvasElement) => void;
  drawLine: (x: number, y: number) => void;
  drawRect: (x2: number, y2: number) => void;
  drawCircle: (x2: number, y2: number) => void;
  setCoord: (x: number, y: number, isStartPosition?: boolean) => void;
  draw: (x: number, y: number) => void;
  getPicture: () => HTMLImageElement | null;
}
export interface IDrawOptions {
  color?: string;
  size?: number;
}

export interface IHistoryManager {
  history: IHistoryStage[];
  save: (imageData?: string) => void;
  undo: () => void;
}
export interface IHistoryStage {
  imageData: string;
  texts: IText[];
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

export interface ITextManager {
  drawAllTexts: (context: CanvasRenderingContext2D, offset_x: number, offset_y: number) => void;
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
export interface IText {
  x: number;
  y: number;
  title: string;
  fontSize: number;
  colorHex: string;
  fontWeight: 300 | 400 | 500 | 600 | 700 | 800;
}
