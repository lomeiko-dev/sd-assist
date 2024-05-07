import { ref } from "vue";
import { IText, ITextManager } from "../../types";

export const textManager = (): ITextManager => {
  const texts = ref<IText[]>([]);
  const selectIndex = ref<number | null>(null);

  const x_start = ref(0);
  const y_start = ref(0);

  const setSelectedText = (index: number | null) => {
    console.log("setSelecte")
    selectIndex.value = index;
  };

  const addText = () => {
    texts.value.push({
      x: 50,
      y: 50,
      title: "Новый текст",
      fontSize: 16,
      colorHex: "#000000",
      fontWeight: 400,
    });
  };

  const removeText = () => {
    if (selectIndex.value !== null) {
      texts.value.splice(selectIndex.value, 1);
      selectIndex.value = null;
    }
  };

  const setStartPosition = (x: number, y: number) => {
    x_start.value = x;
    y_start.value = y;
  };

  const movingText = (x: number, y: number) => {
    if (selectIndex.value !== null) {
      const text = texts.value[selectIndex.value];
      text.x = x - x_start.value;
      text.y = y - y_start.value;
    }
  };

  return {
    texts,
    addText,
    removeText,
    setStartPosition,
    movingText,
    selectIndex,
    setSelectedText,
  };
};
