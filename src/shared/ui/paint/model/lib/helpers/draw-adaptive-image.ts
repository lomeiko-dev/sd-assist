export const drawAdaptiveImage = (src: string, context: CanvasRenderingContext2D, width: number, height: number) => {
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
