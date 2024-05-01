<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
  options: any;
  optionLabel?: string;
  placeholder?: string;
}

const props = defineProps<IProps>();
const model = defineModel<any>();
</script>
<template>
  <GroupContainer :title="props.title">
    <Dropdown
      v-model="model"
      :options="props.options"
      :optionLabel="props.optionLabel"
      :placeholder="props.placeholder"
    />
  </GroupContainer>
</template>
