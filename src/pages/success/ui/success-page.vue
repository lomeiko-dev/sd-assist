<script setup lang="ts">
import peopleAndData from "shared/assets/img/illustrations/people-and-data.png";
import { useRouter } from "vue-router";

const route = useRouter();

const clickHandle = () => {
  route.push({ name: "home" });
};
</script>

<template>
  <div class="w-full h-full mt-10 flex flex-col items-center justify-center">
    <img width="500" :src="peopleAndData" alt="people and data. Success!" />
    <h3 class="text-2xl mt-5">Успешно!</h3>
    <button
      @click="clickHandle"
      class="bg-primary px-5 py-3 rounded-md text-white duration-300 mt-5 hover:bg-primary/70"
    >
      Вернуться на главную
    </button>
  </div>
</template>
<style lang="scss"></style>
