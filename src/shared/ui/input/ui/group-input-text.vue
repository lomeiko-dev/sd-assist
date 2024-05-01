<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();

</script>
<template>
  <InputGroup class="rounded-[10px]">
    <InputGroupAddon class="whitespace-nowrap border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p class="text-xs font-normal text-gray leading-[14.4px]">
        {{ props.title }}
      </p>
    </InputGroupAddon>
    <InputText
      v-model="model"
    />
  </InputGroup>
</template>
