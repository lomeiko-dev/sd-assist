<script setup lang="ts">
import { filterForm, filterFormModal } from "features/filter-lot";
import { sortForm } from "features/sort-lot";
import Container from "shared/ui/container/ui/container.vue";
import { layoutApp } from "widgets/layouts/layout-app";
import { lotListCommon } from "widgets/lot-list";
import { useWindowSize } from "@vueuse/core";

const {width} = useWindowSize()

</script>
<template>
  <layoutApp is-show-navigator>
    <Container is-mobile-padding>
      <h3 class="text-[32px] font-bold text-black mt-[32px]">Все предложения</h3>
      <sortForm class="mt-[18px]" />
      <div :class="width > 740 ? 'flex-row' : 'flex-col'" class="flex gap-5 py-[23px] w-full">
        <filterForm v-show="width > 740" class="w-[370px]"/>
        <div v-show="width < 740" class="ml-auto">
          <filterFormModal />
        </div>
        <lotListCommon class="w-full" />
      </div>
    </Container>
  </layoutApp>
</template>
