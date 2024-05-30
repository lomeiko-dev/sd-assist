<script setup lang="ts">
import { formCreateLot } from "features/create-lot";
import { container } from "shared/ui/container";
import { layoutApp } from "widgets/layouts/layout-app";

</script>
<template>
  <div>
    <layoutApp>
      <container>
        <h2 class="text-[32px] font-bold mt-[25px]">Размещение лота</h2>
        <formCreateLot class="mt-[31px] mb-[137px]" />
      </container>
    </layoutApp>
  </div>
</template>
<style lang="scss"></style>
