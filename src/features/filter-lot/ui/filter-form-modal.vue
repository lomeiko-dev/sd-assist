<script setup lang="ts">
import Dialog from "primevue/dialog";
import { ref } from "vue";
import FilterForm from "./filter-form.vue";
import inlineSvg from 'vue-inline-svg'
import settingsIcon from 'shared/assets/icons/settings.svg'

const isShow = ref(false);
</script>
<template>
  <button @click="isShow = true" class="flex flex-row items-center justify-center gap-1 text-sm font-normal text-primary border border-solid border-primary rounded-md py-2 w-[220px] duration-300 hover:bg-primary/20">
      <p>Фильтрация</p>
      <inlineSvg :src="settingsIcon"/>
  </button>

  <Dialog class="w-1/2 -mt-[60px]" v-model:visible="isShow" modal>
    <template #container>
      <FilterForm class="w-full"/>
    </template>
  </Dialog>
</template>
