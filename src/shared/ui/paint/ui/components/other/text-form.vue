<script setup lang='ts'>
import Dropdown from 'primevue/dropdown';
import { IText } from 'shared/ui/paint/model/types';

    interface IProps {
        text: IText
    }

    const props = defineProps<IProps>()
</script>
<template>
    <div class="w-[240px] flex flex-col gap-2">
        <p class="text-lg font-medium">Настройки</p>
        <div class="flex flex-row justify-between gap-2">
          <label for="font-size">Шрифт (px):</label>
          <input
            class="border border-solid border-gray w-[110px] rounded-[6px] px-4"
            id="font-size"
            v-model="props.text.fontSize"
            type="number"
          />
        </div>
        <div class="flex flex-row gap-2 justify-between">
          <label for="font-size">Жирность:</label>
          <Dropdown
            v-model="props.text.fontWeight"
            class="border border-solid border-gray select-none"
            :options="[300, 400, 500, 600, 700, 800]"
          />
        </div>
        <div class="flex flex-row gap-2 justify-between border-t border-solid border-gray/30 pt-2 mt-1">
          <label for="font-size">Цвет:</label>
          <input
            class="border border-solid border-gray w-[60px]"
            id="font-size"
            type="color"
            v-model="props.text.colorHex"
          />
        </div>
      </div>
</template>
<style lang='scss'>
        
</style>