<template>
  <canvas ref="pdfCanvas"></canvas>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as pdfjsLib from "pdfjs-dist";

interface IProps {
    data: string
}

const props = defineProps<IProps>()

// Установите путь к воркеру PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// Функция для конвертации base64 в ArrayBuffer
const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

// Ссылка на canvas элемент
const pdfCanvas = ref<HTMLCanvasElement | null>(null);

// Загружаем и рендерим PDF при монтировании компонента
onMounted(async () => {
  const arrayBuffer = base64ToArrayBuffer(props.data);
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);
  const scale = 1.5;
  const viewport = page.getViewport({ scale });
  const canvas = pdfCanvas.value;
  if (canvas) {
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context!,
      viewport: viewport,
    };
    page.render(renderContext);
  }
});
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
