<script setup lang='ts'>
    const emits = defineEmits(['click'])
</script>
<template>
    <div @click="$emit('click')" class="flex flex-col tablet:gap-[8.4px] gap-[6px] tablet:w-[35px] w-[25px] duration-300 cursor-pointer hover:gap-3">
        <span class="w-full h-[2px] rounded-sm bg-primary"></span>
        <span class="w-full h-[2px] rounded-sm bg-primary"></span>
        <span class="w-full h-[2px] rounded-sm bg-primary"></span>
    </div>
</template>
<style lang='scss'>
        
</style>