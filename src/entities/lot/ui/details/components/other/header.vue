<script setup lang="ts">
import { enumSwitcherDetails } from "../../../../model/types";
import {useWindowSize} from '@vueuse/core'

interface IProps {
  selectSection: enumSwitcherDetails;
}

const props = defineProps<IProps>();
const emits = defineEmits(["setSelectSection"]);
const {width} = useWindowSize()

const getStyleSelection = () => {
  return `text-primary ${width.value < 768 ? '' : 'selected'}`;
};
</script>
<template lang="html">
  <div
    class="flex tablet:flex-row flex-col tablet:items-center items-start tablet:w-full w-[140px] justify-around text-base font-bold text-primary/50 border-y border-solid border-y-primary/20"
  >
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.DESCRIPTION)"
      :class="props.selectSection === enumSwitcherDetails.DESCRIPTION ? getStyleSelection() : ''"
      class="tablet:py-[28px] py-[20px] px-[20px] duration-300 relative"
    >
      Описание
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.TECHNICAL_CONDITION)"
      :class="props.selectSection === enumSwitcherDetails.TECHNICAL_CONDITION ? getStyleSelection() : ''"
      class="tablet:py-[28px] py-[20px] px-[20px] duration-300 relative"
    >
      Техническое состояние
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.COMMENT)"
      :class="props.selectSection === enumSwitcherDetails.COMMENT ? getStyleSelection() : ''"
      class="tablet:py-[28px] py-[20px] px-[20px] duration-300 relative"
    >
      Комментарий
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.DOCUMENTS)"
      :class="props.selectSection === enumSwitcherDetails.DOCUMENTS ? getStyleSelection() : ''"
      class="tablet:py-[28px] py-[20px] px-[20px] duration-300 relative"
    >
      Документы
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.OTHER)"
      :class="props.selectSection === enumSwitcherDetails.OTHER ? getStyleSelection() : ''"
      class="tablet:py-[28px] py-[20px] px-[20px] duration-300 relative"
    >
      Прочее
    </button>
  </div>
</template>
<style scoped lang="scss">
.selected::before{
    content: "";
    position: absolute;
    bottom: -1.5px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #163C66;
    z-index: 1;
}
</style>
