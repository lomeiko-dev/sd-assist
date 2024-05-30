<script setup lang="ts">
import GroupContainer from "../components/group-container.vue";
import ColorItem from "../components/color-item.vue";
import { colorList } from "../../model/lib/color-list";
import { IColorItem, IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<IColorItem>();
</script>
<template>
  <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
    <div
      class="bg-white flex flex-row flex-wrap w-full gap-[10px] items-center mini-tablet:pl-[16px] mini-tablet:my-0 my-[10px]"
    >
      <ColorItem
        v-for="item in colorList"
        :is-active="model?.title === item.title"
        :onclick="() => (model = item)"
        :tooltip="item.title"
        :style-sheet="item.style"
      />
    </div>
  </GroupContainer>
</template>
