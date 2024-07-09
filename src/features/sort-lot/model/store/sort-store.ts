import { defineStore } from "pinia";
import { ref } from "vue";
import { IItemSort } from "../types";
import { sortConfig } from "../config/sort-config";

export const sortStore = defineStore("sort", () => {
  const selectTypeSort = ref<IItemSort>(sortConfig[3]);
  const sortString = ref<string>("");

  const changeSortString = (str: string) => {
    sortString.value = str;
  };

  const changeSelectSort = (item: IItemSort) => {
    selectTypeSort.value = item;
  };

  return {
    sortString,
    changeSortString,
    selectTypeSort,
    changeSelectSort,
  };
});
