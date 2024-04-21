<script setup lang='ts'>
import Footer from './components/footer.vue';
import Header from './components/header.vue';
    
</script>
<template>
    <div class="h-[100vh]">
        <Header/>
        <slot></slot>
        <Footer/>
    </div>
</template>
<style lang='scss'>
        
</style>