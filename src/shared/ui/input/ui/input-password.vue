<script setup lang="ts">
import Password from "primevue/password";
import { IInputProps } from "../model/types";
import Placeholder from "./components/placeholder.vue";
import FloatLabel from "primevue/floatlabel";
import { ref } from "vue";
import { watch } from "vue";

const props = defineProps<IInputProps>();
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
  <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
    <Password
      @focus="isFocus = true"
      @blur="isFocus = false"
      toggle-mask
      placeholder="_"
      class="w-full h-full rounded-[10px] testtt"
      :id="props.id"
      v-model="model"
    />
    <Placeholder
      :class="isFocus ? 'focused' : ''"
      :for="props.id"
      :title="props.placeholder || ''"
      :error-title="props.errorPlaceholder"
    />
  </FloatLabel>
</template>
<style scoped lang="scss">
.focused {
  top: 0;
}
</style>
