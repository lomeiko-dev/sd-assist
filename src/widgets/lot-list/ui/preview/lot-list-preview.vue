<script setup lang="ts">
import { onMounted } from "vue";
import { useWindowSize } from "@vueuse/core";
import { getLotPages, lotCard, lotStore, skeletonCard } from "entities/lot";
import ButtonAllOffers from "../components/button-all-offers.vue";
import { notData } from "shared/ui/not-data";

interface IProps {
  title?: string;
  toAllOffers: string;
}
const LIMIT = 6;

const props = defineProps<IProps>();
const { width } = useWindowSize();
const store = lotStore()

onMounted(async () => {
  store.setLoading()
  const {data} = await getLotPages(1, LIMIT) || {}
  store.setLots(data || [], true)
});
</script>

<template>
  <div v-if="!store.isNullData">
    <div class="flex flex-row items-center justify-between">
      <h2 class="tablet:text-[32px] text-2xl font-bold">{{ props.title }}</h2>
      <ButtonAllOffers v-if="width > 768" :to="props.toAllOffers" />
    </div>

    <div class="grid-container gap-[20px] w-full max-w-[1183px] tablet:mt-[43px] mt-[25px]">
      <skeletonCard v-if="store.isLoading" v-for="(_) in Array(LIMIT).fill('')" class="max-w-[380px]" />
      <lotCard v-else v-for="lot in store.lots" :data="lot" />
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
