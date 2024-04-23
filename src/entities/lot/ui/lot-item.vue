<script setup lang="ts">
import { ref } from "vue";
import { ILot } from "../model/types";
import { timeViewer } from "shared/ui/time-viewer";
interface IProps {
  data: ILot;
  isMobile?: boolean;
}

const props = defineProps<IProps>();

const isHover = ref(false);

</script>
<template>
  <div @mouseenter="isHover = true" @mouseleave="isHover = false" :class="props.isMobile ? '' : 'max-w-[904px]'" class="flex flex-row flex-wrap gap-[21px] w-full cursor-pointer duration-300 p-[12px] rounded-[10px] hovered">
   <div 
      :style="`background-image: url(${props.data.image_preview})`"
      :class="isMobile ? 'w-full h-[300px]' : 'w-[294px] h-[218px]'"
      class="preview rounded-[10px]"></div>
    <div :class="props.isMobile ? '' : 'max-w-[560px]'" class="mt-[8px] w-full">
        <div>
            <div class="flex flex-wrap flex-row items-center justify-between gap-y-[10px]">
               <h3 class="text-lg font-bold leading-[19px] w-full max-w-[408px] overflow-hidden whitespace-nowrap text-ellipsis">{{ props.data.title }} - Лот № {{ props.data.id_lot }}</h3>
               <timeViewer :date="new Date(props.data.date_create)" :date_deadline="new Date(props.data.date_deadline)"/>
            </div>
            <div class="flex items-start mt-[6px] gap-[5px]">
              <p class="text-sm font-normal text-gray-500 gap-[4px] mt-[2px] leading-[16px]">Продавец:</p>
              <h4 class="text-sm font-semibold text-black text-ellipsis whitespace-nowrap overflow-hidden w-full max-w-[280px]">{{ props.data.seller }}</h4>
            </div>
        </div>
        <div class="flex flex-row flex-wrap w-full justify-between mt-[24px]">
            <div>
               <div class="flex flex-row items-center gap-[5px]">
                  <p class="text-sm font-normal text-gray-500 leading-[16px]">Год выпуска:</p>
                  <h4 class="text-sm font-semibold text-black">{{ props.data.release_year }}</h4>
               </div>
               <div class="flex flex-row items-center gap-[5px]">
                  <p class="text-sm font-normal text-gray-500 gap-[4px] leading-[16px]">Пробег:</p>
                  <h4 class="text-sm font-semibold text-black">{{ props.data.mileage }} км</h4>
               </div>
            </div>
            <div>
              <div class="flex flex-row items-center gap-[5px]">
                  <p class="text-sm font-normal text-gray-500 leading-[16px]">КПП:</p>
                  <h4 class="text-sm font-semibold text-black">{{ props.data.KPP }}</h4>
               </div>
               <div class="flex flex-row items-center gap-[5px]">
                  <p class="text-sm font-normal text-gray-500 gap-[4px] leading-[16px]">Двигатель:</p>
                  <h4 class="text-sm font-semibold text-black">{{ props.data.engine }}</h4>
               </div>
            </div>
        </div>
        <div class="flex flex-row items-center gap-4 mt-4">
            <p class="text-sm font-normal flex items-center gap-[6px] text-primary">Текущая цена: <h4 class="text-base font-bold">{{ props.data.bids.length > 1 ? props.data.bids[props.data.bids.length-1].rate : props.data.default_rate }}₽</h4></p>
            <h5 class="text-sm font-bold text-primary/50 line-through" v-if="props.data.bids.length > 2 && !props.isMobile">{{  props.data.bids[props.data.bids.length-2].rate }}₽</h5>
        </div>
        <div class="duration-200" :class="isHover || props.isMobile ? 'opacity-100' : 'opacity-0'">
            <div class="flex gap-[6px] mt-[8px]" :class="props.isMobile ? 'flex-col' : 'flex-row'">
               <button class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white duration-200 hover:bg-primary/70">Сделать ставку</button>
               <button class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white whitespace-nowrap duration-200 hover:bg-primary/70">Сделать автоматическую ставку</button>
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
