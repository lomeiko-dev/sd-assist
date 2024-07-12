<script setup lang="ts">
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";
import InputNumber from "primevue/inputnumber";

const props = defineProps<IInputProps>();
const model = defineModel<number>();

</script>
<template>
  <GroupContainer :isError="props.isError" :placeholder="props.placeholder">
    <InputNumber class="w-full" v-model="model" inputId="integeronly" />
  </GroupContainer>
</template>
