<script setup lang="ts">
import { onMounted, watch } from "vue";
import { pagination } from "shared/ui/pagination";
import { getLotPages } from "entities/lot";
import { lotItem, lotStore, skeletonItem } from "entities/lot";
import { baseLotForm, managmentLotForm } from "features/managment-lot-form";
import { authStore } from "entities/auth";
import { sortStore } from "features/sort-lot";
import { notData } from "shared/ui/not-data";
import { filterStore } from "features/filter-lot";

const store = lotStore();
const sort = sortStore();
const filter = filterStore();
const auth = authStore();

const loadLots = async () => {
  store.setLoading();
  const { data, total } =
    (await getLotPages(store.page, store.LIMIT, `${sort.sortString}${filter.getFullQueryString()}`)) || {};
  store.setLots(data || []);
  store.setTotalCount(Number(total));
};

watch(
  () => [filter.filterString, filter.searchedString, sort.sortString, store.page],
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
      <notData />
    </div>
    <div class="flex flex-col gap-5">
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
        v-if="store.total_count !== 0 && store.total_count > 0"
        @set-page="(index) => store.setPage(index)"
        class="my-10"
        :total-count="Math.ceil(store.total_count / store.LIMIT)"
      />
    </div>
  </div>
</template>
