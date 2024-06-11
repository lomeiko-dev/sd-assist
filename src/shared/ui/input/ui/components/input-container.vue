<script setup lang='ts'>
import { watchEffect } from 'vue';

    interface IProps{
        init: () => void;
    }

    const props = defineProps<IProps>();

    watchEffect(() => {
        props.init();
    })

</script>
<template>
    <slot>

    </slot>
</template>