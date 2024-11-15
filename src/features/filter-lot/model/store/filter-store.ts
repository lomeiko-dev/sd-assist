import { lotStore } from "entities/lot";
import { defineStore } from "pinia";
import { localStorageKey } from "shared/config/local-storage";
import { getYYMMDDdate } from "shared/lib/utils/getYYMMDDdate";
import { fieldsManager, IFieldsManager } from "shared/ui/input";
import { onMounted, ref, watch } from "vue";

const IGNORE_LIST = ["date_deadline_like", "date_start_like"];

export const filterStore = defineStore("filter", () => {
  const fieldsManagmant = ref<IFieldsManager>(fieldsManager());
  const searchedString = ref("");
  const filterString = ref("");
  const foundTotalCount = ref(0);
  const storeLot = lotStore();

  onMounted(async () => {
    fieldsManagmant.value = fieldsManager();
    foundTotalCount.value = storeLot.total_count;
  });

  watch(
    () => fieldsManagmant.value.object,
    async () => {
      generateFilterString();
    },
    { deep: true }
  );

  watch(
    () => filterString.value,
    async () => {
      foundTotalCount.value = storeLot.total_count;
    }
  );

  const getFullQueryString = () => {
    const filter = filterString.value;
    const search = searchedString.value;

    return `${filter}${search}`;
  };

  const changeSearchedString = (str: string) => {
    searchedString.value = str;
  };

  const generateFilterString = () => {
    filterString.value = "";
    filterString.value = fieldsManagmant.value.generateQueryString(IGNORE_LIST);

    const dateStart = fieldsManagmant.value.object["date_start_like"];
    const dateDeadline = fieldsManagmant.value.object["date_deadline_like"];

    if (dateStart) {
      if (dateStart.data !== null) {
        const date: Date = dateStart.data;
        filterString.value += `date_start_like=${getYYMMDDdate(date)}`;
      }
    }

    if (dateDeadline) {
      if (dateDeadline.data !== null) {
        const date: Date = dateDeadline.data;
        filterString.value += `date_deadline_like=${getYYMMDDdate(date)}`;
      }
    }
  };

  const saveFilterString = () => {
    localStorage.setItem(localStorageKey.FILTER_FORM, JSON.stringify(fieldsManagmant.value.object));
  };

  const loadFilterString = () => {
    const result = localStorage.getItem(localStorageKey.FILTER_FORM);

    if (result !== null) {
      const object = JSON.parse(result);
      object["date_start_like"].data = new Date(object["date_start_like"].data);
      object["date_deadline_like"].data = new Date(object["date_deadline_like"].data);
      fieldsManagmant.value.object = object;
    }
  };

  const resetFilterString = () => {
    localStorage.removeItem(localStorageKey.FILTER_FORM);

    for (let key in fieldsManagmant.value.object) {
      fieldsManagmant.value.object[key].data = null;
    }
  };

  return {
    fieldsManagmant,
    filterString,
    foundTotalCount,
    searchedString,
    getFullQueryString,
    changeSearchedString,
    saveFilterString,
    loadFilterString,
    resetFilterString,
  };
});
