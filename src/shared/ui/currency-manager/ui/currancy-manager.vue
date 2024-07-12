<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";
import {Currency} from '../model/type'
import { onMounted } from "vue";
import {useWindowSize} from '@vueuse/core'

const model = defineModel<number>();
const emits = defineEmits(['selectCurrency'])

const currency = ref<"$" | "¥" | "€" | "₽">();

const {width} = useWindowSize()

onMounted(() => {
    currency.value = "₽";
    emits("selectCurrency", currency.value);
})

const selectCurrency = (value: Currency) => {
    currency.value = value;
    emits("selectCurrency", value);
}

</script>
<template>
  <div>
    <InputGroup class="border border-solid border-gray rounded-md">
      <InputGroupAddon class="border-r border-solid border-gray">{{ currency }}</InputGroupAddon>
      <InputNumber class="w-full" v-model="model" placeholder="Цена" />
      <InputGroupAddon v-if="width > 640" class="border-l border-solid border-gray">.00</InputGroupAddon>
    </InputGroup>
    <div class="mt-5">
      <h4>Цена в:</h4>
      <div class="flex flex-wrap gap-[5px] mt-3">
        <button @click="selectCurrency('₽')" class="bg-green text-white text-sm font-normal px-5 py-3 rounded-md duration-300 hover:bg-green/70">
          Рубль
        </button>
        <button @click="selectCurrency('$')" class="bg-green text-white text-sm font-normal px-5 py-3 rounded-md duration-300 hover:bg-green/70">
          Доллар
        </button>
        <button @click="selectCurrency('€')" class="bg-green text-white text-sm font-normal px-5 py-3 rounded-md duration-300 hover:bg-green/70">
          Евро
        </button>
        <button @click="selectCurrency('¥')" class="bg-green text-white text-sm font-normal px-5 py-3 rounded-md duration-300 hover:bg-green/70">
          Юань
        </button>
      </div>
    </div>
  </div>
</template>
