<script setup lang="ts">
import Container from "shared/ui/container/ui/container.vue";
import { enumAccountNavigator } from "../model/types";
import Link from "./components/link.vue";
import { accountNavigatorStore } from "../model/store/account-navigator-store";
import { Routes } from "shared/config/routes";

const store = accountNavigatorStore()

</script>
<template>
  <div class="border-b border-solid border-b-primary/20 py-7">
    <Container class="flex flex-row items-center justify-between">
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.MY_ACTIVITY"
        :enum-name="enumAccountNavigator.MY_ACTIVITY"
        title="Мои активные"
        color="#8C9091"
        :link="Routes.LOT_ACTIVE.name"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.MY_COMPLETED"
        :enum-name="enumAccountNavigator.MY_COMPLETED"
        title="Мои завершенные"
        color="#6F936B"
        :link="Routes.LOT_COMPLETED.name"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.REJECTED"
        :enum-name="enumAccountNavigator.REJECTED"
        title="Отклоненные"
        color="#901E1E"
        :link="Routes.LOT_REJECTED.name"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.ARCHIVE"
        :enum-name="enumAccountNavigator.ARCHIVE"
        title="Архив"
        color="#8C9091"
        :link="Routes.LOT_ARCHIVE.name"
      />
    </Container>
  </div>
</template>
