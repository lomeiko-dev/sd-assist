<script setup lang="ts">
import { ref } from "vue";
import Node from "./components/node.vue";
import { watch } from "vue";

interface IProps {
  steps: string[];
  selectedIndex?: number;
  passedNumber?: number;
  isMobile?: boolean;
}

const props = defineProps<IProps>();

watch(
  () => props.selectedIndex,
  () => {
    if (props.isMobile) {
      if (props.selectedIndex) moveNode(props.selectedIndex - 1);
    }
  }
);

const nodeRef = ref<(HTMLDivElement | null)[]>([]);
const nodesOffset = ref<number>(0);

const moveNode = (index: number) => {
  if (nodeRef.value.length > 0) {
    nodesOffset.value = 0;
    for (let i = 0; i < index; i++) {
      const rect = nodeRef.value[i]?.getBoundingClientRect();
      if (rect) {
        const value = rect.width + 20;
        nodesOffset.value -= value;
      }
    }
  }
};
</script>
<template>
  <div class="relative" :class="props.isMobile ? 'overflow-hidden' : ''">
    <div
      :style="`left: ${nodesOffset}px`"
      class="flex absolute"
      :class="`${props.isMobile ? 'flex-row gap-5' : 'flex-col'}`"
    >
      <div ref="nodeRef" v-for="(item, index) in props.steps">
        <Node
          :is-mobile="isMobile || false"
          :is-active="index < (props.selectedIndex || 0)"
          :is-start-node="index === 0"
          :is-passed="index < (props.passedNumber || 0)"
          :index="index"
          :title="item"
        />
      </div>
    </div>
  </div>
</template>