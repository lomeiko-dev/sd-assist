  <script setup lang="ts">
import { IBid } from "entities/lot";
import InputNumber from "primevue/inputnumber";
import { Currency } from "shared/ui/currency-manager";
import { computed } from "vue";
import { ref } from "vue";
import {patchBids} from '../model/api/patch-bids'
import { watch } from "vue";

interface IProps {
  id: number;
  currency: Currency;
  bids: IBid[];
  defaultRate: number
  closedForm?: () => void
}

const props = defineProps<IProps>();
const emits = defineEmits(['changeBids'])

const CurrentBid = computed(() => {
  if (props.bids.length > 0) {
    return props.bids[props.bids.length - 1].rate;
  }

  return props.defaultRate;
});

const minBid = computed(() => {
  return CurrentBid.value + 1000;
});

const value = ref<number>(minBid.value);

watch(() => props.bids, () => {
    value.value = minBid.value;
})

const dicrementValue = () => {
  if (value.value - 1000 < minBid.value) {
    return;
  }

  value.value -= 1000;
};

const incrementValue = () => {
  value.value += 1000;
};

const makeBid = async () => {
    const newBid: IBid = {
        date: new Date().toISOString(),
        userId: 1,
        rate: value.value
    }

    const newBids: IBid[] = [...props.bids, newBid]
    const result = await patchBids(props.id, newBids)

    if(result.status === 200){
        emits('changeBids', newBids)
        props.closedForm?.()
    }
}

</script>
<template>
  <div class="flex flex-col gap-[7px]">
    <div class="bg-white rounded-[10px] w-full h-[100px] p-[26px]">
      <p class="text-xs font-normal">Текущая ставка:</p>
      <p class="text-primary/30 tablet:text-[26px] text-[18px] font-bold mt-2">{{ CurrentBid }} {{ props.currency }}</p>
    </div>

    <div class="bg-white rounded-[10px] w-full h-[200px] p-[26px]">
      <div class="text-[12px] font-normal flex flex-row items-center gap-1">
        <p class="text-primary/60">Минимальная ставка:</p>
        <p class="text-primary font-bold">{{ minBid }}{{ props.currency }}</p>
      </div>
      <div class="tablet:p-[12px] p-[6px] border border-solid border-primary/20 rounded-[10px] flex flex-row mt-4">
        <button
          @click="dicrementValue"
          class="border-r border-solid border-r-primary/20 pr-[22px] pl-[10px] tablet:text-[26px] text-[18px]"
        >
          -
        </button>
        <InputNumber
          :min="minBid"
          class="input-price w-full tablet:text-[26px] text-[18px] font-bold text-primary"
          v-model="value"
          inputId="integeronly"
          :suffix="props.currency"
        />
        <button
          @click="incrementValue"
          class="border-l border-solid border-l-primary/20 pl-[22px] pr-[10px] tablet:text-[26px] text-[18px]"
        >
          +
        </button>
      </div>
      <button
        @click="makeBid"
        class="mt-[15px] w-full py-[14px] flex justify-center bg-primary rounded-[10px] text-white text-sm font-normal duration-300 hover:bg-primary/90"
      >
        Сделать ставку
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.input-price {
  .p-inputtext {
    text-align: center;
  }
}
</style>
