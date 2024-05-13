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
  save: () => string | undefined;
}

