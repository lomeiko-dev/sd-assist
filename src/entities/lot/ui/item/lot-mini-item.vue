<script setup lang='ts'>
    interface IProps {
        title: string;
        id_lot: string;
        date: string;
    }

    const props = defineProps<IProps>();

</script>
<template>
    <div class="bg-smoky-white rounded-[10px] p-10 flex flex-row items-center justify-between">
        <p class="text-base font-bold text-primary">{{ props.title }}</p>
        <p class="text-base font-normal text-black">{{ props.date }}</p>
        <p class="text-base font-bold text-primary">Лот-{{ props.id_lot }}</p>
    </div>
</template>