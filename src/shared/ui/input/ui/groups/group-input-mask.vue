<script setup lang="ts">
import InputMask from "primevue/inputmask";
import GroupContainer from "../components/group-container.vue";
import { IInputProps } from "../../model/types";

interface IProps {
  mask: string;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<string>();

</script>
<template>
  <GroupContainer :errorPlaceholder="props.errorPlaceholder" :placeholder="props.placeholder">
    <InputMask v-model="model" :mask="props.mask" />
  </GroupContainer>
</template>
