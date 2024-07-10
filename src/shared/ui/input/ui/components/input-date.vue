<script setup lang="ts">
import inlineSvg from "vue-inline-svg";
import calendar from "shared/assets/icons/calendar.svg";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import { watch } from "vue";
import { onMounted } from "vue";
import { IInputProps } from "../../model/types";

interface IProps {
  minDate?: Date;
  maxDate?: Date;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();

const valueDate = ref("");
const isShow = ref(false);

watch(model, () => {
  valueDate.value = `${model.value?.toLocaleDateString()} | ${model.value?.toLocaleTimeString()}`;
  isShow.value = false;
});

onMounted(() => {
  if (model.value) valueDate.value = `${model.value?.toLocaleDateString()} | ${model.value?.toLocaleTimeString()}`;
});
</script>
<template>
  <div class="relative w-full input-date">
    <InputText
      placeholder="Не выбрано"
      class="cursor-pointer h-full w-full shadow-none rounded-[10px]"
      @click="isShow = true"
      v-model="valueDate"
    />
    <button class="cursor-pointer absolute top-1/3 mini-tablet:right-[25px] right-0 z-20" @click="isShow = true">
      <inlineSvg :src="calendar" />
    </button>
  </div>
  <Dialog class="dialog-group-input-date" v-model:visible="isShow" modal>
    <Calendar
      :max-date="props.maxDate"
      :min-date="props.minDate"
      v-model="model"
      inline
      showWeek
      showTime
      hourFormat="24"
    />
  </Dialog>
</template>
<style lang="scss">
.input-date{
  .p-inputtext{
    padding: 15px 12px !important;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
