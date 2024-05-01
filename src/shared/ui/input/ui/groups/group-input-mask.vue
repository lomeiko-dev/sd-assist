<script setup lang="ts">
import InputMask from "primevue/inputmask";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
  mask: string;
  placeholder: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();

</script>
<template>
  <GroupContainer :title="props.title">
    <InputMask :placeholder="props.placeholder" v-model="model" :mask="props.mask" />
  </GroupContainer>
</template>
