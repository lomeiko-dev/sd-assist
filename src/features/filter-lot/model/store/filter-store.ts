import { getTotalCountLots } from "entities/lot";
import { defineStore } from "pinia";
import { localStorageKey } from "shared/config/local-storage";
import { fieldsManager, IFieldsManager } from "shared/ui/input";
import { onMounted, ref, watch } from "vue";

const IGNORE_LIST: string[] = ["car_model.model_like", "car_brand.brand_like"];

export const filterStore = defineStore("filter", () => {
  const fieldsManagmant = ref<IFieldsManager>(fieldsManager());
  const searchedString = ref("");
  const filterString = ref("");
  const foundTotalCount = ref(0);

  onMounted(async () => {
    fieldsManagmant.value = fieldsManager();
    foundTotalCount.value = (await getTotalCountLots(filterString.value)) || 0;
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
      foundTotalCount.value = (await getTotalCountLots(filterString.value)) || 0;
    }
  );

  const changeSearchedString = (str: string) => {
    searchedString.value = str;
  };

  const generateFilterString = () => {
    filterString.value = "";
    filterString.value = fieldsManagmant.value.generateQueryString(IGNORE_LIST);

    const carModel = fieldsManagmant.value.object["car_model.model_like"];
    const carBrand = fieldsManagmant.value.object["car_brand.brand_like"];

    if (carModel !== undefined && carBrand !== undefined) {
      if (carModel.data !== null && carModel.data !== undefined) {
        filterString.value += `car_model.model_like=${carModel.data.model}&`;
      }

      if (carBrand.data !== null && carBrand.data !== undefined) {
        filterString.value += `car_brand.brand_like=${carBrand.data.brand}&`;
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
    changeSearchedString,
    saveFilterString,
    loadFilterString,
    resetFilterString,
  };
});
