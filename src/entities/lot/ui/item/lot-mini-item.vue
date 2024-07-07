<script setup lang='ts'>
    interface IProps {
        title: string;
        id_lot: string;
    }

    const props = defineProps<IProps>();

</script>
<template>
    <div class="bg-smoky-white rounded-[10px] p-10 flex mobile:flex-row flex-col items-center justify-between">
        <p class="text-base font-bold text-primary">{{ props.title }}</p>
        <p class="text-base font-bold text-primary">Лот-{{ props.id_lot }}</p>
    </div>
</template>