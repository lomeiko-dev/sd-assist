<script setup lang="ts">
import { watch, onMounted, ref } from "vue";
import { layoutApp } from "widgets/layouts/layout-app";
import { lotListPreview } from "widgets/lot-list";
import { container } from "shared/ui/container";
import { Routes } from "shared/config/routes";
import { authForm } from "features/auth-form";
import { useRoute, useRouter } from "vue-router";
import Intro from "./components/intro.vue";
import CustomerBase from "./components/customer-base.vue";
import Dialog from "primevue/dialog";

const showAuth = ref(false);
const route = useRoute();
const router = useRouter()

onMounted(() => checkParamsAuth());
watch(
  () => route.params.auth,
  () => checkParamsAuth()
);

watch(() => showAuth.value, () => {
  if(showAuth.value === false){
    router.push({name: Routes.HOME.name})
  }
})

const checkParamsAuth = () => {
  if (route.params.auth === "true") showAuth.value = true;
};
</script>

<template>
  <layout-app>
    <Intro class="tablet:mt-[73px] mt-[41px]" />
    <container is-mobile-padding>
      <lotListPreview
        :to-all-offers="Routes.LOT_LIST.name"
        class="tablet:my-[100px] my-[41px]"
        title="Недавно размещенные лоты"
      />
    </container>
    <CustomerBase />
  </layout-app>
  <Dialog class="w-[550px] p-0 dialog-button-login" modal v-model:visible="showAuth">
    <authForm @close-modal="showAuth = false" />
  </Dialog>
</template>
<style lang="scss">
.dialog-button-login.p-dialog .p-dialog-content {
  padding: 0 70px;
  padding-bottom: 71px;
}
</style>
