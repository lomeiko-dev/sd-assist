<script setup lang="ts">
import Textarea from "primevue/textarea";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<string>();
</script>
<template>
  <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
    <textarea
      :placeholder="props.placeholder"
      class="h-[197px] w-full p-[20px] text-sm select-none border-none outline-none"
      v-model="model"
    />
  </GroupContainer>
</template>
