<script setup lang="ts">
import { useRouter } from 'vue-router';
import {useWindowSize} from '@vueuse/core'
import { Routes } from 'shared/config/routes';

interface IProps {
  id: number;
}

const props = defineProps<IProps>();

const router = useRouter()
const {width} = useWindowSize()

const goToLotHandler = () => {
    router.push({path: `${Routes.LOT_DETAILS.name}/${props.id}`})
}

</script>
<template>
  <div>
    <div class="flex gap-[6px] mt-[8px]" :class="width < 768 ? 'flex-col' : 'flex-row'">
      <button
        @click="goToLotHandler"
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
  </div>
</template>
