<script setup lang="ts">
import { ref, watch } from "vue";
import { IInputProps } from "../../model/types";
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import GroupContainer from "../components/group-container.vue";
import inlineSvg from "vue-inline-svg";
import calendar from "shared/assets/icons/calendar.svg";
import { onMounted } from "vue";

interface IProps {
  minDate?: Date;
  maxDate?: Date;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();

const valueDate = ref("")
const isShow = ref(false);

watch(model, () => {
  valueDate.value = `${model.value?.toLocaleDateString()} | ${model.value?.toLocaleTimeString()}`;
  isShow.value = false;
})

onMounted(() => {
  if(model.value)
    valueDate.value = `${model.value?.toLocaleDateString()} | ${model.value?.toLocaleTimeString()}`;
})

</script>
<template>
  <div class="group-input-date">
    <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
      <div class="relative w-full">
        <InputText placeholder="Не выбрано" class="cursor-pointer h-full w-full" @click="isShow = true" v-model="valueDate" />
        <button class="cursor-pointer absolute top-1/3 mini-tablet:right-[25px] right-0 z-20" @click="isShow = true">
          <inlineSvg :src="calendar" />
        </button>
      </div>
    </GroupContainer>
    <Dialog class="dialog-group-input-date" v-model:visible="isShow" modal>
      <Calendar :max-date="props.maxDate" :min-date="props.minDate" v-model="model" inline showWeek showTime hourFormat="24" />
    </Dialog>
  </div>

</template>
<style lang="scss">
.dialog-group-input-date.p-dialog .p-dialog-content {
    padding: 0s 54px !important;
}
</style>
