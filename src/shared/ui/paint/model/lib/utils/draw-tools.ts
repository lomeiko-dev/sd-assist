import { IDrawOptions } from "../../types";
import { IDrawToolsMethods } from "../../types";

export const drawTools = (
  context: CanvasRenderingContext2D | null,
  options: IDrawOptions
): IDrawToolsMethods => {
  const { color = "#000000", size = 10, width, height } = options;

  let prev_x = 0;
  let prev_y = 0;
  let snapshot: ImageData | null = null;

  init();

  function init() {
    if (context) {
      context.fillStyle = color;
      context.strokeStyle = color;
      context.lineWidth = size * 2;
    }
  }

  const setCoord = (x: number, y: number, isStartPosition?: boolean) => {
    prev_x = x;
    prev_y = y;

    if (context && isStartPosition) snapshot = context.getImageData(0, 0, width, height);
  };

  const draw = (x: number, y: number) => {
    if (context) {
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fill();

      context.beginPath();
      context.moveTo(prev_x, prev_y);
      context.lineTo(x, y);
      context.stroke();
      setCoord(x, y);
    }
  };

  const drawLine = (x: number, y: number) => {
    if (context && snapshot) {
      context.putImageData(snapshot, 0, 0);
      context.beginPath();
      context.moveTo(prev_x, prev_y);
      context.lineTo(x, y);
      context.stroke();
    }
  };

  const drawCircle = (x: number, y: number) => {
    if (context && snapshot) {
      const radiusX = Math.abs(x - prev_x) / 2;
      const radiusY = Math.abs(y - prev_y) / 2;

      const centerX = (prev_x + x) / 2;
      const centerY = (prev_y + y) / 2;

      context.putImageData(snapshot, 0, 0);
      context.beginPath();
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
      context.stroke();
    }
  };

  const drawRect = (x2: number, y2: number) => {
    if (context && snapshot) {
      context.putImageData(snapshot, 0, 0);
      context.strokeRect(prev_x, prev_y, x2 - prev_x, y2 - prev_y);
    }
  };

  return {
    drawLine,
    drawCircle,
    drawRect,
    setCoord,
    draw,
  };
};
