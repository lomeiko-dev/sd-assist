import { defineStore } from "pinia";
import { ref } from "vue";
import { enumAccountNavigator } from "../types";

export const accountNavigatorStore = defineStore("account-navigator", () => {
  const selectedLink = ref<enumAccountNavigator>();

  const counting = ref<Record<enumAccountNavigator, number>>({
    ARCHIVE: 0,
    MY_ACTIVITY: 0,
    MY_COMPLETED: 0,
    REJECTED: 0,
  });

  const handleLinkClick = (link: enumAccountNavigator) => {
    selectedLink.value = link;
  };

  const setCounting = (key: enumAccountNavigator, count: number) => {
    counting.value[key] = count;
  };

  return { handleLinkClick, selectedLink, setCounting, counting };
});
