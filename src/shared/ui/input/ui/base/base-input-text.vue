<script setup lang="ts">
import InputText from "primevue/inputtext";
import { IInputProps } from "../../model/types";

const props = defineProps<IInputProps>();
const model = defineModel<string>();

</script>
<template>
    <div class="input-text w-full">
        <InputText class=" w-full" :placeholder="props.placeholder" v-model="model" />
    </div>
</template>
<style lang="scss">
.input-text{
    .p-inputtext{
        padding: 15px 12px !important;
        font-size: 14px;
        font-weight: 400;
    }
}
</style>
