<script setup lang="ts">
import InputMask from "primevue/inputmask";
import { IInputProps } from "../model/types";
import FloatLabel from "primevue/floatlabel";
import Placeholder from "./components/placeholder.vue";

interface IProps {
    mask: string;
}

const props = defineProps<IProps & IInputProps>();
const model = defineModel<string>();

</script>
<template>
  <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
    <InputMask
      placeholder="_"
      class="w-full h-full rounded-[10px] px-[20px]"
      :id="props.id"
      v-model="model"
      :mask="props.mask"
    />
    <Placeholder :for="props.id" :title="props.placeholder || ''" :error-title="props.errorPlaceholder" />
  </FloatLabel>
</template>
<style lang="scss"></style>
