<script setup lang="ts">
import { IInputProps } from "../../model/types";
import InputDate from "../components/input-date.vue";

interface IProps {
  minDate?: Date;
  maxDate?: Date;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();
</script>
<template>
  <div class="placeholder-active">
    <InputDate
      :id="props.id"
      :is-error="props.isError"
      :placeholder="props.placeholder"
      v-model="model"
      :min-date="props.minDate"
      :max-date="props.maxDate"
    />
  </div>
</template>
<style lang="scss">
.placeholder-active {
  .p-inputtext::placeholder {
    opacity: 1;
    color: #163c66;
  }
}
</style>
