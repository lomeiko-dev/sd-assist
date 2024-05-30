<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

interface IProps {
  options: any;
  optionLabel?: string;
}

const props = defineProps<(IInputProps & IProps)>();
const model = defineModel<any>();
</script>
<template>
  <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
    <Dropdown
      class="select-none outline-none"
      v-model="model"
      :options="props.options"
      :optionLabel="props.optionLabel"
      placeholder="Не выбрано"
    />
  </GroupContainer>
</template>
