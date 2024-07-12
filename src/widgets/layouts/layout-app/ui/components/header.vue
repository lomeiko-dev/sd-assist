<script setup lang="ts">
import { authStore } from "entities/auth";
import { useWindowSize } from "@vueuse/core";
import { container } from "shared/ui/container";
import BurgerMenu from "./other/burger-menu.vue";
import ButtonLogin from "./other/button-login.vue";
import ButtonAccount from "./other/button-account.vue";
import { search } from "features/filter-lot";
import DrawerContent from "./drawer-content.vue";
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import { buttonCreateLot } from "features/create-lot";
import { logo } from "shared/ui/logo";
import { onMounted } from "vue";
import { getCountTrades } from "../../model/api/get-count-trades";

const { width } = useWindowSize();
const store = authStore();
const countTrades = ref(0);

const visibleDrawer = ref(false);

onMounted(async () => {
  const result = await getCountTrades();
  
  if(result.status === 200){
    countTrades.value = result.data.value
  }
})

</script>
<template>
  <div class="border-b border-solid border-primary/20 tablet:h-[108px] h-[68px]">
    <container class="relative flex flex-row items-center justify-between h-full w-full">
      <div class="w-fit flex flex-row h-full items-center">
        <div class="tablet:mr-[128px] mr-[10px]">
          <div
            class="absolute top-0 left-0 h-full border-x border-solid border-primary/20 tablet:px-[22px] px-[31px] flex items-center"
          >
            <BurgerMenu @click="visibleDrawer = true" />
          </div>
        </div>

        <logo class="tablet:mr-[49px] tablet:static tablet:translate-x-0 absolute left-[50%] -translate-x-[50%]" />

        <div v-if="!store.isAuth" class="sxga:flex flex-row gap-[5px] laptop:mr-[123px] mr-10 hidden">
          <p class="text-sm text-gray-400 font-normal whitespace-nowrap">Проведено торгов:</p>
          <p class="text-sm font-bold text-primary">{{ countTrades }}</p>
        </div>
      </div>

      <div class="flex flex-row justify-end w-full h-full items-center">
        <search/>
        <buttonCreateLot class="mx-[20px] sxga:min-w-[180px] sxga:w-[180px] w-[50px] min-w-[50px]" v-if="store.isAuth && width > 768" />
        <div
          :class="
            width < 768
              ? 'absolute right-0 h-full flex items-center px-[17px] border-x border-solid border-primary/20'
              : 'w-fit'
          "
        >
          <ButtonLogin v-if="!store.isAuth" />
          <ButtonAccount v-else />
        </div>
      </div>
    </container>
    <Sidebar v-model:visible="visibleDrawer">
      <DrawerContent />
    </Sidebar>
  </div>
</template>
