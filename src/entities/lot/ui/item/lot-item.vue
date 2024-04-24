<script setup lang="ts">
import { ref, watch} from "vue";
import { ILot } from "../../model/types";
import { timeViewer } from "shared/ui/time-viewer";
import { useWindowSize } from "@vueuse/core";
import ItemData from "./item-data.vue";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();

const {width} = useWindowSize()
const thisWidth = ref(width.value)
const thisElement = ref<HTMLDivElement | undefined>(undefined)

watch(width, () => {
   thisWidth.value = thisElement.value?.clientWidth || 0
})

const isHover = ref(false);

</script>
<template>
  <div ref="thisElement" @mouseenter="isHover = true" @mouseleave="isHover = false" :class="thisWidth < 768 ? 'flex-col' : ''" class="flex flex-row gap-[21px] w-full cursor-pointer duration-300 p-[12px] rounded-[10px] hovered">
   <div 
      :style="`background-image: url(${props.data.image_preview})`"
      :class="thisWidth < 768 ? 'w-full h-[300px]' : 'w-[294px] min-w-[294px] max-h-[400px]'"
      class="preview rounded-[10px]"></div>
    <div class="mt-[8px] w-full">
        <div>
            <div class="flex flex-wrap flex-row items-center justify-between gap-y-[10px]">
               <h3 class="text-lg font-bold leading-[19px]">{{ props.data.title }} - Лот № {{ props.data.id_lot }}</h3>
               <timeViewer :date_deadline="new Date(props.data.date_deadline)"/>
            </div>
            <ItemData name="Продавец" :data="props.data.seller"/>
        </div>
        <div class="flex flex-row flex-wrap w-full max-w-[498px] justify-between mt-[24px]">
            <div>
               <ItemData name="Год выпуска" :data="`${String(props.data.release_year)}г.`"/>
               <ItemData name="Пробег" :data="`${String(props.data.mileage)}км`"/>
            </div>
            <div>
               <ItemData name="КПП" :data="String(props.data.KPP)"/>
               <ItemData name="Двигатель:" :data="String(props.data.engine)"/>

            </div>
        </div>
        <div class="flex flex-row items-center gap-4 mt-4">
            <p class="text-sm font-normal flex items-center gap-[6px] text-primary">Текущая цена:</p>
            <h4 class="text-base font-bold text-primary">{{ props.data.bids.length > 1 ? props.data.bids[props.data.bids.length-1].rate : props.data.default_rate }}₽</h4>
            <h5 class="text-sm font-bold text-primary/50 line-through" v-if="props.data.bids.length > 2 && thisWidth > 768">{{  props.data.bids[props.data.bids.length-2].rate }}₽</h5>
        </div>
        <div class="duration-200" :class="isHover || thisWidth < 768 ? 'opacity-100' : 'opacity-0'">
            <div class="flex gap-[6px] mt-[8px]" :class="thisWidth < 768 ? 'flex-col' : 'flex-row'">
               <button class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white duration-200 hover:bg-primary/70">Сделать ставку</button>
               <button class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white whitespace-nowrap duration-200 hover:bg-primary/70">Автоматическая ставка</button>
            </div>
         </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

.hovered:hover{
   background-color: #F2F8FF;
}
.preview {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
