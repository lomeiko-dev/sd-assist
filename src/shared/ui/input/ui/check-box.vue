<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import { IInputProps } from "../model/types";
import Placeholder from "./components/placeholder.vue";

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
      <Placeholder
        :for="props.id"
        class="ml-2 text-sm font-normal text-gray"
        :title="props.placeholder || ''"
        :error-title="props.errorPlaceholder"
      />
    </div>
</template>
<style lang="scss"></style>
