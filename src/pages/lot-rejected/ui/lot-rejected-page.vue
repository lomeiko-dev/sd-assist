<script setup lang="ts">
import { authStore } from "entities/auth";
import { ILot, getLotById, getRejectedLotsByUserId, lotMiniItem } from "entities/lot";
import { container } from "shared/ui/container";
import { ref } from "vue";
import { onMounted } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";

const auth = authStore()
const rejectedLots = ref<{ lot: ILot; message: string }[]>([]);

onMounted(async () => {
  const {data, status} = await getRejectedLotsByUserId(auth.authData?.id || 0);

  if (status === 200) { 
    for (let i = 0; i < data.length; i++) {
      const lot = await getLotById(data[i].lotId);

      rejectedLots.value.push({ lot: lot.data[0], message: data[i].message });
    }
  }
});
</script>
<template>
  <layoutApp is-show-navigator :selected-link="enumAccountNavigator.REJECTED" :counting="rejectedLots.length">
    <container class="mt-10 mb-10">
      <h3 class="text-2xl font-bold text-primary">Отклоненно администрацией сайта:</h3>
      <div class="flex flex-col gap-10 mt-5">
        <div v-for="item in rejectedLots">
          <lotMiniItem :id_lot="item.lot.id_lot" :title="item.lot.title" />
          <p>Причина: {{ item.message }}</p>
        </div>
      </div>
    </container>
  </layoutApp>
</template>
