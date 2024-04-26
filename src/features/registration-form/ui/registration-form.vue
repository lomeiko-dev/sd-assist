<script setup lang="ts">
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Checkbox from "primevue/checkbox";

import { selection } from "shared/ui/selection";
import { switcher } from "shared/ui/switcher";
import { registrationStore } from "../model/store/registration-store";

import { registration } from "../model/api/registration";
import Placeholder from "./components/placeholder.vue";

const store = registrationStore();

const registrationHandle = async () => {
  const isValid = store.validate();

  if (isValid)
    await registration(store.getBodyData(), {
      setErrorEmail: (value) => (store.errors.errorEmail = value),
      setErrorPhone: (value) => (store.errors.errorPhone = value),
      setErrorINN: (value) => (store.errors.errorINN = value),
      clearField: store.clearAllValue,
    });
};
</script>
<template>
  <div>
    <selection
      @select="(index) => (store.typeAccount = index)"
      :selections="[
        { title: 'Физическое лицо', index: 1 },
        { title: 'Юридическое лицо', index: 2 },
      ]"
    />

    <div class="mt-[34px] flex flex-col gap-4">
      <FloatLabel
        v-if="store.typeAccount === 1"
        class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal"
      >
        <InputText
          placeholder="_"
          class="w-full h-full rounded-[10px] px-[20px]"
          id="username"
          type="text"
          v-model="store.valueName"
        />
        <Placeholder for="username" title="Введите ваше ФИО*" :error-title="store.errors.errorName" />
      </FloatLabel>
      <div v-else>
        <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
          <InputMask
            placeholder="_"
            class="w-full h-full rounded-[10px] px-[20px]"
            id="inn"
            v-model="store.valueINN"
            mask="9 9 9 9 9 9 9 9 9 9"
          />
          <Placeholder for="inn" title="ИНН" :error-title="store.errors.errorINN" />
        </FloatLabel>
        <p class="mt-[13px] text-xs font-normal text-gray">Данные организации будут заполнены автоматически</p>
        <a class="mt-[17px] text-xs font-normal text-primary border-b border-solid border-primary" href="#"
          >Ввести данные вручную?</a
        >
      </div>

      <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
        <InputMask
          placeholder="_"
          class="w-full h-full rounded-[10px] px-[20px]"
          id="phone"
          v-model="store.valuePhone"
          mask="+7 (999) 999-99-99"
        />
        <Placeholder for="phone" title="Введите ваш номер телефона*" :error-title="store.errors.errorPhone" />
      </FloatLabel>

      <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
        <InputText
          placeholder="_"
          class="w-full h-full rounded-[10px] px-[20px]"
          id="password"
          v-model="store.valuePassword"
        />
        <Placeholder for="password" title="Придумайте пароль*" :error-title="store.errors.errorPassword" />
      </FloatLabel>

      <FloatLabel class="border border-solid border-primary/20 rounded-[10px] h-[52px] text-sm font-normal">
        <InputText
          placeholder="_"
          class="w-full h-full rounded-[10px] px-[20px]"
          id="email"
          v-model="store.valueEmail"
        />
        <Placeholder for="email" title="Введите ваш E-mail*" :error-title="store.errors.errorEmail" />
      </FloatLabel>
    </div>
    <h3 class="text-sm font-bold mt-[32px]">Моя роль в аукционе:</h3>
    <switcher
      class="mt-[21px]"
      @switch="(value) => (store.roleAuctioneer = value)"
      :switch-primary="{ title: 'Продавец имущества', index: 1 }"
      :swtich-secondary="{ title: 'Покупатель имущества', index: 2 }"
    />
    <div class="flex align-items-center mt-[21px]">
      <Checkbox
        class="border border-solid border-primary/20 rounded bg-transparent w-[20px] h-[20px]"
        v-model="store.isDataProcessing"
        inputId="check"
        value="Я согласен на обработку персональных данных"
      />
      <Placeholder
        for="check"
        class="ml-2 text-sm font-normal text-gray"
        title="Я согласен на обработку персональных данных*"
        :error-title="store.errors.errorDataProcessing"
      />
    </div>
    <button
      @click="registrationHandle"
      class="mt-[71px] w-full h-[66px] bg-primary text-white duration-300 rounded-[10px] hover:bg-primary/70"
    >
      Зарегистрироваться
    </button>
  </div>
</template>
