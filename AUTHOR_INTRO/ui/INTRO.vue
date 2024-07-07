<script setup lang="ts">
import Bear from "./components/bear.vue";
import DecoLine from "./components/other/deco-line.vue";
import Links from "./components/links.vue";
import Sky from './components/sky.vue'
import Welcome from './components/welcome.vue'
import config from '../config.json'

const emits = defineEmits(['closed'])

</script>
<template>
  <div class="overlay">
    <Sky/>
    <div class="content">
      <Bear class="bear" />
      <Welcome class="welcome" @closed="$emit('closed')" :name-project="config.nameProject"/>
      <div class="links">
        <DecoLine />
        <Links />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(63, 178, 210, 0.5);
  backdrop-filter: blur(7px);
  z-index: 9999;
}

.welcome{
  height: 100vh;
  margin-top: -20px;
}

.bear {
  position: absolute;
  left: 50px;
  bottom: 0;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
