<script setup lang="ts">
import InputText from "primevue/inputtext";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<string>();

</script>
<template>
  <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
    <InputText :placeholder="props.placeholder" v-model="model" />
  </GroupContainer>
</template>
