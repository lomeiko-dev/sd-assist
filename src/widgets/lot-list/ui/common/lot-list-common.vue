<script setup lang="ts">
import { pagination } from "shared/ui/pagination";
import { onMounted, watch } from "vue";
import { getLotPages } from "entities/lot/model/api/get-lot-pages";
import { lotItem, lotStore, skeletonItem } from "entities/lot";
import { useWindowSize } from "@vueuse/core";
import { useRouter } from "vue-router";
import { Routes } from "shared/config/routes";

const store = lotStore();
const LIMIT = 5;

const { width } = useWindowSize();
const route = useRouter();

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
  if (store.lots.length === 0) await loadLots();
});
</script>
<template>
  <div>
    <div class="flex flex-col">
      <skeletonItem v-if="store.isLoading" v-for="_ in Array(LIMIT).fill('')" />
      <div v-else v-for="item in store.lots" class="w-full border-y border-solid border-primary/20 py-[23px]">
        <lotItem :data="item">
          <template #features>
            <div class="flex gap-[6px] mt-[8px]" :class="width < 768 ? 'flex-col' : 'flex-row'">
              <button
                @click="route.push({ path: `${Routes.LOT_DETAILS.name}/${item.id}` })"
                class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white duration-200 hover:bg-primary/70"
              >
                Сделать ставку
              </button>
              <button
                class="bg-primary rounded-[6px] w-full h-[41px] text-sm font-normal text-white whitespace-nowrap duration-200 hover:bg-primary/70"
              >
                Автоматическая ставка
              </button>
            </div>
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
