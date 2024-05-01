<script setup lang="ts">
import Textarea from "primevue/textarea";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();
</script>
<template>
  <GroupContainer :title="props.title">
    <Textarea class="h-[197px]" v-model="model" />
  </GroupContainer>
</template>
