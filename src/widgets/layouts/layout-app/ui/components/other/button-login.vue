<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import loginSvg from "shared/assets/icons/login.svg";
import { useWindowSize } from "@vueuse/core";
import Dialog from "primevue/dialog";
import { authForm } from "features/auth-form";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const { width } = useWindowSize();
const showAuth = ref(false);

onMounted(() => {
  if (route.params.auth === "true") showAuth.value = true;
});
</script>

<template>
  <button
    @click="showAuth = true"
    v-if="width > 1024"
    class="bg-primary rounded-md flex justify-center items-center w-full max-w-[180px] h-[47px] text-base font-normal text-white duration-300 hover:bg-primary/70"
  >
    Личный кабинет
  </button>
  <inlineSvg @click="showAuth = true" class="min-w-[47px]" v-else :src="loginSvg" />

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
