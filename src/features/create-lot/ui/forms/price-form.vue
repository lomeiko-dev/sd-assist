<script setup lang="ts">
import { currancyManager } from "shared/ui/currency-manager";
import { IFieldsManager, inputContainer } from "shared/ui/input";

interface IProps {
  managment: IFieldsManager;
}

const props = defineProps<IProps>();
</script>
<template>
  <div>
    <h3 class="text-xl text-gray font-semibold">Почти всё</h3>
    <h4 class="text-base text-gray font-normal">Укажите стартовую цену вашего лота</h4>
    <inputContainer class="mt-5" :init="() => props.managment.addLazyProps('default_rate', false, 5)">
      <inputContainer :init="() => props.managment.addLazyProps('currency', false, 5)">
        <currancyManager
          v-model="props.managment.object['default_rate'].data"
          @select-currency="(currency) => (props.managment.object['currency'].data = currency)"
        />
      </inputContainer>
    </inputContainer>
  </div>
</template>
