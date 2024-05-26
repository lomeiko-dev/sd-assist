import { CSSProperties, ref } from "vue";
import { getDataUrlByImageData } from "../helpers/getDataUrlByImageData";
import { ICropContainer, ICropManager } from "../types";

export const cropManager = (context: CanvasRenderingContext2D | null, options?: ICropContainer): ICropManager => {
  const cropContainer = ref<ICropContainer>({
    x: options?.x || 0,
    y: options?.y || 0,
    width: options?.width || 100,
    height: options?.height || 100,
  });

  let start_x = 0;
  let start_y = 0;

  const isShowContainer = ref<boolean>(false);

  const getShowContainer = () => isShowContainer.value;

  const toggleShowContainer = () => {
    isShowContainer.value = !isShowContainer.value;
  };

  const crop = (recover_size: number) => {
    if (context) {
      const snapshot = context.getImageData(
        cropContainer.value.x,
        cropContainer.value.y,
        cropContainer.value.width,
        cropContainer.value.height
      );
      context.clearRect(0, 0, 1500, 800);
      const image = getDataUrlByImageData(snapshot, cropContainer.value.width, cropContainer.value.height);
      image.onload = () => {
        let scale;
        if (image.width > image.height) {
          scale = context.canvas.width / image.width;
        } else {
          scale = context.canvas.height / image.height;
        }

        context.canvas.width = image.width * scale;
        context.canvas.height = image.height * scale;
        context.lineWidth = recover_size * 2;
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width * scale, image.height * scale);

        isShowContainer.value = false;
      };
    }
  };

  const setStartPosition = (x: number, y: number) => {
    start_x = x;
    start_y = y;
  };

  const moveContainer = (x: number, y: number) => {
    cropContainer.value.x = x - start_x;
    cropContainer.value.y = y - start_y;
  };

  const resizingContainer = (
    rect_width: number,
    rect_height: number,
    rect_top: number,
    rect_left: number,
    x: number,
    y: number,
    type: "sw" | "se" | "nw" | "ne"
  ) => {
    console.log(type);
    switch (type) {
      case "sw":
        cropContainer.value.width = rect_width + (start_x - x);
        cropContainer.value.height = rect_height - (start_y - y);
        cropContainer.value.x = rect_left - (start_x - x);
        break;
      case "se":
        cropContainer.value.width = rect_width - (start_x - x);
        cropContainer.value.height = rect_height - (start_y - y);
        break;
      case "nw":
        cropContainer.value.width = rect_width + (start_x - x);
        cropContainer.value.height = rect_height + (start_y - y);
        cropContainer.value.y = rect_top - (start_y - y);
        cropContainer.value.x = rect_left - (start_x - x);
        break;
      case "ne":
        cropContainer.value.width = rect_width - (start_x - x);
        cropContainer.value.height = rect_height + (start_y - y);
        cropContainer.value.y = rect_top - (start_y - y);
        break;
      default:
        break;
    }

    setStartPosition(x, y);
  };

  const generateStyleContainer = (): CSSProperties => {
    return {
      left: `${cropContainer.value.x}px`,
      top: `${cropContainer.value.y}px`,
      width: `${cropContainer.value.width}px`,
      height: `${cropContainer.value.height}px`,
    };
  };

  return {
    getShowContainer,
    crop,
    setStartPosition,
    moveContainer,
    generateStyleContainer,
    resizingContainer,
    toggleShowContainer,
  };
};
