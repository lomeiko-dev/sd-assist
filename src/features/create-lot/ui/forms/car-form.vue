<script setup lang="ts">
import { createLotStore } from "features/create-lot/model/store/create-lot-store";
import { typeCar } from "../../model/selectors/selectors";
import { groupInputMask, groupDropdownSelect, groupInputText, groupInputNumber } from "shared/ui/input";
import InputContainer from "../components/input-container.vue";

const store = createLotStore();

</script>

<template>
  <div class="flex flex-col gap-[13px]">
    <InputContainer key-name="VINNumber" is-validated>
      <groupInputMask
        :is-error="store.checkError('VINNumber')"
        v-model="store.fields['VINNumber'].data"
        placeholder="VIN номер*"
        mask="99999999999999999"
      />
    </InputContainer>
    <InputContainer key-name="FrameNumber">
      <groupInputMask v-model="store.fields['FrameNumber'].data" placeholder="Frame номер" mask="99999999999999999" />
    </InputContainer>
    <InputContainer key-name="typeCar" is-validated>
      <groupDropdownSelect
        :is-error="store.checkError('typeCar')"
        v-model="store.fields['typeCar'].data"
        placeholder="Тип авто*"
        :options="typeCar"
        option-label="title"
      />
    </InputContainer>

    <div class="flex flex-col gap-[13px]" v-if="store.getProps('typeCar') !== null">
      <InputContainer key-name="brand" is-validated>
        <groupInputText
          :is-error="store.checkError('brand')"
          v-model="store.fields['brand'].data"
          placeholder="Марка*"
        />
      </InputContainer>
      <InputContainer key-name="model" is-validated>
        <groupInputText
          :is-error="store.checkError('model')"
          v-model="store.fields['model'].data"
          placeholder="Модель*"
        />
      </InputContainer>
      <InputContainer key-name="generationCar">
        <groupInputText v-model="store.fields['generationCar'].data" placeholder="Поколение" />
      </InputContainer>
    </div>

    <InputContainer key-name="yearRelease" is-validated>
      <groupInputNumber
        :is-error="store.checkError('yearRelease')"
        v-model="store.
        fields['yearRelease'].data"
        placeholder="Год выпуска*"
      />
    </InputContainer>
  </div>
</template>
