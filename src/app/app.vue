<script setup lang="ts">
import {appProvide} from "./providers/app-provide";
import "./style/style.css";
import "./style/vueprime.scss";

</script>
<template>
  <appProvide>
    <RouterView />
  </appProvide>
</template>
