<script setup lang="ts">
import { enumTypeUI, IInputProps } from "../../model/types";
import { floatInputMask } from "../floats";
import { groupInputMask } from "../groups";

interface IProps {
  mask: string;
  typeUI: enumTypeUI;
  errorPlaceholder?: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<string>();
</script>
<template>
  <groupInputMask
    v-if="props.typeUI === enumTypeUI.GROUP"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
    :mask="props.mask ?? ''"
  />
  <floatInputMask
    v-else-if="props.typeUI === enumTypeUI.FLOAT"
    :is-error="props.isError"
    v-model="model"
    :placeholder="props.placeholder"
    :mask="props.mask ?? ''"
    :error-placeholder="props.errorPlaceholder"
  />
</template>
