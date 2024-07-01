<script setup lang="ts">
import { enumSwitcherDetails } from "../../../../model/types";

interface IProps {
  selectSection: enumSwitcherDetails;
}

const props = defineProps<IProps>();
const emits = defineEmits(["setSelectSection"]);

const getStyleSelection = () => {
  return "text-primary selected";
};
</script>
<template lang="html">
  <div
    class="flex flex-row items-center justify-around text-base font-bold text-primary/50 border-y border-solid border-y-primary/20"
  >
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.DESCRIPTION)"
      :class="props.selectSection === enumSwitcherDetails.DESCRIPTION ? getStyleSelection() : ''"
      class="py-[28px] px-[20px] duration-300 relative"
    >
      Описание
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.TECHNICAL_CONDITION)"
      :class="props.selectSection === enumSwitcherDetails.TECHNICAL_CONDITION ? getStyleSelection() : ''"
      class="py-[28px] px-[20px] duration-300 relative"
    >
      Техническое состояние
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.COMMENT)"
      :class="props.selectSection === enumSwitcherDetails.COMMENT ? getStyleSelection() : ''"
      class="py-[28px] px-[20px] duration-300 relative"
    >
      Комментарий
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.DOCUMENTS)"
      :class="props.selectSection === enumSwitcherDetails.DOCUMENTS ? getStyleSelection() : ''"
      class="py-[28px] px-[20px] duration-300 relative"
    >
      Документы
    </button>
    <button
      @click="$emit('setSelectSection', enumSwitcherDetails.OTHER)"
      :class="props.selectSection === enumSwitcherDetails.OTHER ? getStyleSelection() : ''"
      class="py-[28px] px-[20px] duration-300 relative"
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
