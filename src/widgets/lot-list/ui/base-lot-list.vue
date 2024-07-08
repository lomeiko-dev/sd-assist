<script setup lang="ts">
import { authStore } from "entities/auth";
import { ILot, lotItem } from "entities/lot";
import { baseLotForm, managmentLotForm } from "features/managment-lot-form";
import { notData } from "shared/ui/not-data";

interface IProps {
  lots: ILot[];
  title: string;
  isShowForm?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    isShowForm: false
});

const auth = authStore();
</script>
<template>
  <div>
    <h3 class="text-2xl font-bold text-primary mt-5">{{ props.title }}</h3>
    <div v-if="props.lots.length > 0" class="flex flex-col gap-5 mt-5">
      <lotItem v-for="item in props.lots" :data="item">
        <template v-if="props.isShowForm" #features>
          <managmentLotForm v-if="auth.authData?.id === item.userId" :id="item.id || 0" :is-open="item.isOpen" />
          <baseLotForm v-else :id="item.id || 0" />
        </template>
      </lotItem>
    </div>
    <notData class="mt-[100px]" v-else />
  </div>
</template>
