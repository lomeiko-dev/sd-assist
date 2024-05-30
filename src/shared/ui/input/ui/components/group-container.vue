<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();

</script>
<template>
  <InputGroup :class="props.isError ? 'border border-solid border-red-600' : ''">
    <InputGroupAddon class="flex items-start border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p :class="props.isError ? 'text-red-600' : ''" class="text-xs font-normal text-gray leading-[14.4px]">
        {{ props.placeholder }}
      </p>
    </InputGroupAddon>
    <slot></slot>
  </InputGroup>
</template>
