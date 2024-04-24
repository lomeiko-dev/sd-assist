<script setup lang="ts">
import notDataImg from "shared/assets/img/illustrations/airy-gray-box.png";
</script>
<template>
  <div class="flex flex-col items-center">
    <img width="148px" :src="notDataImg" alt="not data" />
    <p class="text-lg text-gray-400 mt-5">Данных нет</p>
  </div>
</template>
