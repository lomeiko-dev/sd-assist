<script setup lang="ts">
import LinkItem from "./other/link-item.vue";
import config from "../../config.json";
</script>
<template>
  <div class="scoped">
    <LinkItem v-for="item in config.links" :title="item.title" :placeholder="item.placeholder" :link="item.link" />
  </div>
</template>
<style scoped lang="scss">
.scoped {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
</style>
