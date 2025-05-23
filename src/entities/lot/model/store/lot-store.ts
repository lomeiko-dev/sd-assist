import { defineStore } from "pinia";
import { ILot } from "../types";
import { ref } from "vue";

export const lotStore = defineStore("lot", () => {
  const LIMIT = ref(5);
  const lots = ref<ILot[]>([]);
  const page = ref(1);
  const total_count = ref(0);

  const isLoading = ref(false);
  const isError = ref(false);
  const errorMessage = ref("");
  const isNullData = ref(false);

  const setLoading = () => {
    isLoading.value = true;
  };

  const setError = (value: boolean, message?: string) => {
    isError.value = value;

    errorMessage.value = value ? message || "" : "";
  };

  const setTotalCount = (total: number) => {
    total_count.value = total;
  };

  const setLots = (data: ILot[]) => {
    lots.value = data;
    isNullData.value = lots.value.length === 0;
    isLoading.value = false;
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
    isNullData,
    isLoading,
    isError,
    errorMessage,
    setError,
    setLoading,
    incrementPage,
    decrementPage,
    setTotalCount,
    setLots,
    setPage,
    LIMIT,
  };
});
