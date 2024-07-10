<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { type IInputProps } from "../../model/types";

interface IProps {
  options: any;
  optionLabel?: string;
  optionValue?: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();
</script>
<template lang="html">
  <Dropdown
    class="select-none outline-none shadow-none base-dropdown w-full rounded-[10px]"
    v-model="model"
    :options="props.options"
    :option-label="props.optionLabel"
    :option-value="props.optionValue"
    :placeholder="props.placeholder"
  />
</template>
<style lang="scss">
.base-dropdown {
  .p-inputtext {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px !important;
    padding: 15px 12px !important;
  }
}
</style>
