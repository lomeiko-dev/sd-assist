<script setup lang="ts">
import { ref, onMounted } from "vue";
import { authStore } from "entities/auth";
import { getLotById, getRejectedLotsByUserId } from "entities/lot";
import { container } from "shared/ui/container";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";
import { IRejectedLot } from "../model/types";
import LotRejectedList from "./components/lot-rejected-list.vue";

const auth = authStore();
const rejectedLots = ref<IRejectedLot[]>([]);

onMounted(async () => {
  const { data, status } = await getRejectedLotsByUserId(auth.authData?.id || 0);

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
      <LotRejectedList title="Отклоненно администрацией сайта:" :lots="rejectedLots" />
    </container>
  </layoutApp>
</template>
