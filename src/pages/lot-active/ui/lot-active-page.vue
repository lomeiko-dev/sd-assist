<script setup lang="ts">
import { ILot, getActiveLotsByUserId, lotItem } from "entities/lot";
import { container } from "shared/ui/container";
import { onMounted } from "vue";
import { ref } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";
import { managmentLotForm } from "features/managment-lot-form";
import { authStore } from "entities/auth";

const auth = authStore();
const lots = ref<ILot[]>([]);

onMounted(async () => {
  const result = await getActiveLotsByUserId(auth.authData?.id || 0);
  if (result.status === 200) lots.value = result.data;
});
</script>
<template>
  <layoutApp is-show-navigator :selected-link="enumAccountNavigator.MY_ACTIVITY" :counting="lots.length">
    <container class="mt-10">
      <h3 class="text-2xl font-bold text-primary mt-5">Активные лоты:</h3>
      <div class="flex flex-col gap-5 mt-5">
        <lotItem v-for="item in lots" :data="item">
          <template #features>
            <managmentLotForm :id="item.id || 0" :is-open="item.isOpen" />
          </template>
        </lotItem>
      </div>
    </container>
  </layoutApp>
</template>
