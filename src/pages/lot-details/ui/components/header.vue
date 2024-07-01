<script setup lang="ts">
import downloadIcon from "shared/assets/icons/download.svg";
import vueInlineSvg from "vue-inline-svg";

interface IProps {
  idLot: string;
}

const props = defineProps<IProps>();

</script>
<template>
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-[32px] font-bold">Лот №{{ props.idLot }}</h3>
    <div class="flex flex-row items-center gap-2">
      <button class="border border-solid border-primary/20 rounded-full p-[10px] duration-300 hover:bg-primary/20">
        <vueInlineSvg :src="downloadIcon" />
      </button>
      <button
        class="border border-solid border-primary/20 rounded-md px-[13px] py-[6px] font-normal text-base text-primary duration-300 hover:bg-primary/20"
      >
        Условия продажи
      </button>
      <button
        class="border border-solid border-primary/20 rounded-md px-[13px] py-[6px] font-normal text-base text-primary duration-300 hover:bg-primary/20"
      >
        Проверить в ГИБДД
      </button>
    </div>
  </div>
</template>
