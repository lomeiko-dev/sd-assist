<script setup lang="ts">
import { Routes } from "shared/config/routes";
import { watchEffect } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { stopItLot } from "../model/api/stop-it-lot";
import { runLot } from "../model/api/run-lot";

interface IProps {
  id: number;
  isOpen: boolean;
}

const props = defineProps<IProps>();

const router = useRouter();
const isOpenLot = ref<boolean>(false);

watchEffect(() => {
  isOpenLot.value = props.isOpen;
});

const toggleOpenLotHandler = async () => {
  if (isOpenLot.value) {
    const result = await stopItLot(props.id);

    if (result.status === 200) isOpenLot.value = false;
  } else {
    const result = await runLot(props.id);

    if (result.status === 200) isOpenLot.value = true;
  }
};

const goToLotHandler = () => {
  router.push({ path: `${Routes.LOT_DETAILS.name}/${props.id}` });
};
</script>

<template>
  <div class="flex flex-row gap-[6px]">
    <button
      @click="goToLotHandler"
      class="w-full bg-primary rounded-md py-3 text-sm font-normal text-white duration-300 hover:bg-primary/70"
    >
      Посмотреть все ставки
    </button>
    <button
      @click="toggleOpenLotHandler"
      class="w-full bg-primary rounded-md py-3 text-sm font-normal text-white duration-300 hover:bg-primary/70"
    >
      {{ isOpenLot ? "Остановить лот" : "Запустить лот" }}
    </button>
  </div>
</template>
