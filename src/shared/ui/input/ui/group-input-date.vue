<script setup lang="ts">
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import calendar from "shared/assets/icons/calendar.svg";
import { ref } from "vue";
import inlineSvg from "vue-inline-svg";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();

const test = ref()
const isShow = ref(false);
</script>
<template>
  <InputGroup class="rounded-[10px]">
    <InputGroupAddon class="whitespace-nowrap border-r border-solid border-primary/20 py-[23px] w-full max-w-[156px]">
      <p class="text-xs font-normal text-gray leading-[14.4px]">
        {{ props.title }}
      </p>
    </InputGroupAddon>
    <div class="relative w-full">
      <InputText class="cursor-pointer h-full w-full" @click="isShow = true" v-model="model" />
      <button class="cursor-pointer absolute top-1/3 mini-tablet:right-[25px] right-0 z-20" @click="isShow = true">
        <inlineSvg :src="calendar" />
      </button>
    </div>
  </InputGroup>

  <Dialog v-model:visible="isShow" modal>
    <Calendar v-model="test" inline showWeek showTime hourFormat="24" />
  </Dialog>
</template>
