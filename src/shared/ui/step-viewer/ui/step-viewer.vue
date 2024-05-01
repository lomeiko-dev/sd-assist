<script setup lang="ts">
import Node from "./components/node.vue";

interface IProps {
  steps: string[];
  selectedIndex?: number;
}

const props = defineProps<IProps>();
</script>
<template>
  <div>
    <Node
      v-for="(item, index) in props.steps"
      :is-active="index < (props.selectedIndex || 0)"
      :is-start-node="index === 0"
      :index="index"
      :title="item"
    />
  </div>
</template>
<style lang="scss"></style>
