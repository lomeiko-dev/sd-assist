<script setup lang="ts">
import { getFileByName } from "shared/services/file-service";
import { pdfViewer } from "shared/ui/pdf-viewer";
import { onMounted } from "vue";
import { ref } from "vue";

interface IProps {
  files: string[];
}

const props = defineProps<IProps>();

const dataFiles = ref<string[]>([]);

onMounted(async () => {
  for (let i = 0; i < props.files.length; i++) {
    const result = await getFileByName(props.files[i]);
    dataFiles.value.push(result.data[0].data);
  }
});
</script>
<template>
  <div>
    <pdfViewer
      v-if="props.files.length > 0"
      v-for="(item, index) in dataFiles"
      :data="item"
      :title="`Документ ${index + 1}`"
    />
    <div v-else>Документов нет.</div>
  </div>
</template>
