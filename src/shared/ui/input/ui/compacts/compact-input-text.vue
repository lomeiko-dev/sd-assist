<script setup lang="ts">
import { enumTypeUI, IInputProps } from "../../model/types";
import { baseInputText } from "../base";
import { floatInputText } from "../floats";
import { groupInputText } from "../groups";

interface IProps {
  typeUI: enumTypeUI;
  errorPlaceholder?: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<string>();
</script>
<template>
  <groupInputText
    v-if="props.typeUI === enumTypeUI.GROUP"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
  <floatInputText
    v-else-if="props.typeUI === enumTypeUI.FLOAT"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
    :error-placeholder="props.errorPlaceholder"
  />
  <baseInputText
    v-else-if="props.typeUI === enumTypeUI.BASE"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
  />
</template>
