<script setup lang="ts">
import { enumTypeUI, IInputProps } from "../../model/types";
import { baseInputNumber } from "../base";
import { groupInputNumber } from "../groups";

interface IProps {
  typeUI: enumTypeUI;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<number>();
</script>
<template>
  <groupInputNumber
    v-if="props.typeUI === enumTypeUI.GROUP"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
  <baseInputNumber
    v-if="props.typeUI === enumTypeUI.BASE"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
</template>
