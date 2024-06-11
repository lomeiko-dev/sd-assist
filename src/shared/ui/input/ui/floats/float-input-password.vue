<script setup lang="ts">
import Password from "primevue/password";
import { IInputProps } from "../../model/types";
import { ref } from "vue";
import { watch } from "vue";
import FloatContainer from "../components/float-container.vue";

interface IProps {
  errorPlaceholder?: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<string>();

const isFocus = ref(true);

watch(
  () => isFocus.value,
  () => {
    if (model.value !== "") isFocus.value = true;
  }
);
</script>
<template>
  <FloatContainer :error-placeholder="props.errorPlaceholder" :placeholder="props.placeholder" :is-focused="isFocus">
    <Password
      @focus="isFocus = true"
      @blur="isFocus = false"
      toggle-mask
      placeholder="_"
      class="w-full h-full rounded-[10px]"
      :id="props.id"
      v-model="model"
    />
  </FloatContainer>
</template>
