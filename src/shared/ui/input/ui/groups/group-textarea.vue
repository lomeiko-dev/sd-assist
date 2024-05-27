<script setup lang="ts">
import Textarea from "primevue/textarea";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<string>();
</script>
<template>
  <GroupContainer :error-placeholder="props.errorPlaceholder" :placeholder="props.placeholder">
    <Textarea class="h-[197px]" v-model="model" />
  </GroupContainer>
</template>
