<script setup lang="ts">
import { IInputProps } from "../../model/types";
import InputNumber from "primevue/inputnumber";

const props = defineProps<IInputProps>();
const model = defineModel<number>();
</script>
<template>
  <div class="placeholder-active">
    <InputNumber class="w-full input-number" v-model="model" inputId="integeronly" :placeholder="props.placeholder" />
  </div>
</template>
<style lang="scss">
.input-number {
  .p-inputtext {
    padding: 15px 12px !important;
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    box-shadow: none;
  }
}

.placeholder-active {
  .p-inputtext::placeholder {
    opacity: 1;
    color: #163c66;
  }
}
</style>
