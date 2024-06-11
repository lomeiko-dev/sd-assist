<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import { IInputProps } from "../../model/types";
import { ref } from "vue";
import { watch } from "vue";

const props = defineProps<IInputProps>();
const model = defineModel<boolean>();

const isCheck = ref(false);

watch(model, () => {
  isCheck.value = !isCheck.value
})

</script>
<template>
  <div class="flex align-items-center mt-[21px]">
    <Checkbox
      :class="isCheck ? 'border-green' : 'border-primary/20'"
      class="border border-solid rounded bg-transparent w-[20px] h-[20px] duration-300"
      v-model="model"
      binary
      :inputId="props.id"
      :value="props.placeholder"
    />
    <label
      :for="props.id"
      :class="`${props.isError ? 'text-red-600' : ''} ${isCheck ? 'text-green' : ''}`"
      class="ml-2 text-sm font-normal text-gray duration-300    "
      >{{ props.placeholder }}</label
    >
  </div>
</template>
<style lang="scss"></style>
