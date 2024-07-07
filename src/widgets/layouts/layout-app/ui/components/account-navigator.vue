<script setup lang="ts">
import Container from "shared/ui/container/ui/container.vue";
import { enumAccountNavigator } from "../../model/types";
import Link from "./other/link.vue";
import { accountNavigatorStore } from "../../model/store/account-navigator-store";
import { Routes } from "shared/config/routes";

interface IProps {
  isMobile?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  isMobile: false
})

const store = accountNavigatorStore()

</script>
<template>
  <div class="border-b border-solid border-b-primary/20 py-7">
    <Container :class="props.isMobile ? 'flex-col gap-10' : 'flex-row items-center'" class="flex justify-between">
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.MY_ACTIVITY"
        :enum-name="enumAccountNavigator.MY_ACTIVITY"
        title="Мои активные"
        color="#8C9091"
        :link="Routes.LOT_ACTIVE.name"
        :is-mobile="props.isMobile"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.MY_COMPLETED"
        :enum-name="enumAccountNavigator.MY_COMPLETED"
        title="Мои завершенные"
        color="#6F936B"
        :link="Routes.LOT_COMPLETED.name"
        :is-mobile="props.isMobile"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.REJECTED"
        :enum-name="enumAccountNavigator.REJECTED"
        title="Отклоненные"
        color="#901E1E"
        :link="Routes.LOT_REJECTED.name"
        :is-mobile="props.isMobile"
      />
      <Link
        :is-active="store.selectedLink === enumAccountNavigator.ARCHIVE"
        :enum-name="enumAccountNavigator.ARCHIVE"
        title="Архив"
        color="#8C9091"
        :link="Routes.LOT_ARCHIVE.name"
        :is-mobile="props.isMobile"
      />
    </Container>
  </div>
</template>
