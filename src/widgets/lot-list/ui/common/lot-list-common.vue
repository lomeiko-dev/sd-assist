<script setup lang="ts">
import { pagination } from "shared/ui/pagination";
import { onMounted, watch } from "vue";
import { getLotPages } from "entities/lot/model/api/get-lot-pages";
import { lotItem, lotStore, skeletonItem } from "entities/lot";
import { baseLotForm, managmentLotForm } from "features/managment-lot-form";
import { authStore } from "entities/auth";
import { sortStore } from "features/sort-lot";
import { notData } from "shared/ui/not-data";

const store = lotStore();
const sort = sortStore();
const auth = authStore();

const loadLots = async () => {
  store.setLoading();
  const { data, total } = (await getLotPages(store.page, store.LIMIT, sort.sortString)) || {};
  store.setLots(data || []);
  store.setTotalCount(Number(total));
};

watch(
  () => store.page,
  () => {
    loadLots();
  }
);

watch(
  () => sort.sortString,
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
    <div class="my-10" v-if="store.lots.length === 0">
      <notData/>
    </div>
    <div class="flex flex-col">
      <skeletonItem v-if="store.isLoading" v-for="_ in Array(store.LIMIT).fill('')" />
      <div v-else v-for="item in store.lots" class="w-full border-b border-solid border-primary/20">
        <lotItem :data="item">
          <template #features>
            <managmentLotForm v-if="auth.authData?.id === item.userId" :id="item.id || 0" :is-open="item.isOpen" />
            <baseLotForm v-else :id="item.id || 0" />
          </template>
        </lotItem>
      </div>
      <pagination
        v-if="store.total_count !== 0"
        @set-page="(index) => store.setPage(index)"
        class="my-10"
        :total-count="Math.ceil(store.total_count / store.LIMIT)"
      />
    </div>
  </div>
</template>
