<script setup lang='ts'>
    import inlineSvg from 'vue-inline-svg'
    import scissors from 'shared/assets/icons/scissors.svg'

    const emits = defineEmits(['crop', 'undo']);
</script>
<template>
    <div class="flex flex-row gap-[5px]">
        <button @click="$emit('crop')" class="bg-green rounded-md w-[48px] h-[48px] flex items-center justify-center duration-300 hover:bg-green/80">
            <inline-svg :src="scissors"/>
        </button>
        <button @click="$emit('undo')" class="bg-gray text-white rounded-md w-[124px] h-[48px] flex items-center justify-center duration-300 hover:bg-gray/80">
            Отменить
        </button>
    </div>
</template>