<script setup lang="ts">
import { createLotStore } from "features/create-lot/model/store/create-lot-store";
import { watchEffect } from "vue";

interface IProps {
  keyName: string;
  isValidated?: boolean;
}

const props = defineProps<IProps>();

const store = createLotStore();

watchEffect(() => {
  if (store.fields[props.keyName] === undefined) 
    store.addLazyProps(props.keyName, props.isValidated);
});
</script>
<template>
  <slot></slot>
</template>
