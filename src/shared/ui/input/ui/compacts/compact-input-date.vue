<script setup lang="ts">
import { enumTypeUI, IInputProps } from "../../model/types";
import { baseInputDate } from "../base";
import { groupInputDate } from "../groups";

interface IProps {
  minDate?: Date;
  maxDate?: Date;
  typeUI: enumTypeUI;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();
</script>
<template>
  <groupInputDate
    v-if="props.typeUI === enumTypeUI.GROUP"
    :min-date="props.minDate"
    :max-date="props.maxDate"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
  <baseInputDate
    v-else-if="props.typeUI === enumTypeUI.BASE"
    :min-date="props.minDate"
    :max-date="props.maxDate"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
</template>
