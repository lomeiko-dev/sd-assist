<script setup lang="ts">
import { IInputProps } from "../../model/types";
import GroupContainer from "../components/group-container.vue";
import InputDate from "../components/input-date.vue";

interface IProps {
  minDate?: Date;
  maxDate?: Date;
}

const props = defineProps<IInputProps & IProps>();
const model = defineModel<any>();

</script>
<template>
  <div class="group-input-date">
    <GroupContainer :is-error="props.isError" :placeholder="props.placeholder">
      <InputDate
        :id="props.id"
        :is-error="props.isError"
        :placeholder="props.placeholder"
        v-model="model"
        :min-date="props.minDate"
        :max-date="props.maxDate"
      />
    </GroupContainer>
  </div>
</template>
