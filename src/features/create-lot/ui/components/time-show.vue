<script setup lang="ts">
import { differenceDate } from "shared/lib/utils/differenceDate";

interface IProps {
  beginDate: Date;
  endDate: Date;
}

const props = defineProps<IProps>();

const calculateData = () => {
  const result = differenceDate( props.endDate, props.beginDate);
  return `${result.days} дней, ${result.hours} часов, ${result.minutes} минут`;
}
</script>

<template>
  <div class="rounded-[6px] bg-green/50 flex flex-row justify-between items-center px-[20px] py-[16px]">
    <p class="text-xs font-normal">Продолжительность торгов</p>
    <p class="text-base font-normal">{{ calculateData() }}</p>
  </div>
</template>
