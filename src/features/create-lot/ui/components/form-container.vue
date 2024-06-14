<script setup lang="ts">
import { onMounted } from 'vue';

    interface IProps {
        padding?: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
        padding: '40px'
    });

    onMounted(() => {
        console.log(props.padding);
    })

</script>

<template>
    <div :style="`padding: ${props.padding}`" class="bg-smoky-white rounded-[10px]">
        <slot></slot>
    </div>
</template>