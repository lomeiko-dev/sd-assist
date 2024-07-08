<script setup lang="ts">
import { lotArchivedStore } from "features/archived-lot";
import { container } from "shared/ui/container";
import { onMounted } from "vue";
import { enumAccountNavigator } from "widgets/layouts/layout-app";
import { layoutApp } from "widgets/layouts/layout-app";
import { baseLotList } from "widgets/lot-list";

const archiveStore = lotArchivedStore();

onMounted(async () => {
  await archiveStore.loadLots();
  archiveStore.getTotalCount();
});
</script>
<template>
  <layoutApp is-show-navigator :selected-link="enumAccountNavigator.ARCHIVE" :counting="archiveStore.totalCount">
    <container class="mt-10 mb-10">
      <baseLotList is-show-form :lots="archiveStore.lots" title="Архивированные лоты:"/>
    </container>
  </layoutApp>
</template>
