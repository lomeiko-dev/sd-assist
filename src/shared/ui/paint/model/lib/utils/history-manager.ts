import { IHistoryManagerMehods, IHistoryOptions } from "../../types";

export const historyManager = (
  context: CanvasRenderingContext2D | null,
  options: IHistoryOptions
): IHistoryManagerMehods => {
  const { width, height } = options;
  let history: ImageData[] = [];

  save();

  const undo = () => {
    if (context) {
      if (history.length > 1) history.pop();
      context.putImageData(history[history.length - 1], 0, 0);
    }
  };

  function save() {
    if (context) {
      const newSnapshot = context.getImageData(0, 0, width, height);
      if (newSnapshot) history.push(newSnapshot);
    }
  }

  return {
    save,
    undo,
  };
};
