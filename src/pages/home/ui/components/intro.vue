<script setup lang="ts">
import banner_intro from "shared/assets/img/banners/banner-intro.webp";
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <h1
      class="tablet:text-[62px] tablet:leading-[62px] text-[28px] leading-[30.8px] text-center font-bold w-full tablet:max-w-[680px] max-w-[313px]"
    >
      Автомобильный аукцион SD-assist.ru
    </h1>
    <div :style="`background-image: url(${banner_intro})`" class="banner tablet:h-[493px] h-[213px] tablet:mt-[75px] mt-[42px]"></div>
  </div>
</template>
<style scoped lang="scss">
.banner {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
}
</style>
