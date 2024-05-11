import { ref } from "vue";
import { IHistoryManagerMehods, IHistoryOptions, IHistoryStage, IText } from "../../types";
import { drawAdaptiveImage } from "../helpers/draw-adaptive-image";

export const historyManager = (
  context: CanvasRenderingContext2D | null,
  canvas: HTMLCanvasElement,
  options: IHistoryOptions
): IHistoryManagerMehods => {
  const { width, height, textManager } = options;
  const history :IHistoryStage[] = [];

  const undo = () => {
    if (context) {
      if (history.length > 1) {
        history.pop();
      }

      const stage = history[history.length - 1];
      drawAdaptiveImage(stage.imageData, context, width, height);
      textManager.texts.value = [...stage.texts];
    }
  };

  const save = (imageData?: string) => {
    if (context) {
      const imageSrc = imageData || canvas.toDataURL();
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
      console.log(history);
    }
  };

  return {
    history,
    save,
    undo,
  };
};
