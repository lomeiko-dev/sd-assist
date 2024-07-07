<script setup lang="ts">
import { authStore } from "entities/auth";
import { ILot, getCompletedLotsByUserId, lotItem } from "entities/lot";
import { container } from "shared/ui/container";
import { onMounted } from "vue";
import { ref } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";

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
      <h3 class="text-2xl font-bold text-primary">Завершенные лоты:</h3>
      <div class="flex flex-col gap-5 mt-5">
        <lotItem v-for="item in lots" :data="item" />
      </div>
    </container>
  </layoutApp>
</template>
