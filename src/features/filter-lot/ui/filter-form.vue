<script setup lang="ts">
import { generateForm, IConfigField } from "shared/ui/input";
import { configForm } from "../model/config/config-form";
import { ref } from "vue";
import { onMounted } from "vue";
import ButtonShow from "./components/button-show.vue";
import ButtonSave from "./components/button-save.vue";
import ButtonReset from "./components/button-reset.vue";
import { getAllCarBrand, getAllCarModel, getCarBrandById, getCarModelByBrandID } from "shared/services/car-service";
import { watch } from "vue";
import { filterStore } from "../model/store/filter-store";

const store = filterStore();
const config = ref<IConfigField[]>(configForm);

onMounted(() => {
  store.loadFilterString();
});

onMounted(async () => {
  const brandConfig = config.value.find((item) => item.key === "car_brand.brand_like");
  if (brandConfig) {
    brandConfig.options = (await getAllCarBrand()).data;
  }

  const modelConfig = config.value.find((item) => item.key === "car_model.model_like");
  if (modelConfig) {
    modelConfig.options = (await getAllCarModel()).data;
  }
});

const saveFilterHandler = () => {
  store.saveFilterString();
};

const resetFilterHandler = () => {
  store.resetFilterString();
};

watch(
  () => store.fieldsManagmant.object["car_brand.brand_like"],
  async () => {
    const modelConfig = config.value.find((item) => item.key === "car_model.model_like");
    if (modelConfig) {
      const id = store.fieldsManagmant.object["car_brand.brand_like"]?.data?.id;
      if (id) modelConfig.options = (await getCarModelByBrandID(id)).data;
    }
  },
  { deep: true }
);

watch(
  () => store.fieldsManagmant.object["car_model.model_like"],
  async () => {
    if (store.fieldsManagmant.object["car_brand.brand_like"]) {
      if (store.fieldsManagmant.object["car_model.model_like"].data !== null) {
        const data = (await getCarBrandById(store.fieldsManagmant.object["car_model.model_like"]?.data?.brandid))
          .data[0];
        store.fieldsManagmant.object["car_brand.brand_like"].data = data;
      }
    }
  },
  { deep: true }
);
</script>
<template>
  <div class="bg-smoky-white rounded-[10px] p-[25px] h-fit">
    <generateForm :config="config" :manager="store.fieldsManagmant" />
    <ButtonSave @click="saveFilterHandler" class="mt-[19px]" />
    <ButtonShow class="mt-[52px]" :count="store.foundTotalCount" />
    <ButtonReset @click="resetFilterHandler" class="mt-[18px] mx-auto" />
  </div>
</template>
