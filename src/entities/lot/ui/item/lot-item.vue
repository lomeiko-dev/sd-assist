<script setup lang="ts">
import { ref, watch } from "vue";
import { ILot } from "../../model/types";
import { timeViewer } from "shared/ui/time-viewer";
import { useWindowSize } from "@vueuse/core";
import ItemData from "./item-data.vue";
import { getFileByName } from "shared/services/file-service";
import { watchEffect } from "vue";
import { transferOption } from "../../model/lib/utils/transfer-option";
import { typeEngine, typeTransmission } from "shared/config/selectors";
import { IImage, image as Image } from "shared/ui/image";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();

const { width } = useWindowSize();
const thisWidth = ref(width.value);
const thisElement = ref<HTMLDivElement | undefined>(undefined);

const imageData = ref<IImage>();

watchEffect(async () => {
  const result = await getFileByName(props.data.images[0]);
  imageData.value = { src: result.data[0].data, rotateIndex: result.data[0].rotateIndex };
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
    :class="thisWidth < 768 ? 'flex-col' : 'flex-row'"
    class="flex gap-[21px] w-full cursor-pointer duration-300 p-[12px] rounded-[10px] hover:bg-smoky-white"
  >
    <div :class="thisWidth < 768 ? 'w-full h-[300px]' : 'w-[294px] min-w-[294px] max-h-[400px]'">
      <Image class="w-full h-full" v-if="imageData" :image="imageData" />
    </div>
    <div class="mt-[8px] w-full">
      <div>
        <div class="flex flex-wrap flex-row items-center justify-between gap-y-[10px]">
          <h3 class="text-lg font-bold leading-[19px]">{{ props.data.title }} {{ `- Лот № ${props.data.id_lot}` }}</h3>
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
      <div class="flex flex-row items-center gap-4 mt-4">
        <p class="text-sm font-normal flex items-center gap-[6px] text-primary">Текущая цена:</p>
        <h4 class="text-base font-bold text-primary">
          {{ props.data.bids.length > 0 ? props.data.bids[props.data.bids.length - 1].rate : props.data.default_rate }}₽
        </h4>
        <h5 class="text-sm font-bold text-primary/50 line-through" v-if="props.data.bids.length > 1 && thisWidth > 768">
          {{ props.data.bids[props.data.bids.length - 2].rate }}₽
        </h5>
      </div>
      <div class="duration-200" :class="`${isHover || thisWidth < 768 ? 'opacity-100' : 'opacity-0'}`">
        <slot name="features"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.preview {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
