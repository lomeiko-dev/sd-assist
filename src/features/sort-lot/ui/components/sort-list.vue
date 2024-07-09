<script setup lang="ts">
import { sortStore } from "features/sort-lot/model";
import { sortConfig } from "../../model/config/sort-config";
import SortButton from "./other/sort-button.vue";

const store = sortStore();
const emits = defineEmits(["change"]);

</script>
<template>
  <div class="flex flex-row items-center gap-4">
    <SortButton
      v-for="item in sortConfig"
      @click="$emit('change', item)"
      :is-active="store.selectTypeSort.typeSort === item.typeSort"
      :name="item.name"
    />
  </div>
</template>
