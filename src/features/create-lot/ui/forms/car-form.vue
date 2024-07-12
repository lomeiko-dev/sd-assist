<script setup lang="ts">
import { generateForm, IConfigField, IFieldsManager } from "shared/ui/input";
import { ref, onMounted, watch } from "vue";
import { carFormConfig_primary, carFormConfig_secondary } from "../../model/config/car-form-config";
import {
  getAllCarBrand,
  getAllCarModel,
  getCarBrandById,
  getCarGenerationByModelid,
  getCarModelByBrandID,
} from "shared/services/car-service";

interface IProps {
  managment: IFieldsManager;
}

const props = defineProps<IProps>();

const config_1 = ref<IConfigField[]>(carFormConfig_primary);
const config_2 = ref<IConfigField[]>(carFormConfig_secondary);

onMounted(async () => {
  const brandConfig = config_2.value.find((item) => item.key === "car_brand");
  if (brandConfig) {
    brandConfig.options = (await getAllCarBrand()).data;
  }

  const modelConfig = config_2.value.find((item) => item.key === "car_model");
  if (modelConfig) {
    modelConfig.options = (await getAllCarModel()).data;
  }
});

watch(
  () => props.managment.object["car_brand"],
  async () => {
    const modelConfig = config_2.value.find((item) => item.key === "car_model");
    if (modelConfig) {
      const id = props.managment.object["car_brand"]?.data?.id;
      if (id) modelConfig.options = (await getCarModelByBrandID(id)).data;
    }
  },
  { deep: true }
);

watch(
  () => props.managment.object["car_model"],
  async () => {
    if (props.managment.object["car_brand"]) {
      if (props.managment.object["car_model"].data !== null) {
        const data = (await getCarBrandById(props.managment.object["car_model"]?.data?.brandid)).data[0];
        props.managment.object["car_brand"].data = data;
      }

      if (props.managment.object["car_model"].data !== null) {
        const generationField = config_2.value.find((item) => item.key === "car_generation");
        if (generationField) {
          generationField.options = (
            await getCarGenerationByModelid(props.managment.object["car_model"]?.data?.id)
          ).data;
        }
      }
    }
  },
  { deep: true }
);
</script>

<template>
  <generateForm :config="config_1" :manager="props.managment">
    <template #internal>
      <generateForm v-if="managment.object['car_type'].data" :config="config_2" :manager="props.managment" />
    </template>
  </generateForm>
</template>
