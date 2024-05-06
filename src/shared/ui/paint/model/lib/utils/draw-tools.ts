import { IDrawOptions } from "../../types";
import { IDrawToolsMethods } from "../../types";

export const drawTools = (context: CanvasRenderingContext2D | null, options: IDrawOptions): IDrawToolsMethods => {
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

  function snapshoting(x: number, y: number, width: number, height: number, isApply?: boolean) {
    if (context) {
      snapshot = context.getImageData(x, y, width, height);

      if (isApply) {
        context.putImageData(snapshot, 0, 0);
      }
    }
  }

  const setCoord = (x: number, y: number) => {
    prev_x = x;
    prev_y = y;
  };

  const resetCoord = () => {
    prev_x = 0;
    prev_y = 0;
  };

  const loadImage = (src: string, width: number, height: number) => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      if (context) {

        let scale;
        if (image.width > image.height) {
          scale = width / image.width;
        } else {
          scale = height / image.height;
        }

        const dx = (width - image.width * scale) / 2;
        const dy = (height - image.height * scale) / 2;

        context.drawImage(image, 0, 0, image.width, image.height, dx, dy, image.width * scale, image.height * scale);
      }
    };
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
    loadImage,
    drawLine,
    snapshoting,
    drawCircle,
    drawRect,
    resetCoord,
    setCoord,
    draw,
  };
};
