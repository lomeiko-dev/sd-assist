<script setup lang="ts">
import { watchEffect } from "vue";
import { accountNavigatorStore, enumAccountNavigator } from "../model";
import accountNavigator from "./components/account-navigator.vue";
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
import { useWindowSize } from "@vueuse/core";

interface IProps {
  isShowNavigator?: boolean;
  selectedLink?: enumAccountNavigator;
  counting?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  isShowNavigator: false,
});

const store = accountNavigatorStore();
const { width } = useWindowSize();

watchEffect(() => {
  store.handleLinkClick(props.selectedLink);
  
  if (props.selectedLink !== undefined && props.counting !== undefined)
    store.setCounting(props.selectedLink, props.counting);
});
</script>
<template>
  <div class="h-[100vh]">
    <Header />
    <accountNavigator v-if="props.isShowNavigator && width > 768" />
    <slot></slot>
    <Footer />
  </div>
</template>
