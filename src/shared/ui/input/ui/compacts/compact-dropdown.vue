<script setup lang="ts">
import { enumTypeUI, IInputProps } from "../../model/types";
import { baseDropdown } from "../base";
import { groupDropdownSelect } from "../groups";

interface IProps {
  options: any;
  optionLabel?: string;
  optionValue?: string;
  typeUI: enumTypeUI;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();
</script>
<template>
  <groupDropdownSelect
    v-if="props.typeUI === enumTypeUI.GROUP"
    :option-value="props.optionValue"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
    :options="props.options"
    :option-label="props.optionLabel"
  />
  <baseDropdown
    v-else-if="props.typeUI === enumTypeUI.BASE"
    :option-value="props.optionValue"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
    :options="props.options"
    :option-label="props.optionLabel"
  />
</template>
