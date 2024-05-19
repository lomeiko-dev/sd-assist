export const getDataUrlByImageData = (image: ImageData, width: number, height: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (context) context.putImageData(image, 0, 0);

  const image_object = new Image();
  image_object.src = canvas.toDataURL();

  return image_object
};
