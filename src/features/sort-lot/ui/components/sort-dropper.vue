<script setup lang="ts">
import { sortConfig } from "../../model/config/sort-config";
import Dropdown from "primevue/dropdown";
import settingsIcon from "shared/assets/icons/settings.svg";
import inlineSvg from "vue-inline-svg";
import { sortStore } from "../../model/store/sort-store";
import { watch } from "vue";

const store = sortStore();
const emits = defineEmits(['change'])

watch(() => store.selectTypeSort, () => {
    emits('change', store.selectTypeSort)
})

</script>
<template>
  <button>
    <Dropdown
      class="border-b border-solid border-primary/70 rounded-none select-none"
      v-model="store.selectTypeSort"
      :options="sortConfig"
      optionLabel="name"
    >
      <template #dropdownicon>
        <inlineSvg :src="settingsIcon" />
      </template>
    </Dropdown>
  </button>
</template>
