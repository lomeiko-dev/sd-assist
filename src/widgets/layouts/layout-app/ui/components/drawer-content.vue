<script setup lang="ts">
import { buttonCreateLot } from "features/create-lot";
import { search } from "features/filter-lot";
import { logo } from "shared/ui/logo";
import accountNavigator from "./account-navigator.vue";
</script>
<template>
  <div class="flex flex-col">
    <logo/>
    <div class="mt-5 flex flex-col gap-2">
        <search />
        <buttonCreateLot/>
    </div>
    <accountNavigator class="mt-10" is-mobile/>
  </div>
</template>
