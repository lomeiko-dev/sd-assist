<script setup lang="ts">
import { RouterLink } from "vue-router";
import { enumAccountNavigator } from "../../model/types";
import {accountNavigatorStore} from '../../model/store/account-navigator-store'

interface IProps {
  title: string;
  link: string;
  color: string;
  isActive?: boolean;
  enumName: enumAccountNavigator 
}

const props = defineProps<IProps>();

const store = accountNavigatorStore()


</script>
<template>
  <RouterLink :class="props.isActive ? 'relative selected' : ''" class="flex flex-row items-center gap-[5px] px-10" :to="props.link">
    <p
      @click="store.handleLinkClick(props.enumName)"
      :class="props.isActive ? 'text-primary' : 'text-primary/30'"
      class="relative text-base font-bold duration-300 hover:text-primary/60"
    >
      {{ props.title }}
    </p>
    <p
      :style="`background-color: ${props.color}`"
      class="px-1 text-center text-white rounded-full text-sm font-normal"
    >
      {{ store.counting[props.enumName] }}
    </p>
  </RouterLink>
</template>
<style scoped lang="scss">
.selected::before {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: #163c66;
  z-index: 1;
}
</style>
