<script setup lang='ts'>
    interface IProps {
        title: string
        link: string
        placeholder: string
    }

    const props = defineProps<IProps>()

</script>
<template>
    <div class="item">
        <p>{{ props.title }}:</p>
        <a :href="props.link">{{ props.placeholder }}</a>
    </div>
</template>
<style scoped lang='scss'>
    .item {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;

        p{
            font-size: 16px;
            color: white;
        }
        a{
            color: #f5f5dc;
            font-size: 14px;
            text-decoration: none;
        }
    }
</style>