<script setup lang="ts">
import { IInputProps } from "../../model/types";
import InputNumber from "primevue/inputnumber";

const props = defineProps<IInputProps>();
const model = defineModel<number>();
</script>
<template>
  <InputNumber class="w-full input-number" v-model="model" inputId="integeronly" :placeholder="props.placeholder" />
</template>
<style lang="scss">
.input-number {
  .p-inputtext {
    padding: 15px 12px !important;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
