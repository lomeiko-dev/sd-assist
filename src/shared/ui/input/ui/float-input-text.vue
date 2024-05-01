<script setup lang='ts'>
import FloatLabel from 'primevue/floatlabel';
import placeholder from './components/placeholder.vue'
import InputText from 'primevue/inputtext';
import { IInputProps } from '../model/types';

const props = defineProps<IInputProps>();
const model = defineModel<string>();
</script>
<template>
    <FloatLabel
        class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal"
      >
        <InputText
          placeholder="_"
          class="w-full h-full rounded-[10px] px-[20px]"
          :id="props.id"
          type="text"
          v-model="model"
        />

        <placeholder :for="props.id" :title="props.placeholder || ''" :error-title="props.errorPlaceholder" />
      </FloatLabel>
</template>
<style lang='scss'>
        
</style>