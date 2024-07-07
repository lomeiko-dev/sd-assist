<script setup lang='ts'>
    
</script>
<template>
    <div class="scoped">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
    </div>
</template>
<style scoped lang='scss'>
    .scoped{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .line{
        width: 250px;
        height: 2px;
        background-color: white;
    }

    .dot{
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: white;
    }
</style>