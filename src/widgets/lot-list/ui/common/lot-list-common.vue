<script setup lang="ts">
import { pagination } from "shared/ui/pagination";
import { onMounted, watch } from "vue";
import { getLotPages } from "entities/lot/model/api/get-lot-pages";
import { lotItem, lotStore, skeletonItem } from "entities/lot";
import { baseLotForm, managmentLotForm } from "features/managment-lot-form";
import { authStore } from "entities/auth";

const store = lotStore();
const auth = authStore()
const LIMIT = 5;

const loadLots = async () => {
  store.setLoading();
  const { data, total } = (await getLotPages(store.page, LIMIT)) || {};
  store.setLots(data || []);
  store.setTotalCount(total);
};

watch(
  () => store.page,
  () => {
    loadLots();
  }
);

onMounted(async () => {
  await loadLots();
});
</script>
<template>
  <div>
    <div class="flex flex-col">
      <skeletonItem v-if="store.isLoading" v-for="_ in Array(LIMIT).fill('')" />
      <div v-else v-for="item in store.lots" class="w-full border-y border-solid border-primary/20 py-[23px]">
        <lotItem :data="item">
          <template #features>
            <managmentLotForm v-if="auth.authData?.id === item.userId" :id="item.id || 0" :is-open="item.isOpen"/>
            <baseLotForm v-else :id="item.id || 0"/>
          </template>
        </lotItem>
      </div>
      <pagination
        @set-page="(index) => store.setPage(index)"
        v-if="store.total_count !== 0"
        class="my-10"
        :total-count="Math.ceil(store.total_count / LIMIT)"
      />
    </div>
  </div>
</template>
