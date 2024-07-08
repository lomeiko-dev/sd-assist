<script setup lang="ts">
import { notData } from 'shared/ui/not-data';
import {IRejectedLot} from '../../model/types'
import { lotMiniItem } from 'entities/lot';

interface IProps {
  lots: IRejectedLot[];
  title: string;
}

const props = defineProps<IProps>();
</script>
<template>
  <div>
    <h3 class="text-2xl font-bold text-primary">{{ props.title }}</h3>
    <div v-if="props.lots.length > 0" class="flex flex-col gap-10 mt-5">
      <div v-for="item in props.lots">
        <lotMiniItem :id_lot="item.lot.id_lot" :title="item.lot.title" />
        <p>Причина: {{ item.message }}</p>
      </div>
    </div>
    <notData v-else class="mt-[100px]"/>
  </div>
</template>
