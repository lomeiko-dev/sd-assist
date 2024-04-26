<script setup lang='ts'>
import { watch } from 'vue';
import { ref } from 'vue';

    interface IProps{
        title: string;
        errorTitle?: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
        errorTitle: ""
    })

    const isError = ref(false)

    watch(() => props.errorTitle, () => {
        isError.value = props.errorTitle !== ""
    })

</script>
<template>
    <label :class="isError ? 'text-red-600' : ''" >{{ isError ? props.errorTitle : props.title }}</label>
</template>