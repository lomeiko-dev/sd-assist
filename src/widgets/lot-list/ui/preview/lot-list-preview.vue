<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { getLotPages, lotCard, skeletonCard } from "entities/lot";
import { ILot } from "entities/lot/model/types";
import ButtonAllOffers from "../components/button-all-offers.vue";
import { notData } from "shared/ui/not-data";

interface IProps {
  title?: string;
  toAllOffers: string;
}

const props = defineProps<IProps>();

const LIMIT = 6;
const { width } = useWindowSize();

const lots = ref<ILot[]>([]);
const isNullData = ref(false);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  lots.value = (await getLotPages(1, LIMIT))?.data || [];
  isLoading.value = false;
  if (lots.value.length === 0) {
    isNullData.value = true;
  }
});
</script>

<template>
  <div v-if="!isNullData">
    <div class="flex flex-row items-center justify-between">
      <h2 class="tablet:text-[32px] text-2xl font-bold">{{ props.title }}</h2>
      <ButtonAllOffers v-if="width > 768" :to="props.toAllOffers" />
    </div>

    <div class="grid-container gap-[20px] w-full max-w-[1183px] tablet:mt-[43px] mt-[25px]">
      <skeletonCard v-if="isLoading" v-for="(_) in Array(6).fill('')" class="max-w-[380px]" />
      <lotCard v-else v-for="lot in lots" :data="lot" />
    </div>

    <ButtonAllOffers class="flex justify-center mt-10" v-if="width < 768" :to="props.toAllOffers" />
  </div>

  <div v-else class="h-[200px] mx-auto w-fit">
    <notData />
  </div>
</template>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
@media (max-width: 640px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
