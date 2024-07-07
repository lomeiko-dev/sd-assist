<script setup lang="ts">
import { authStore } from "entities/auth";
import { lotItem } from "entities/lot";
import { lotArchivedStore } from "features/archived-lot";
import { baseLotForm, managmentLotForm } from "features/managment-lot-form";
import { container } from "shared/ui/container";
import { onMounted } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";

const auth = authStore();
const archiveStore = lotArchivedStore();

onMounted(async () => {
  await archiveStore.loadLots();
  archiveStore.getTotalCount();
});
</script>
<template>
  <layoutApp is-show-navigator :selected-link="enumAccountNavigator.ARCHIVE" :counting="archiveStore.totalCount">
    <container class="mt-10 mb-10">
      <h3 class="text-2xl font-bold text-primary">Архивированные лоты:</h3>
      <div class="mt-5 flex flex-col gap-5">
        <lotItem v-for="item in archiveStore.lots" :data="item">
          <template #features>
            <managmentLotForm v-if="auth.authData?.id === item.userId" :id="item.id || 0" :is-open="item.isOpen" />
            <baseLotForm v-else :id="item.id || 0" />
          </template>
        </lotItem>
      </div>
    </container>
  </layoutApp>
</template>
