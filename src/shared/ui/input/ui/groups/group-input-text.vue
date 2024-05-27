<script setup lang="ts">
import InputText from "primevue/inputtext";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<string>();

</script>
<template>
  <GroupContainer :error-placeholder="props.errorPlaceholder" :placeholder="props.placeholder">
    <InputText v-model="model" />
  </GroupContainer>
</template>
