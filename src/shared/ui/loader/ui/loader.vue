<script setup lang="ts"></script>
<template>
  <div class="fixed top-0 left-0 w-full h-[100vh] bg-primary/70 bluring z-50 flex items-center justify-center">
    <span class="loader"></span>
  </div>
</template>
<style scoped lang="scss">
.bluring {
  backdrop-filter: blur(16px);
}

.loader {
  width: 64px;
  height: 64px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
