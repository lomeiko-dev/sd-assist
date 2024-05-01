<script setup lang='ts'>
    interface IProps {
        index: number;
        title: string;
        isActive?: boolean;
        isStartNode?: boolean;
    }

    const props = defineProps<IProps>()
</script>
<template>
    <div class="flex flex-col">
        <div v-if="!isStartNode" :class="props.isActive ? 'bg-primary' : 'bg-primary/20'" class="h-[50px] w-[1px] ml-[10px]"></div>
        <div class="flex flex-row gap-[9px] h-[22px]">
            <div :class="isActive ? 'border-primary text-primary' : 'border-primary/20 text-primary/20'" class="flex items-center w-[22px] h-[22px] justify-center border border-solid rounded-full">
                {{ props.index+1 }}
            </div>
            <p :class="props.isActive ? 'text-primary' : 'text-primary/20'" class=" w-full max-w-[133px] text text-sm font-normal">{{ props.title }}</p>
        </div>
    </div>
</template>
<style lang='scss'>
        
</style>