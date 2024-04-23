import { defineStore } from "pinia";
import { ILot } from "../types";
import { ref } from "vue";

export const lotStore = defineStore("lot", () => {
  const lots = ref<ILot[]>([]);
  const total_count = ref(0);
  const page = ref(0);

  const setTotalCount = (total: number) => {
    total_count.value = total;
  };

  const setLots = (data: ILot[], isClear?: boolean, isUpdatePage?: boolean) => {
    if (isClear) lots.value = [];

    lots.value = [...lots.value, ...data];

    if (isUpdatePage) {
      page.value += 1;
    }
  };

  const setPage = (value: number) => {
    page.value = value;
  };

  const incrementPage = () => {
    page.value += 1;
  };

  const decrementPage = () => {
    page.value = -1;
  };

  return {
    lots,
    page,
    total_count,
    incrementPage,
    decrementPage,
    setTotalCount,
    setLots,
    setPage,
  };
});
