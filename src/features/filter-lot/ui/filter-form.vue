<script setup lang="ts">
import { fieldsManager, generateForm, IFieldsManager } from "shared/ui/input";
import { configForm } from "../model/config/config-form";
import { ref } from "vue";
import { onMounted } from "vue";
import ButtonShow from "./components/button-show.vue";
import ButtonSave from "./components/button-save.vue";
import ButtonReset from "./components/button-reset.vue";

const fieldsManagmant = ref<IFieldsManager>(fieldsManager());

onMounted(() => {
  fieldsManagmant.value = fieldsManager();
});
</script>
<template>
  <div class="bg-smoky-white rounded-[10px] p-[25px] h-fit">
    <generateForm :config="configForm" :manager="fieldsManagmant" />
    <ButtonSave class="mt-[19px]" />
    <ButtonShow class="mt-[52px]" :count="5420" />
    <ButtonReset class="mt-[18px] mx-auto" />
  </div>
</template>
