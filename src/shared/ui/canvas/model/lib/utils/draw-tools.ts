import { ref } from "vue";
import { getDataUrlByImageData } from "../helpers/getDataUrlByImageData";
import { IDrawOptions, IDrawToolsMethods } from "../types";

export const drawTools = (options: IDrawOptions): IDrawToolsMethods => {
  const { color = "#000000", size = 10 } = options;

  let prev_x = 0;
  let prev_y = 0;
  let snapshot: ImageData | null = null;

  const canvas = ref<HTMLCanvasElement | null>(null);
  const context = ref<CanvasRenderingContext2D | null>(null);
  const isDrawing = ref(false);
  let this_size = size;

  const toggleDrawing = () => {
    isDrawing.value = !isDrawing.value;
  };

  const init = (ref: HTMLCanvasElement) => {
    canvas.value = ref;
    context.value = canvas.value.getContext("2d");

    if (context.value) {
      context.value.fillStyle = color;
      context.value.strokeStyle = color;
      context.value.lineWidth = size * 2; 
      this_size = size;
    }
  };

  const setColor = (color: string) => {
    if (context.value) {
      context.value.fillStyle = color;
      context.value.strokeStyle = color;
    }
  };

  const setSize = (size: number) => {
    if (context.value) {
      context.value.lineWidth = size * 2;
      this_size = size;
    }
  };

  const setCoord = (x: number, y: number, isStartPosition?: boolean) => {
    prev_x = x;
    prev_y = y;

    if (context.value && isStartPosition)
      snapshot = context.value.getImageData(0, 0, context.value.canvas.width, context.value.canvas.height);
  };

  const draw = (x: number, y: number) => {
    if (context.value) {
      context.value.beginPath();
      context.value.arc(x, y, this_size, 0, 2 * Math.PI);
      context.value.fill();

      context.value.beginPath();
      context.value.moveTo(prev_x, prev_y);
      context.value.lineTo(x, y);
      context.value.stroke();
      setCoord(x, y);
    }
  };

  const drawLine = (x: number, y: number) => {
    if (context.value && snapshot) {
      context.value.putImageData(snapshot, 0, 0);
      context.value.beginPath();
      context.value.moveTo(prev_x, prev_y);
      context.value.lineTo(x, y);
      context.value.stroke();
    }
  };

  const drawCircle = (x: number, y: number) => {
    if (context.value && snapshot) {
      const radiusX = Math.abs(x - prev_x) / 2;
      const radiusY = Math.abs(y - prev_y) / 2;

      const centerX = (prev_x + x) / 2;
      const centerY = (prev_y + y) / 2;

      context.value.putImageData(snapshot, 0, 0);
      context.value.beginPath();
      context.value.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
      context.value.stroke();
    }
  };

  const drawRect = (x2: number, y2: number) => {
    if (context.value && snapshot) {
      context.value.putImageData(snapshot, 0, 0);
      context.value.strokeRect(prev_x, prev_y, x2 - prev_x, y2 - prev_y);
    }
  };

  const getPicture = (): HTMLImageElement | null => {
    if (context.value && canvas.value) {
      const img = context.value.getImageData(0, 0, canvas.value.width, canvas.value.height);
      const dataUrl = getDataUrlByImageData(img, canvas.value.width, canvas.value.height);

      return dataUrl;
    }

    return null;
  };

  return {
    canvas,
    context,
    isDrawing,
    setColor,
    setSize,
    getPicture,
    toggleDrawing,
    init,
    drawLine,
    drawCircle,
    drawRect,
    setCoord,
    draw,
  };
};
