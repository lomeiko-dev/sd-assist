<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { IInputProps } from "../../model/types";
import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps<IInputProps>();

const isError = ref(false);

onMounted(() => {
  isError.value = props.errorPlaceholder !== undefined;
});
</script>
<template>
  <InputGroup :class="isError ? 'border border-solid border-red-600' : ''">
    <InputGroupAddon class="whitespace-nowrap border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p :class="isError ? 'text-red-600' : ''" class="text-xs font-normal text-gray leading-[14.4px]">
        {{ isError ? props.errorPlaceholder : props.placeholder }}
      </p>
    </InputGroupAddon>
    <slot></slot>
  </InputGroup>
</template>
