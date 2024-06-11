<script setup lang="ts">
import { ref } from "vue";
import { IConfigField, generateForm, IFieldsManager } from "shared/ui/input";
import { characteristicFormConfig } from "../../model/config/characteristic-form-config";

interface IProps {
  managment: IFieldsManager,
}

const props = defineProps<IProps>();
const config = ref<IConfigField[]>(characteristicFormConfig)
</script>
<template>
  <generateForm :manager="props.managment" :config="config"/>
</template>
