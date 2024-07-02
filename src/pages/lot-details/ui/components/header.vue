<script setup lang="ts">
import {formAddArchive} from "features/archived-lot";
import downloadIcon from "shared/assets/icons/download.svg";
import vueInlineSvg from "vue-inline-svg";

interface IProps {
  idLot: string;
  lotId: number;
}

const props = defineProps<IProps>();

</script>
<template>
  <div class="flex mini-tablet:flex-row flex-col justify-between mini-tablet:items-center items-start gap-2">
    <h3 class="tablet:text-[32px] text-[24px] font-bold">Лот №{{ props.idLot }}</h3>
    <div class="flex flex-row items-center gap-2">
      <button class="border border-solid border-primary/20 rounded-full p-[10px] duration-300 hover:bg-primary/20">
        <vueInlineSvg :src="downloadIcon" />
      </button>
      <button
        class="border border-solid border-primary/20 rounded-md px-[13px] py-[6px] font-normal text-base text-primary duration-300 hover:bg-primary/20"
      >
        Условия продажи
      </button>
      <formAddArchive :lot-id="props.lotId"/>
    </div>
  </div>
</template>
