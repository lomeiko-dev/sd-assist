<script setup lang="ts">
import Intro from "./components/intro.vue";
import CustomerBase from "./components/customer-base.vue";
import { layoutApp } from "widgets/layouts/layout-app";
import { lotListPreview } from "widgets/lot-list";
import { container } from "shared/ui/container";
import { useRouter } from "vue-router";

const route = useRouter();

const test = () => {
  route.push({name: "lot-list"})
}

</script>

<template>
  <div>
    <layout-app>
      <button @click="test" >test</button>
      <Intro class="tablet:mt-[73px] mt-[41px]" />
      <container is-mobile-padding>
        <lotListPreview class="tablet:my-[100px] my-[41px]" title="Недавно размещенные лоты" to-all-offers="/" />
      </container>
      <CustomerBase />
    </layout-app>
  </div>
</template>
