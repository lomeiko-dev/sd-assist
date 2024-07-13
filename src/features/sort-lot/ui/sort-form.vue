<script setup lang="ts">
import { lotStore } from "entities/lot";
import SortList from "./components/sort-list.vue";
import SortDropper from "./components/sort-dropper.vue";
import { enumSorting, IItemSort } from "../model/types";
import { sortStore } from "../model";
import { getCurrentDate } from "shared/lib/utils/getCurrentDate";
import { useWindowSize } from "@vueuse/core";

const storeLot = lotStore();
const store = sortStore();

const { width } = useWindowSize();

const changeTypeSortHanlder = (item: IItemSort) => {
  store.changeSelectSort(item);
  switch (item.typeSort) {
    case enumSorting.ALL:
      store.changeSortString("");
      break;
    case enumSorting.LOW_COST:
      store.changeSortString("_sort=default_rate&_order=asc");
      break;
    case enumSorting.EXPENSIVE:
      store.changeSortString("_sort=default_rate&_order=desc");
      break;
    case enumSorting.TODAY:
      const currentDate = getCurrentDate();
      store.changeSortString(`date_create_like=${currentDate}`);
      break;
    default:
      break;
  }
};
</script>
<template>
  <div
    class="flex flex-wrap gap-2 items-center justify-between border-y border-solid border-y-primary/20 pt-[42px] pb-[13.5px]"
  >
    <div class="text-sm font-normal flex flex-row items-center gap-[2px]">
      <p class="text-gray">Показано:</p>
      <p class="text-primary">
        {{ storeLot.page }}-{{ storeLot.page * storeLot.LIMIT }} из {{ storeLot.total_count }} авто
      </p>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <p v-if="width > 380" class="text-sm font-normal text-gray">Сортировать:</p>
      <SortList v-if="width > 670" @change="(item) => changeTypeSortHanlder(item)" />
      <SortDropper v-else @change="(item) => changeTypeSortHanlder(item)" />
    </div>
  </div>
</template>
