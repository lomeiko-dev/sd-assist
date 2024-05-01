<script setup lang="ts">
import InputMask from "primevue/inputmask";
import { IInputProps } from "../../model/types";
import FloatContainer from "../components/float-container.vue";

interface IProps {
    mask: string;
}

const props = defineProps<IProps & IInputProps>();
const model = defineModel<string>();

</script>
<template>
  <FloatContainer :error-placeholder="props.errorPlaceholder" :placeholder="props.placeholder">
    <InputMask
      placeholder="_"
      class="w-full h-full rounded-[10px] px-[20px]"
      :id="props.id"
      v-model="model"
      :mask="props.mask"
    />
  </FloatContainer>
</template>
