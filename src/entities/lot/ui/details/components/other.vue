<script setup lang="ts">
import { ILot } from "entities/lot/model";
import ItemData from "../item-data.vue";
import { transferOption } from "entities/lot/model/lib/utils/transfer-option";
import { carBody } from "shared/config/selectors";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="w-1/2 mx-auto">
    <div class="flex flex-row gap-4 items-center mt-3">
      <p class="text-sm font-normal text-black/40">Цвет:</p>
      <div :style="props.data.car_color.style" class="w-[32px] h-[32px] rounded-full"></div>
    </div>
    <div class="flex flex-col gap-4">
      <ItemData name="Кузов:" :data="transferOption(carBody, props.data.car_body)" />
      <ItemData name="Отметка о прекращении регистрации на основании п.60.10 Административного регламента ГИБДД" />
      <ItemData v-if="props.data.isNotFreeField" name="Нет свободных полей" />
      <ItemData v-if="props.data.isMarkMVD" name="Отметки МВД о прохождении криминалистической экспертизы" />
      <ItemData
        v-if="props.data.isWithdrawalAccountingGBDD"
        name="Возможно наличие справки о снятии ТС с учета ГИБДД и передачи ПТС в ГИБДД"
      />
      <ItemData
        v-if="props.data.isMarkTermitionRegistrationCar"
        name="Прекращение регистрации ТС на основании Приказа МВД России N 950 от 21.12.2019"
      />
      <ItemData v-if="props.data.isHidingMechanicDamage" name="Возможны скрытые механические повреждения" />
      <ItemData v-if="props.data.isFullEquipment" name="ТС (ГОТС) передается согласно штатной комплектации" />
      <ItemData v-if="props.data.isGOTSParkingLotSK" name="ГОТС на стоянке СК" />
    </div>
  </div>
</template>
