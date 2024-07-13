<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { getAllCities, getAllRegions, getCitiesById, getRegionsById } from "shared/services/location-service";
import { IConfigField, generateForm, IFieldsManager } from "shared/ui/input";
import { lotFormConfig } from "../../model/config/lot-form-config";
import TimeShow from "../components/time-show.vue";
import { useWindowSize } from "@vueuse/core";

interface IProps {
  managment: IFieldsManager;
}

const props = defineProps<IProps>();

const config = ref<IConfigField[]>(lotFormConfig);

const dateStart = computed(() => props.managment.object["date_start"]?.data);
const dateEnd = computed(() => props.managment.object["date_deadline"]?.data);

const { width } = useWindowSize();

onMounted(async () => {
  const regionField = config.value.find((item) => item.key === "region");
  if (regionField) {
    regionField.options = (await getAllRegions()).data;
  }

  const cityField = config.value.find((item) => item.key === "city");
  if (cityField) {
    cityField.options = (await getAllCities()).data;
  }
});

watch(
  () => dateStart,
  () => {
    const dateEndConfig = config.value.find((item) => item.key === "date_deadline");
    if (dateEndConfig) {
      dateEndConfig.min = dateStart.value;
    }
  },
  { deep: true }
);

watch(
  () => dateEnd,
  () => {
    const dateStartConfig = config.value.find((item) => item.key === "date_start");
    if (dateStartConfig) {
      dateStartConfig.max = dateEnd.value;
    }
  },
  { deep: true }
);

watch(
  () => props.managment.object["region"],
  async () => {
    if (props.managment.object["region"]?.data !== null && props.managment.object["region"]?.data !== undefined) {
      const cityField = config.value.find((item) => item.key === "city");
      if (cityField) {
        cityField.options = (await getCitiesById(props.managment.object["region"]?.data?.id)).data;
      }
    }
  },
  { deep: true }
);

watch(
  () => props.managment.object["city"],
  async () => {
    if (props.managment.object["region"]) {
      if (props.managment.object["city"].data !== null) {
        props.managment.object["region"].data = (
          await getRegionsById(props.managment.object["city"]?.data.regionid)
        ).data[0];
      }
    }
  },
  { deep: true }
);
</script>

<template>
  <generateForm :manager="props.managment" :config="config">
    <template v-if="width > 430" #timeViewer>
      <TimeShow v-if="dateStart !== null && dateEnd !== null" :begin-date="dateStart" :end-date="dateEnd" />
    </template>
  </generateForm>
</template>
