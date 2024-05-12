<script setup lang="ts">
import { IHistoryManagerMehods, ITextManager } from "../../model/types";

interface IProps {
  managment?: IHistoryManagerMehods;
  textManagment?: ITextManager;
}

const props = defineProps<IProps>();

const saveHistory = () => {
  if (
    JSON.stringify(props.textManagment?.texts.value) !==
    JSON.stringify(props.managment?.history[props.managment?.history.length - 1].texts)
  ) {
    props.managment?.save();
  }
};
</script>
<template>
  <div @click="saveHistory">
    <slot></slot>
  </div>
</template>
