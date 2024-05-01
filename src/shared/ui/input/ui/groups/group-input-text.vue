<script setup lang="ts">
import InputText from "primevue/inputtext";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();

</script>
<template>
  <GroupContainer :title="props.title">
    <InputText v-model="model" />
  </GroupContainer>
</template>
