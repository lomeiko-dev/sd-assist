<script setup lang="ts">
import { authStore } from "entities/auth";
import { ILot, getCompletedLotsByUserId } from "entities/lot";
import { container } from "shared/ui/container";
import { onMounted } from "vue";
import { ref } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";
import { baseLotList } from "widgets/lot-list";

const auth = authStore()
const lots = ref<ILot[]>([]);

onMounted(async () => {
  const result = await getCompletedLotsByUserId(auth.authData?.id || 0);

  if (result.status === 200) {
    lots.value = result.data;
  }
});
</script>
<template>
  <layoutApp is-show-navigator :selected-link="enumAccountNavigator.MY_COMPLETED" :counting="lots.length">
    <container class="mt-10 mb-10">
      <baseLotList is-show-form :lots="lots" title="Завершенные лоты:"/>
    </container>
  </layoutApp>
</template>
