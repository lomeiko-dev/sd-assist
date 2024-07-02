<script setup lang="ts">
import { IBid, ILot } from "entities/lot/model";
import BidsItem from "./other/bids-item.vue";
import { ref } from "vue";
import { watch } from "vue";
import {getBidsByLot} from '../../../model/api/get-bids-by-lot'

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();

const bids = ref<IBid[]>(props.data.bids)

watch(() => props.data.bids, () => {
    bids.value = props.data.bids;
})

const updateBids = async () => {
    const new_bids = await getBidsByLot(props.data.id || 0)

    if (new_bids.length > 0) {
        bids.value = new_bids;
    }
}

</script>
<template>
  <div class="bg-smoky-white p-10 rounded-[10px]">
    <div>
      <p class="text-xs font-normal">Текущая цена:</p>
      <div class="flex mini-tablet:flex-row flex-col mini-tablet:items-center items-start mini-tablet:gap-[23px] gap-0 mt-3">
        <p class="text-[36px] font-bold text-primary">
          {{
            bids.length > 0
              ? `${bids[bids.length - 1].rate}`
              : `${props.data.default_rate}`
          }}
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
          v-for="(item, index) in bids"
          :bid="item"
          :currency="props.data.currency"
          :index="index + 1"
        />
      </div>
    </div>
    <button @click="updateBids" class="text-white text-sm font-normal py-3 mt-10 bg-primary rounded-md duration-300 hover:bg-primary/70 w-full">Обновить</button>
  </div>
</template>
