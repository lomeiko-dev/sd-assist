<script setup lang="ts">
import { pagination } from "shared/ui/pagination";
import { onMounted, watch } from "vue";
import { getLotPages } from "entities/lot/model/api/get-lot-pages";
import { lotItem, lotStore } from "entities/lot";

const store = lotStore();
const LIMIT = 5;

const loadLots = async () => {
  const { data, total } = (await getLotPages(store.page, LIMIT)) || {};
  store.setLots(data || [], true);
  store.setTotalCount(total);
  console.log(data)
};

watch(() => store.page, () => {
  loadLots()
})

onMounted(async () => {
  await loadLots();
});

</script>
<template>
  <div>
    <div class="flex flex-col">
      <div v-for="item in store.lots" class="w-full max-w-[904px] border-y border-solid border-primary/20 py-[23px]">
        <lotItem :data="item" />
      </div>
      <pagination @set-page="(index) => store.setPage(index)" v-if="store.total_count !== 0" class="my-10" :total-count="Math.ceil(store.total_count / LIMIT)" />
    </div>
  </div>
</template>
