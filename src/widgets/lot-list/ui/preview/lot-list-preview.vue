<script setup lang="ts">
import { getLotPages, lotCard } from "entities/lot";
import { ILot } from "entities/lot/model/types";
import arrow_right from "shared/assets/img/icons/arrow-right.svg";
import { onMounted, ref } from "vue";
import inlineSvg from "vue-inline-svg";

interface IProps {
  title: string;
  toAllOffers: string;
}

const props = defineProps<IProps>();

const LIMIT = 6;
const lots = ref<ILot[]>([]);

onMounted(async () => {
  lots.value = (await getLotPages(1, LIMIT))?.data || [];
});

</script>
<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-[32px] font-bold">{{ props.title }}</h2>
      <RouterLink class="flex flex-row items-center gap-[10px] duration-300 hover:gap-[15px]" :to="props.toAllOffers">
        <p class="text-sm font-normal text-primary">Смотреть все предложения</p>
        <inlineSvg :src="arrow_right" />
      </RouterLink>
    </div>
    <div class="grid-container gap-[15px] w-full max-w-[1183px] mx-auto justify-center mt-[43px]">
      <lotCard class="min-[690px]:mx-0 mx-auto" v-for="lot in lots" :data="lot" />
    </div>
  </div>
</template>
<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}
</style>
