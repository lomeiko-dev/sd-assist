<script setup lang="ts">
import { ILot, getLotById, getRejectedLotsByUserId, lotMiniItem } from "entities/lot";
import { container } from "shared/ui/container";
import { ref } from "vue";
import { onMounted } from "vue";
import { accountNavigator, enumAccountNavigator } from "widgets/account-navigator";
import { accountNavigatorStore } from "widgets/account-navigator";
import { layoutApp } from "widgets/layouts/layout-app";

const rejectedLots = ref<{ lot: ILot; message: string }[]>([]);
const store = accountNavigatorStore();

onMounted(async () => {
  store.handleLinkClick(enumAccountNavigator.REJECTED);
  const {data, status} = await getRejectedLotsByUserId(1);

  if (status === 200) { 
    store.setCounting(enumAccountNavigator.REJECTED, data.length)
    for (let i = 0; i < data.length; i++) {
      const lot = await getLotById(data[i].lotId);

      rejectedLots.value.push({ lot: lot.data[0], message: data[i].message });
    }
  }
});
</script>
<template>
  <layoutApp>
    <accountNavigator />
    <container class="mt-10 mb-10">
      <h3 class="text-2xl font-bold text-primary">Отклоненно администрацией сайта:</h3>
      <div class="flex flex-col gap-10 mt-5">
        <div v-for="item in rejectedLots">
          <lotMiniItem :date="item.lot.date_create" :id_lot="item.lot.id_lot" :title="item.lot.title" />
          <p>Причина: {{ item.message }}</p>
        </div>
      </div>
    </container>
  </layoutApp>
</template>
