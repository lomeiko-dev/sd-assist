<script setup lang="ts">
import { ILot } from "entities/lot/model";
import ItemData from "../item-data.vue";
import {formatDate} from 'shared/lib/utils/formatDate'
import { transferOption } from "../../../model/lib/utils/transfer-option";
import { insurances, typeCar } from "shared/config/selectors";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="w-full">
    <div class="flex flex-row gap-[67px]">
      <div class="flex flex-col w-full">
        <ItemData name="Вид страхования:" :data="transferOption(insurances, props.data.type_insurance)" />
        <ItemData name="Тип аукциона:" :data="props.data.isOpen ? 'Открытый' : 'Закрытый'" />
        <ItemData name="Начало торгов:" :data="formatDate(props.data.date_start)" />
        <ItemData name="Окончание торгов:" :data="formatDate(props.data.date_deadline)" />
      </div>
      <div class="flex flex-col w-full">
        <ItemData name="Окончание торгов:" :data="formatDate(props.data.date_deadline)" />
        <ItemData name="Срок обязывающего предложения:" :data="String(props.data.offer_period)" />
        <ItemData name="Регион:" :data="props.data.region.name" />
        <ItemData name="Город:" :data="props.data.city.name" />
      </div>
    </div>
    <div class="flex flex-row gap-[67px] mt-[60px]">
      <div class="flex flex-col w-full">
        <ItemData name="VIN номер:" :data="String(props.data.VIN_number)" />
        <ItemData name="Тип авто:" :data="transferOption(typeCar, props.data.car_type)" />
        <ItemData name="Марка:" :data="props.data.car_brand.brand" />
      </div>
      <div class="flex flex-col w-full">
        <ItemData name="Модель:" :data="props.data.car_model.model" />
        <ItemData name="Поколение:" :data="props.data.car_generation.generation" />
        <ItemData name="Год выпуска:" :data="String(props.data.release_year)" />
      </div>
    </div>
  </div>
</template>
