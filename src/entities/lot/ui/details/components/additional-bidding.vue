<script setup lang="ts">
import { IBid, ILot } from "entities/lot/model";
import BidsItem from "./other/bids-item.vue";
import { ref } from "vue";
import { watch } from "vue";
import { getBidsByLot } from "../../../model/api/get-bids-by-lot";
import { computed } from "vue";

interface IProps {
  data: ILot;
  isPagination: boolean;
}

const props = defineProps<IProps>();

const isShowAll = ref<boolean>(false);
const bids = ref<IBid[]>(props.data.bids);

const bidsComputed = computed(() => {
  if(props.isPagination && !isShowAll.value){
    return bids.value.filter((_, index) => index < 3)
  }
  else{
    return bids.value
  }
})

watch(
  () => props.data.bids,
  () => {
    bids.value = props.data.bids;
  }
);

const updateBids = async () => {
  const new_bids = await getBidsByLot(props.data.id || 0);

  if (new_bids.length > 0) {
    bids.value = new_bids;
  }
};
</script>
<template>
  <div class="bg-smoky-white p-10 rounded-[10px]">
    <div>
      <p class="text-xs font-normal">Текущая цена:</p>
      <div
        class="flex mini-tablet:flex-row flex-col mini-tablet:items-center items-start mini-tablet:gap-[23px] gap-0 mt-3"
      >
        <p class="text-[36px] font-bold text-primary">
          {{ bids.length > 0 ? `${bids[bids.length - 1].rate}` : `${props.data.default_rate}` }}
          {{ props.data.currency }}
        </p>
        <p class="text-[22px] font-normal text-primary/30 line-through">
          {{ bids.length > 0 ? `${props.data.default_rate} ${props.data.currency}` : `` }}
        </p>
      </div>
    </div>
    <div class="mt-10">
      <p class="text-xs font-normal">Последние ставки:</p>
      <div class="flex flex-col gap-[23px] border-t border-solid border-t-primary/20 pt-[23px] mt-[12.5px]">
        <BidsItem
          v-if="props.data.bids.length > 0"
          v-for="(item, index) in bidsComputed"
          :bid="item"
          :currency="props.data.currency"
          :index="index + 1"
        />
        <div v-else class="text-center">
          <p>Ставок нет.</p>
        </div>
      </div>
    </div>
    <button
      @click="updateBids"
      class="text-white text-sm font-normal py-[14px] mt-10 bg-primary rounded-md duration-300 hover:bg-primary/70 w-full"
    >
      Обновить
    </button>
    <button
      v-if="props.isPagination && bids.length > 3 && !isShowAll"
      @click="isShowAll = true"
      class="mt-2 text-primary text-sm font-normal border border-solid border-primary py-[14px] rounded-md duration-300 w-full hover:bg-primary/70 hover:text-white"
    >
      Посмотреть все ставки
    </button>
  </div>
</template>
