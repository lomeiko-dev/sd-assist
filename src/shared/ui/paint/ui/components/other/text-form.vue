<script setup lang='ts'>
import Dropdown from 'primevue/dropdown';
import { IText } from '../../../model/lib/types';

    interface IProps {
        text: IText
    }

    const props = defineProps<IProps>()
</script>
<template>
    <div class="w-[200px] flex flex-col gap-2">
        <p class="text-base font-medium">Настройки</p>
        <div class="flex flex-row items-center justify-between gap-1">
          <label class="text-sm" for="font-size">Шрифт (px):</label>
          <input
            class="border border-solid border-gray w-[110px] rounded-[6px] px-4"
            id="font-size"
            v-model="props.text.fontSize"
            type="number"
          />
        </div>
        <div class="flex flex-row items-center gap-1 justify-between">
          <label class="text-sm" for="font-size">Жирность:</label>
          <Dropdown
            v-model="props.text.fontWeight"
            class="border border-solid border-gray select-none"
            :options="[300, 400, 500, 600, 700, 800]"
          />
        </div>
        <div class="flex flex-row gap-1 justify-between border-t border-solid border-gray/30 pt-2 mt-1">
          <label class="text-sm" for="font-size">Цвет:</label>
          <input
            class="border border-solid border-gray w-[60px] cursor-pointer"
            id="font-size"
            type="color"
            v-model="props.text.colorHex"
          />
        </div>
      </div>
</template>
<style lang='scss'>
        
</style>