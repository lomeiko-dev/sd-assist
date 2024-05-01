<script setup lang="ts">
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import calendar from "shared/assets/icons/calendar.svg";
import { ref } from "vue";
import inlineSvg from "vue-inline-svg";
import GroupContainer from "../components/group-container.vue";
import { watch } from "vue";

interface IProps {
  title: string;
}

const props = defineProps<IProps>();
const model = defineModel<Date>();

const valueDate = ref("")
const isShow = ref(false);

watch(model, () => {
  valueDate.value = `${model.value?.toLocaleDateString()} | ${model.value?.toLocaleTimeString()}`;
  isShow.value = false;
})

</script>
<template>
  <div class="group-input-date">
    <GroupContainer :title="props.title">
      <div class="relative w-full">
        <InputText class="cursor-pointer h-full w-full" @click="isShow = true" v-model="valueDate" />
        <button class="cursor-pointer absolute top-1/3 mini-tablet:right-[25px] right-0 z-20" @click="isShow = true">
          <inlineSvg :src="calendar" />
        </button>
      </div>
    </GroupContainer>
    <Dialog class="dialog-group-input-date" v-model:visible="isShow" modal>
      <Calendar v-model="model" inline showWeek showTime hourFormat="24" />
    </Dialog>
  </div>

</template>
<style lang="scss">
.dialog-group-input-date.p-dialog .p-dialog-content {
    padding: 0s 54px !important;
}
</style>
