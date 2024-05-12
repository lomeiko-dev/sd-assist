import { IHistoryManagerMehods, IHistoryStage, IText, ITextManager } from "../../types";
import { drawAdaptiveImage } from "../helpers/draw-adaptive-image";

export const historyManager = (
  context: CanvasRenderingContext2D | null,
  textManager: ITextManager
): IHistoryManagerMehods => {
  const history :IHistoryStage[] = [];

  const undo = () => {
    if (context) {
      if (history.length > 1) {
        history.pop();
      }

      const stage = history[history.length - 1];
      drawAdaptiveImage(stage.imageData, context, context.canvas.width, context.canvas.height);
      textManager.texts.value = [...stage.texts];
    }
  };

  const save = (imageData?: string) => {
    if (context) {
      const imageSrc = imageData || context.canvas.toDataURL();
      const newTexts: IText[] = [];

      textManager.texts.value.forEach((item) => {
        newTexts.push({
          x: item.x,
          y: item.y,
          title: item.title,
          fontSize: item.fontSize,
          colorHex: item.colorHex,
          fontWeight: item.fontWeight,
        });
      });

      history.push({ imageData: imageSrc, texts: newTexts });
    }
  };

  return {
    history,
    save,
    undo,
  };
};
