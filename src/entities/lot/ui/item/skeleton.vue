<script setup lang="ts"></script>
<template>
  <span class="loader"></span>
</template>
<style scoped lang="scss">
.loader {
  box-shadow: 0px 14px 24px 0px #7d7d7d40;
  width: 100%;
  height: 200px;
  display: block;
  margin: auto;
  position: relative;
  background: #fff;
  box-sizing: border-box;
}
.loader::after {
  content: "";
  width: calc(100% - 30px);
  height: calc(100% - 15px);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
    linear-gradient(#ddd 200px, transparent 0), linear-gradient(#ddd 32px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0), linear-gradient(#ddd 50px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 375px, 180px 150px, 70% 32px, 70% 16px, 70% 16px;
  background-position: -185px 0, 0 0, 200px 0, 200px 75px, 200px 100px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  to {
    background-position: 100% 0, 0 0, 200px 0, 200px 75px, 200px 100px;
  }
}
</style>
