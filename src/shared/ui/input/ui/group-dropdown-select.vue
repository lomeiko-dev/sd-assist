<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Dropdown from "primevue/dropdown";

interface IProps {
  title: string;
  options: any;
  optionLabel?: string;
  placeholder?: string;
}

const props = defineProps<IProps>();
const model = defineModel<any>();
</script>
<template>
  <InputGroup class="rounded-[10px]">
    <InputGroupAddon class="whitespace-nowrap border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p class="text-xs text-gray  font-normal leading-[14.4px]">
        {{ props.title }}
      </p>
    </InputGroupAddon>
    <Dropdown
      v-model="model"
      :options="props.options"
      :optionLabel="props.optionLabel"
      :placeholder="props.placeholder"
    />
  </InputGroup>
</template>
