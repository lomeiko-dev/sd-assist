<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<boolean>();
</script>
<template>
  <div class="flex align-items-center mt-[21px]">
    <Checkbox
      class="border border-solid border-primary/20 rounded bg-transparent w-[20px] h-[20px]"
      v-model="model"
      :inputId="props.id"
      :value="props.placeholder"
    />
    <label
      :for="props.id"
      :class="props.errorPlaceholder === '' ? 'text-red-600' : ''"
      class="ml-2 text-sm font-normal text-gray"
      >{{ props.placeholder }}</label
    >
  </div>
</template>
<style lang="scss"></style>
