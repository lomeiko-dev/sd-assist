<script setup lang="ts">
import Slider from "primevue/slider";

const size = defineModel<number>('size')
const color = defineModel<string>('color')

</script>
<template>
  <div class="flex flex-row justify-center bg-white p-2 rounded-md gap-5 w-[200px]">
    <div class="h-full flex flex-col">
        <label class="text-xs font-normal" for="color">Цвет:</label>
        <input v-model="color" id="color" type="color" />
    </div>
    <div class="h-full flex flex-col">
        <label class="text-xs font-normal" for="slider">Размер: {{ size }}</label>
        <Slider :max="30" :min="1" id="slider" v-model="size" class="w-[100px] mt-3" />
    </div>
  </div>
</template>
