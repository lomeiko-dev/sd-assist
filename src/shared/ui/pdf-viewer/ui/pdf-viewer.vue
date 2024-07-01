<script setup lang="ts">
import documentIcon from "shared/assets/icons/document.svg";
import { ref } from "vue";
import { onMounted } from "vue";
import vueInlineSvg from "vue-inline-svg";

interface IProps {
  data: string;
  title: string;
}

const props = defineProps<IProps>();

const pdf = ref<string>("");

onMounted(() => {
  const binaryString = atob(props.data);
  const uint8Array = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  pdf.value = url;
});
</script>
<template>
  <div class="flex flex-row items-center gap-10 py-5 border-b border-solid border-b-primary">
    <vueInlineSvg class="w-[32px] h-[32px]" :src="documentIcon" />
    <div>
      <p class="text-sm font-bold text-primary/80">{{ props.title }}</p>
    </div>
    <a :href="pdf" class="text-sm text-primary hover:text-primary-darker">Download</a>
  </div>
</template>
