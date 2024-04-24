<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { getLotPages, lotCard } from "entities/lot";
import { ILot } from "entities/lot/model/types";
import { onMounted, ref } from "vue";
import ButtonAllOffers from "../components/button-all-offers.vue";

interface IProps {
  title?: string;
  toAllOffers: string;
}

const props = defineProps<IProps>();

const LIMIT = 6;
const { width } = useWindowSize();
const lots = ref<ILot[]>([]);

onMounted(async () => {
  lots.value = (await getLotPages(1, LIMIT))?.data || [];
});
</script>
<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <h2 class="tablet:text-[32px] text-2xl font-bold">{{ props.title }}</h2>
      <ButtonAllOffers v-if="width > 768" :to="props.toAllOffers" />
    </div>
    <div class="grid-container gap-[20px] w-full max-w-[1183px] tablet:mt-[43px] mt-[25px]">
      <lotCard v-for="lot in lots" :data="lot" />
    </div>

    <ButtonAllOffers class="flex justify-center mt-10" v-if="width < 768" :to="props.toAllOffers" />
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
