<script setup lang="ts">
import { ILot } from "entities/lot/model";
import ItemData from "../item-data.vue";
import { transferOption } from "../../../model/lib/utils/transfer-option";
import { damageClassification, typeDrive, typeEngine, typePassportPTS, typeTransmission } from "shared/config/selectors";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="w-full">
    <div class="flex mobile:flex-row flex-col mobile:gap-[67px] gap-10">
      <div class="flex flex-col w-full">
        <ItemData name="Классификация повреждений:" :data="transferOption(damageClassification, props.data.car_damage)" />
        <ItemData name="Повреждения двигателя:" :data="transferOption(damageClassification, props.data.engine_damage)" />
        <ItemData name="Повреждения КПП:" :data="transferOption(damageClassification, props.data.KPP_damage)" />
      </div>
      <div class="flex flex-col w-full">
        <ItemData name="Тип двигателя:" :data="transferOption(typeEngine, props.data.type_engine)" />
        <ItemData name="Объем двигателя:" :data="`${props.data.volume_engine} л.`" />
        <ItemData name="Мощность двигателя:" :data="`${props.data.power_engine} кДЖ`" />
      </div>
    </div>
    <div class="flex mobile:flex-row flex-col mobile:gap-[67px] gap-10 mobile:mt-[60px]">
      <div class="flex flex-col w-full">
        <ItemData name="Привод:" :data="transferOption(typeDrive, props.data.type_drive)" />
        <ItemData name="Коробка передач:" :data="transferOption(typeTransmission, props.data.type_transmission)" />
      </div>
      <div class="flex flex-col w-full">
        <ItemData name="Пробег:" :data="`${props.data.mileage} км`" />
        <ItemData name="Пасспорт (ПТС):" :data="transferOption(typePassportPTS, props.data.passport_pts)" />
      </div>
    </div>
  </div>
</template>
