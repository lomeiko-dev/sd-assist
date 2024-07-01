<script setup lang="ts">
import { ref, onMounted } from "vue";
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

onMounted(async () => {
  await request();
});
</script>

<template>
  <div>
    <layoutApp>
      <div v-if="lot">
        <container is-mobile-padding class="mt-10">
          <Header :id-lot="lot.id_lot" />
        </container>
        <container>
          <lotItemDetails class="mt-8" :data="lot">
            <template #features>
              <bidsForm
                class="mt-[33px]"
                :id="Number(lotId)"
                @change-bids="(value) => (bids = value)"
                :bids="bids"
                :currency="lot.currency"
                :default-rate="lot.default_rate"
              />
            </template>
          </lotItemDetails>
        </container>
        <container is-mobile-padding>
          <lotDetails class="mt-[60px] mb-[100px]" :data="lot" />
        </container>
      </div>
    </layoutApp>
  </div>
</template>
