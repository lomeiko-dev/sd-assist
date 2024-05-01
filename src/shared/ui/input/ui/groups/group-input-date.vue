<script setup lang="ts">
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import calendar from "shared/assets/icons/calendar.svg";
import { ref } from "vue";
import inlineSvg from "vue-inline-svg";
import GroupContainer from "../components/group-container.vue";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<string>();

const test = ref();
const isShow = ref(false);
</script>
<template>
  <GroupContainer :title="props.title">
    <div class="relative w-full">
      <InputText class="cursor-pointer h-full w-full" @click="isShow = true" v-model="model" />
      <button class="cursor-pointer absolute top-1/3 mini-tablet:right-[25px] right-0 z-20" @click="isShow = true">
        <inlineSvg :src="calendar" />
      </button>
    </div>
  </GroupContainer>

  <Dialog v-model:visible="isShow" modal>
    <Calendar v-model="test" inline showWeek showTime hourFormat="24" />
  </Dialog>
</template>
