<script setup lang="ts"></script>
<template>
  <span class="loader"></span>
</template>
<style scoped lang="scss">
.loader {
  filter: blur(1.5px);
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0), linear-gradient(#fff 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;

  transition: .5s;
}

.loader:hover{
  filter: blur(0);
  transform: scale(1.09);
}
</style>
