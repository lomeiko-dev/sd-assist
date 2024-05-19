import { IImage } from "shared/ui/image/model/types";

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
  save: () => IImage | undefined;
}

