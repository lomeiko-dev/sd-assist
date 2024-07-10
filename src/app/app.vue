<script setup lang="ts">
import { authStore } from "entities/auth";
import "./style/style.css";
import "./style/vueprime.scss";
import { onMounted, watch } from "vue";
import { accountNavigatorStore, enumAccountNavigator } from "widgets/layouts/layout-app";
import { lotArchivedStore } from "features/archived-lot";
import { getActiveLotsByUserId, getCompletedLotsByUserId, getRejectedLotsByUserId } from "entities/lot";
// import INTRO from '../../AUTHOR_INTRO/ui/INTRO.vue'
// import { ref } from "vue";

const store = authStore();

const navigatorStore = accountNavigatorStore();
const archivedStore = lotArchivedStore();
// const showIntro = ref(true);

const loadCounting = async () => {
  const userId = store.authData?.id || 0;

  archivedStore.getTotalCount();
  const activesLotTotal = (await getActiveLotsByUserId(userId)).data.length;
  const completedLotTotal = (await getCompletedLotsByUserId(userId)).data.length;
  const rejectedLotTotal = await (await getRejectedLotsByUserId(userId)).data.length;

  navigatorStore.setCounting(enumAccountNavigator.ARCHIVE, archivedStore.totalCount);
  navigatorStore.setCounting(enumAccountNavigator.MY_ACTIVITY, activesLotTotal);
  navigatorStore.setCounting(enumAccountNavigator.MY_COMPLETED, completedLotTotal);
  navigatorStore.setCounting(enumAccountNavigator.REJECTED, rejectedLotTotal);
};

onMounted(async () => {
  store.loadAuth();

  if (store.isAuth) {
    await loadCounting();
  }
});

watch(
  () => store.isAuth,
  async () => {
    if (store.isAuth) {
      await loadCounting();
    }
  }
);

</script>
<template>
  <div>
    <!-- <INTRO v-if="showIntro" @closed="showIntro = false"/> -->
    <RouterView />
  </div>
</template>