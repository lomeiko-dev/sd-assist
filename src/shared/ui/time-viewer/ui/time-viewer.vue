<script setup lang="ts">
import time from "shared/assets/icons/time.svg";
import inlineSvg from "vue-inline-svg";
import { onMounted, ref } from "vue";
import { differenceDate } from "shared/lib/utils/differenceDate";

interface IProps {
  date_deadline: Date;
}

const props = defineProps<IProps>();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const isTrouble = ref(false);
onMounted(() => {
  subtractionDates();
});

const subtractionDates = () => {
  const result = differenceDate(props.date_deadline, new Date());

  days.value = result.days;
  hours.value = result.hours;
  minutes.value = result.minutes;

  if (result.days <= 0 && result.minutes <= 0 && result.hours <= 60) isTrouble.value = true;
};
</script>
<template>
  <div
    class="px-[10px] py-2 flex flex-row items-center gap-[5px] border border-solid rounded-full select-none h-[28px]"
    :class="isTrouble ? 'border-red-500/70' : 'color-green'"
  >
    <inlineSvg :src="time" :class="isTrouble ? 'time-disable' : 'time-success'" />
    <div class="text-sm font-bold" :class="isTrouble ? 'text-red-500/70' : 'color-green'">
      <p>{{ days }}д {{ hours }}ч {{ minutes }}мин</p>
    </div>
  </div>
</template>
<style lang="scss">
.color-green{
  border-color: rgb(36, 171, 26);
  color: rgb(36, 171, 26);
}
.time-disable {
  path {
    stroke: rgba($color: red, $alpha: 0.7);
  }
}

.time-success {
  path {
    stroke: rgba($color: green, $alpha: 0.7);
  }
}
</style>
