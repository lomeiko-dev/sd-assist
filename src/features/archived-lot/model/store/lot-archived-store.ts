import { ILot, getLotById } from "entities/lot";
import { defineStore } from "pinia";
import { localStorageKey } from "shared/config/local-storage";
import { ref } from "vue";

export const lotArchivedStore = defineStore("lot-archived", () => {
  const lots = ref<ILot[]>([]);
  const totalCount = ref<number>(0);

  const saveLot = (id: number) => {
    const result = localStorage.getItem(localStorageKey.LOT_ARCHIVE);
    if (result !== null) {
      const ids = JSON.parse(result) as number[];
      ids.push(id);
      localStorage.setItem(localStorageKey.LOT_ARCHIVE, JSON.stringify(ids));
    } else {
      localStorage.setItem(localStorageKey.LOT_ARCHIVE, JSON.stringify([id]));
    }
  };

  const removeLot = (id: number) => {
    const result = localStorage.getItem(localStorageKey.LOT_ARCHIVE);

    if (result !== null) {
      const ids = JSON.parse(result) as number[];
      const new_ids = ids.filter((item) => item !== id);
      localStorage.setItem(localStorageKey.LOT_ARCHIVE, JSON.stringify(new_ids));
    }
  };

  const loadLots = async () => {
    const result = localStorage.getItem(localStorageKey.LOT_ARCHIVE);

    if (result !== null) {
      const IDs = JSON.parse(result) as number[];
      if (IDs.length > 0) {
        lots.value = [];
        for (let i = 0; i < IDs.length; i++) {
          const lot = await getLotById(IDs[i]);
          if (lot.status === 200) {
            lots.value.push(lot.data[0]);
          }
        }
      }
    }
  };

  const getTotalCount = () => {
    const result = localStorage.getItem(localStorageKey.LOT_ARCHIVE);

    if (result !== null) {
      totalCount.value = JSON.parse(result).length;
    } else {
      totalCount.value = 0;
    }
  };

  const getIDs = () => {
    const result = localStorage.getItem(localStorageKey.LOT_ARCHIVE);

    if (result !== null) {
      return JSON.parse(result) as number[];
    }

    return null;
  };

  return {
    lots,
    totalCount,
    saveLot,
    loadLots,
    getTotalCount,
    getIDs,
    removeLot,
  };
});
