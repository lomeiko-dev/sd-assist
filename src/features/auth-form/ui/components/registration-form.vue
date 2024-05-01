<script setup lang="ts">
import { selection } from "shared/ui/selection";
import { switcher } from "shared/ui/switcher";
import { registrationStore } from "../../model/store/registration-store"

import { registration } from "../../model/api/registration"
import { floatInputMask, floatInputText, checkBox, inputPassword } from "shared/ui/input";

const emit = defineEmits(['onRegister'])

const store = registrationStore();

const registrationHandle = async () => {
  const isValid = store.validate();

  if (isValid){
    const result = await registration(store.getBodyData(), {
      setErrorEmail: (value) => (store.errors.errorEmail = value),
      setErrorPhone: (value) => (store.errors.errorPhone = value),
      setErrorINN: (value) => (store.errors.errorINN = value),
      clearField: store.clearAllValue,
    });

    if(result !== null){
      emit('onRegister');
    }
  }
};
</script>
<template>
  <div class="flex flex-col">
    <selection
      class="mx-auto"
      @select="(index) => (store.typeAccount = index)"
      :selections="[
        { title: 'Физическое лицо', index: 1 },
        { title: 'Юридическое лицо', index: 2 },
      ]"
    />

    <div class="mt-[34px] flex flex-col gap-4">
      <floatInputText
        v-model="store.valueName"
        v-if="store.typeAccount === 1"
        id="username"
        placeholder="Введите ваше ФИО*"
        :error-placeholder="store.errors.errorName"
      />

      <div v-else>
        <floatInputMask
          v-model="store.valueINN"
          id="inn"
          mask="9 9 9 9 9 9 9 9 9 9"
          placeholder="ИНН"
          :error-placeholder="store.errors.errorINN"
        />
        <p class="mt-[13px] text-xs font-normal text-gray">Данные организации будут заполнены автоматически</p>
        <a class="mt-[17px] text-xs font-normal text-primary border-b border-solid border-primary" href="#"
          >Ввести данные вручную?</a
        >
      </div>

      <floatInputMask
        v-model="store.valuePhone"
        id="phone"
        mask="+7 (999) 999-99-99"
        placeholder="Введите ваш номер телефона*"
        :error-placeholder="store.errors.errorPhone"
      />
      <inputPassword
        placeholder="Придумайте пароль*"
        v-model="store.valuePassword"
        id="password"
        :error-placeholder="store.errors.errorPassword"
      />
      <floatInputText
        v-model="store.valueEmail"
        id="email"
        placeholder="Введите ваш E-mail*"
        :error-placeholder="store.errors.errorEmail"
      />
    </div>
    <h3 class="text-sm font-bold mt-[32px]">Моя роль в аукционе:</h3>
    <switcher
      class="mt-[21px]"
      @switch="(value) => (store.roleAuctioneer = value)"
      :switch-primary="{ title: 'Продавец имущества', index: 1 }"
      :swtich-secondary="{ title: 'Покупатель имущества', index: 2 }"
    />
    <checkBox
      v-model="store.isDataProcessing"
      id="check"
      placeholder="Я согласен на обработку персональных данных*"
      :error-placeholder="store.errors.errorDataProcessing"
    />
    <button
      @click="registrationHandle"
      class="mt-[71px] w-full h-[66px] bg-primary text-white duration-300 rounded-[10px] hover:bg-primary/70"
    >
      Зарегистрироваться
    </button>
  </div>
</template>
