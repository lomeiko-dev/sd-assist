<script setup lang="ts">
import InputText from "primevue/inputtext";
import { IInputProps } from "../../model/types";
import FloatContainer from "../components/float-container.vue";

interface IProps {
  errorPlaceholder?: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<string>();
</script>
<template>
  <FloatContainer :error-placeholder="props.errorPlaceholder" :placeholder="props.placeholder">
    <InputText
      placeholder="_"
      class="w-full h-full rounded-[10px] px-[20px]"
      :id="props.id"
      type="text"
      v-model="model"
    />
  </FloatContainer>
</template>
<style lang="scss"></style>
