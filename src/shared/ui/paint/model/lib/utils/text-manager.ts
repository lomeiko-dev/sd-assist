import { CSSProperties, ref } from "vue";
import { IText, ITextManager } from "../../types";

export const textManager = (): ITextManager => {
  const texts = ref<IText[]>([]);

  const selectIndex = ref<number | null>(null);
  const changedIndex = ref<number | null>(null);
  const isChanged = ref(false)

  const x_start = ref(0);
  const y_start = ref(0);

  const setSelectedText = (index: number | null) => {
    selectIndex.value = index;
  };

  const setChangedIndex = (index: number | null) => {
    changedIndex.value = index;
    isChanged.value = index !== null;
  };

  const addText = () => {
    const newText: IText = {
        x: 50,
        y: 50,
        title: "Новый текст",
        fontSize: 16,
        colorHex: "#000000",
        fontWeight: 400,
    }
    console.log('sdgsdg')
    texts.value.push(newText);
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

  const generateStyleText = (index: number): CSSProperties => {
    const text = texts.value[index]
    return{
        left: `${text.x}px`,
        top: `${text.y}px`,
        color: `${text.colorHex}`,
        fontSize: `${text.fontSize}px`,
        fontWeight: `${text.fontWeight}`
    }
  }

  return {
    texts,
    isChanged,
    addText,
    removeText,
    setStartPosition,
    movingText,
    selectIndex,
    changedIndex,
    setChangedIndex,
    setSelectedText,
    generateStyleText
  };
};
