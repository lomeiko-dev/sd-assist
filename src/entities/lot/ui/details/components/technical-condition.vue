<script setup lang="ts">
import { ILot } from "entities/lot/model";
import ItemData from "../item-data.vue";
import { transferOption } from "../../../model/lib/utils/transfer-option";
import {
  damageClassification,
  typeDrive,
  typeEngine,
  typePassportPTS,
  typeTransmission,
} from "shared/config/selectors";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="w-full">
    <div class="flex mobile:flex-row flex-col mobile:gap-[67px] gap-10">
      <div class="flex flex-col w-full">
        <ItemData
          name="Классификация повреждений:"
          :data="transferOption(damageClassification, props.data.car_damage)"
        />
        <ItemData
          name="Повреждения двигателя:"
          :data="transferOption(damageClassification, props.data.engine_damage)"
        />
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
        <ItemData name="Паспорт (ПТС):" :data="transferOption(typePassportPTS, props.data.passport_pts)" />
      </div>
    </div>
    <div class="flex flex-col gap-[30px] bg-smoky-white rounded-[10px] p-10 mt-[30px]">
      <p v-if="props.data.isNotFreeField">Нет свободных полей</p>
      <p v-if="props.data.isMarkMVD">Отметки МВД о прохождении криминалистической экспертизы</p>
      <p v-if="props.data.isWithdrawalAccountingGBDD">Возможно наличие справки о снятии ТС с учета ГИБДД и передачи ПТС в ГИБДД</p>
      <p v-if="props.data.isMarkTermitionRegistrationCar">Прекращение регистрации ТС на основании Приказа МВД России N 950 от 21.12.2019</p>
      <p v-if="props.data.isHidingMechanicDamage">Возможны скрытые механические повреждения</p>
      <p v-if="props.data.isFullEquipment">ТС (ГОТС) передается согласно штатной комплектации</p>
      <p v-if="props.data.isGOTSParkingLotSK">ГОТС на стоянке СК</p>
    </div>
  </div>
</template>
