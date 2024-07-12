<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { ILot } from "../../model/types";
import { timeViewer } from "shared/ui/time-viewer";
import { useWindowSize } from "@vueuse/core";
import ItemData from "./item-data.vue";
import { getFileByName } from "shared/services/file-service";
import { imageExplorer } from "shared/ui/image-explorer";
import { transferOption } from "../../model/lib/utils/transfer-option";
import { typeEngine, typeTransmission } from "shared/config/selectors";
import { IImage } from "shared/ui/image";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();

const { width } = useWindowSize();
const thisWidth = ref(width.value);
const thisElement = ref<HTMLDivElement | undefined>(undefined);

const images = ref<IImage[]>([]);

onMounted(async () => {
  for (const image of props.data.images) {
    const result = await getFileByName(image);
    images.value.push({ src: result.data[0].data, rotateIndex: result.data[0].rotateIndex });
  }
});

watch(width, () => {
  thisWidth.value = thisElement.value?.clientWidth || 0;
});

const isHover = ref(false);
</script>
<template>
  <div
    ref="thisElement"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    :class="thisWidth < 768 ? 'flex-col' : ''"
    class="flex flex-row gap-[21px] w-full duration-300 p-[12px] rounded-[10px] bg-smoky-white"
  >
    <imageExplorer :class="width < 788 ? '' : 'max-w-[538px]'" :images="images" />
    <div class="mt-[8px] w-full">
      <div>
        <div class="flex flex-wrap flex-row items-center justify-between gap-y-[10px]">
          <h3 class="mini-laptop:text-[32px] tablet:text-[24px] mobile:text-[18px] font-bold leading-[35.2px]">
            {{ props.data.title }}
          </h3>
          <timeViewer :date_deadline="new Date(props.data.date_deadline)" />
        </div>
        <ItemData class="mt-1" name="Продавец" :data="props.data.seller" />
      </div>
      <div class="flex flex-row flex-wrap gap-3 w-full max-w-[498px] justify-between mt-[24px]">
        <div class="flex flex-col gap-3">
          <ItemData name="Год выпуска" :data="`${String(props.data.release_year)}г.`" />
          <ItemData name="Пробег" :data="`${String(props.data.mileage)}км`" />
        </div>
        <div class="flex flex-col gap-3">
          <ItemData name="КПП" :data="transferOption(typeTransmission, props.data.type_transmission)" />
          <ItemData name="Двигатель" :data="transferOption(typeEngine, props.data.type_engine)" />
        </div>
      </div>

      <div>
        <slot name="features"></slot>
      </div>
    </div>
  </div>
</template>
