<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import ColorItem from "./components/color-item.vue";
import { colorList } from "../model/lib/color-list";

interface IProps {
  title: string;
}

const props = defineProps<IProps>(); 
// const model = defineModel<string>();

</script>
<template>
  <InputGroup class="rounded-[10px]">
    <InputGroupAddon class="whitespace-nowrap border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p class="text-xs font-normal text-gray leading-[14.4px]">
        {{ props.title }}
      </p>
    </InputGroupAddon>
    <div class="bg-white flex flex-row flex-wrap w-full panel gap-[13px] items-center mini-laptop:pl-[32px] mini-laptop:my-0 my-[10px]">
      <ColorItem v-for="item in colorList" :tooltip="item.title" :style-sheet="item.style"/>
    </div>
  </InputGroup>
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
