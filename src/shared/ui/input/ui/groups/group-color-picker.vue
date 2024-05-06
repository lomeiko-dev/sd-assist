<script setup lang="ts">
import ColorItem from "../components/color-item.vue";
import { colorList } from "../../model/lib/color-list";
import { IColorItem } from "../../model/types";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<IColorItem>();
</script>
<template>
  <GroupContainer :title="props.title">
    <div
      class="bg-white flex flex-row flex-wrap w-full gap-[13px] items-center mini-tablet:pl-[32px] mini-tablet:my-0 my-[10px]"
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
