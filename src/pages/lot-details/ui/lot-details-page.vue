<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import { IBid, ILot, lotDetails, lotItemDetails } from "entities/lot";
import { layoutApp } from "widgets/layouts/layout-app";
import { getLotById } from "entities/lot";
import { bidsForm } from "features/bids-form";
import { container } from "shared/ui/container";
import Header from "./components/header.vue";
import { useRoute } from "vue-router";

const lot = ref<ILot>();
const bids = ref<IBid[]>([]);

const route = useRoute();
const lotId = route.params.id;

const request = async () => {
  const result = await getLotById(Number(lotId));
  lot.value = result.data[0];

  bids.value = lot.value?.bids || [];
};

const CurrentBid = computed(() => {
  if (bids.value.length > 0) {
    return bids.value[bids.value.length - 1].rate;
  }

  return lot.value?.default_rate;
});

onMounted(async () => {
  await request();
});

watch(
  () => bids.value,
  async () => {
    await request();
  }
);
</script>
<template>
  <div>
    <layoutApp>
      <container class="mt-10">
        <div v-if="lot">
          <Header :id-lot="lot.id_lot" />
          <lotItemDetails class="mt-8" :data="lot">
            <template #features>
              <bidsForm
                class="mt-[33px]"
                :id="Number(lotId)"
                @change-bids="(value) => (bids = value)"
                :bids="bids"
                :currency="lot.currency"
                :current-price="CurrentBid || 0"
              />
            </template>
          </lotItemDetails>
          <lotDetails class="mt-[60px] mb-[100px]" :data="lot" />
        </div>
      </container>
    </layoutApp>
  </div>
</template>
