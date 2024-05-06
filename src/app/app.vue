<script setup lang="ts">
import { authStore } from "entities/auth";
import "./style/style.css";
import "./style/vueprime.scss";
import { onMounted } from "vue";

const store = authStore();
onMounted(() => {
  store.loadAuth();
});

</script>
<template>
  <div>
    <RouterView />
  </div>
</template>
