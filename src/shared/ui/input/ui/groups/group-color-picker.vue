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
      class="bg-white flex flex-row flex-wrap w-full panel gap-[13px] items-center mini-tablet:pl-[32px] mini-tablet:my-0 my-[10px]"
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
<style scoped lang="scss">
.panel {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
  border-radius: 5px;
}

@media (max-width: 640px) {
  .panel {
    box-shadow: none;
  }
}
</style>
