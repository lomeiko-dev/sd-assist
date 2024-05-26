export const getRelativeBoundingClientRect = (targetElement: HTMLDivElement, parentElement: HTMLDivElement) => {
  const targetRect = targetElement.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();

  const relativeRect = {
    top: targetRect.top - parentRect.top,
    right: targetRect.right - parentRect.left,
    bottom: targetRect.bottom - parentRect.top,
    left: targetRect.left - parentRect.left,
    width: targetRect.width,
    height: targetRect.height,
  };

  return relativeRect;
};
