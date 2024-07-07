<script setup lang="ts">
import Cloud from "./other/cloud.vue";
</script>
<template>
  <div class="">
    <Cloud class="cloud cloud_item1" />
    <Cloud class="cloud cloud_item2" />
    <Cloud class="cloud cloud_item3" />
    <Cloud class="cloud cloud_item4" />
  </div>
</template>
<style scoped lang="scss">
.scoped {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.cloud {
  position: absolute;
}

.cloud_item1 {
  animation-duration: 1s;
  animation-name: cloud_item1in;
  top: 50px;
  left: 50px;
}
.cloud_item2 {
  animation-duration: 1.5s;
  animation-name: cloud_item2in;
  top: 27%;
  left: 20%;
}
.cloud_item3 {
  animation-duration: 1.5s;
  animation-name: cloud_item3in;
  top: 10%;
  right: 20%;
}
.cloud_item4 {
  animation-duration: 1s;
  animation-name: cloud_item4in;
  top: 30%;
  right: 10%;
}

@keyframes cloud_item1in {
  from {
    top: -100px;
    left: -100px;
  }

  to {
    top: 50px;
    left: 50px;
  }
}

@keyframes cloud_item2in {
  from {
    top: 100px;
    left: -100px;
  }

  to {
    top: 27%;
    left: 20%;
  }
}

@keyframes cloud_item3in {
  from {
    top: 60px;
    right: -500px;
  }

  to {
    top: 10%;
    right: 20%;
  }
}

@keyframes cloud_item4in {
  from {
    top: -100px;
    right: 0;
  }

  to {
    top: 30%;
    right: 10%;
  }
}

@media (max-width: 600px) {
  .cloud_item1, .cloud_item2, .cloud_item3, .cloud_item4{
    opacity: 0;
  }
}

</style>
