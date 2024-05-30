<script setup lang="ts">
import { ref, onMounted } from "vue";
import { groupDropdownSelect, groupInputDate, groupInputMask } from "shared/ui/input";
import { objectsAuction, insurances, typeAuction, offerPeriods } from "../../model/selectors/selectors";
import { createLotStore } from "features/create-lot/model/store/create-lot-store";
import { getAllCities } from "../../model/api/get-all-cities";
import { getAllRegions } from "../../model/api/get-all-regions";
import { getCitiesById } from "../../model/api/get-city-by-id";
import InputContainer from "../components/input-container.vue";
import TimeShow from "../components/time-show.vue";
import { watch } from "vue";

const store = createLotStore();

const cities = ref<any[]>([]);
const regions = ref<any[]>([]);

onMounted(async () => {
  cities.value = (await getAllCities()).data;
  regions.value = (await getAllRegions()).data;
});

watch(
  () => store.fields["region"]?.data,
  async () => {
    cities.value = (await getCitiesById(store.fields["region"].data.id)).data;
  }
);

watch(
  () => store.fields["city"]?.data,
  () => {
    store.fields["region"].data = regions.value.find((item) => item.id === store.fields["city"]?.data.regionid);
  }
);
</script>

<template>
  <div class="flex flex-col gap-[13px]">
    <InputContainer key-name="objectAuction" is-validated>
      <groupDropdownSelect
        :is-error="store.checkError('objectAuction')"
        v-model="store.fields['objectAuction'].data"
        placeholder="Объект торгов*"
        :options="objectsAuction"
        option-label="title"
      />
    </InputContainer>

    <InputContainer key-name="insurances" is-validated>
      <groupDropdownSelect
        :is-error="store.checkError('insurances')"
        v-model="store.fields['insurances'].data"
        placeholder="Вид страхования*"
        :options="insurances"
        option-label="title"
      />
    </InputContainer>

    <InputContainer key-name="typeAuction" is-validated>
      <groupDropdownSelect
        :is-error="store.checkError('typeAuction')"
        v-model="store.fields['typeAuction'].data"
        placeholder="Тип аукциона*"
        :options="typeAuction"
        option-label="title"
      />
    </InputContainer>

    <InputContainer key-name="begginAuction" is-validated>
      <groupInputDate
        :min-date="new Date()"
        :is-error="store.checkError('begginAuction')"
        v-model="store.fields['begginAuction'].data"
        placeholder="Начало торгов*"
      />
    </InputContainer>

    <InputContainer key-name="endAuction" is-validated>
      <groupInputDate
        :min-date="store.getProps('begginAuction') ?? new Date()"
        :is-error="store.checkError('endAuction')"
        v-model="store.fields['endAuction'].data"
        placeholder="Окончание торгов*"
      />
    </InputContainer>

    <TimeShow
      v-if="store.getProps('begginAuction') !== null && store.getProps('endAuction') !== null"
      :begin-date="store.getProps('begginAuction')"
      :end-date="store.getProps('endAuction')"
    />

    <InputContainer key-name="offerPeriod" is-validated>
      <groupDropdownSelect
        :is-error="store.checkError('offerPeriod')"
        v-model="store.fields['offerPeriod'].data"
        placeholder="Срок обязывающего предложения*"
        :options="offerPeriods"
        option-label="title"
      />
    </InputContainer>

    <InputContainer key-name="caseNumber" is-validated>
      <groupInputMask
        :is-error="store.checkError('caseNumber')"
        v-model="store.fields['caseNumber'].data"
        placeholder="Номер дела*"
        mask="999-999-99"
      />
    </InputContainer>

    <InputContainer key-name="region" is-validated>
      <groupDropdownSelect
        :options="regions"
        option-label="name"
        :is-error="store.checkError('region')"
        v-model="store.fields['region'].data"
        placeholder="Регион*"
      />
    </InputContainer>

    <InputContainer key-name="city" is-validated>
      <groupDropdownSelect
        :options="cities"
        option-label="name"
        :is-error="store.checkError('city')"
        v-model="store.fields['city'].data"
        placeholder="Город*"
      />
    </InputContainer>
  </div>
</template>
