<script setup lang="ts">
import {
  carBody,
  damageClassification,
  typePassportPTS,
  typeEngine,
  typeDrive,
  typeTransmission,
} from "../../model/selectors/selectors";
import { groupColorPicker, groupDropdownSelect, checkBox, groupTextarea, groupInputNumber } from "shared/ui/input";
import InputContainer from "../components/input-container.vue";
import { createLotStore } from "features/create-lot/model/store/create-lot-store";

const store = createLotStore();
</script>
<template>
  <div class="flex flex-col gap-[13px]">
    <InputContainer key-name="carBody">
      <groupDropdownSelect
        v-model="store.fields['carBody'].data"
        :options="carBody"
        option-label="title"
        placeholder="Кузов"
      />
    </InputContainer>

    <InputContainer key-name="carColor">
      <groupColorPicker v-model="store.fields['carColor'].data" placeholder="цвет" />
    </InputContainer>

    <InputContainer key-name="mileage">
      <groupInputNumber v-model="store.fields['mileage'].data" placeholder="Пробег, км" />
    </InputContainer>

    <InputContainer key-name="damageCar">
      <groupDropdownSelect
        v-model="store.fields['damageCar'].data"
        :options="damageClassification"
        option-label="title"
        placeholder="Классификация повреждений"
      />
    </InputContainer>

    <InputContainer key-name="typePassportPTS">
      <groupDropdownSelect
        v-model="store.fields['typePassportPTS'].data"
        :options="typePassportPTS"
        option-label="title"
        placeholder="Паспорт (ПТС)"
      />
    </InputContainer>

    <InputContainer key-name="isNotFreeField">
      <checkBox
        v-model="store.fields['isNotFreeField'].data"
        placeholder="Отметка о прекращении регистрации на основании п.60.10 Административного регламента ГИБДД"
      />
    </InputContainer>

    <InputContainer key-name="isMarkTermitionRegistrationCar">
      <checkBox v-model="store.fields['isMarkTermitionRegistrationCar'].data" placeholder="Нет свободных полей" />
    </InputContainer>

    <InputContainer key-name="isMarkMVD">
      <checkBox
        v-model="store.fields['isMarkMVD'].data"
        placeholder="Отметки МВД о прохождении криминалистической экспертизы"
      />
    </InputContainer>

    <InputContainer key-name="typeEngine">
      <groupDropdownSelect
        v-model="store.fields['typeEngine'].data"
        :options="typeEngine"
        option-label="title"
        placeholder="Тип двигателя"
      />
    </InputContainer>

    <InputContainer key-name="volumeEngine">
      <groupInputNumber v-model="store.fields['volumeEngine'].data" placeholder="Объем двигателя" />
    </InputContainer>

    <InputContainer key-name="powerEngine">
      <groupInputNumber v-model="store.fields['powerEngine'].data" placeholder="Мощность двигателя" />
    </InputContainer>

    <InputContainer key-name="damageEngine">
      <groupDropdownSelect
        v-model="store.fields['damageEngine'].data"
        :options="damageClassification"
        option-label="title"
        placeholder="Повреждения двигателя"
      />
    </InputContainer>

    <InputContainer key-name="typeDrive">
      <groupDropdownSelect
        v-model="store.fields['typeDrive'].data"
        :options="typeDrive"
        option-label="title"
        placeholder="Привод"
      />
    </InputContainer>

    <InputContainer key-name="typeTransmission">
      <groupDropdownSelect
        v-model="store.fields['typeTransmission'].data"
        :options="typeTransmission"
        option-label="title"
        placeholder="Коробка передач"
      />
    </InputContainer>

    <InputContainer key-name="damageKPP">
      <groupDropdownSelect
        v-model="store.fields['damageKPP'].data"
        :options="damageClassification"
        option-label="title"
        placeholder="Повреждение КПП"
      />
    </InputContainer>

    <InputContainer key-name="isWithdrawalAccountingGBDD">
      <checkBox
        v-model="store.fields['isWithdrawalAccountingGBDD'].data"
        placeholder="Возможно наличие справки о снятии ТС с учета ГИБДД и передачи ПТС в ГИБДД"
      />
    </InputContainer>

    <InputContainer key-name="isHidingMechanicDamage">
      <checkBox
        v-model="store.fields['isHidingMechanicDamage'].data"
        placeholder="Возможны скрытые механические повреждения"
      />
    </InputContainer>

    <InputContainer key-name="isFullEquipment">
      <checkBox
        v-model="store.fields['isFullEquipment'].data"
        placeholder="ТС (ГОТС) передается согласно штатной комплектации"
      />
    </InputContainer>

    <InputContainer key-name="isGOTSParkingLotSK">
      <checkBox v-model="store.fields['isGOTSParkingLotSK'].data" placeholder="ГОТС на стоянке СК" />
    </InputContainer>

    <InputContainer key-name="comment">
      <groupTextarea v-model="store.fields['comment'].data" placeholder="Комментарий" />
    </InputContainer>
  </div>
</template>
