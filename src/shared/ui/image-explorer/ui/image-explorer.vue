<script setup lang="ts">
import { watchEffect } from "vue";
import { ref } from "vue";
import { image as Image } from "shared/ui/image";
import vueInlineSvg from "vue-inline-svg";
import fullScreenIcon from "shared/assets/icons/full-screen.svg";
import Dialog from "primevue/dialog";

interface IProps {
  images: string[];
  limit?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  limit: 8,
});

const activeImage = ref<string>("");
const internalLimit = ref<number>(0);

const isMask = ref<boolean>(false);
const isHovered = ref<boolean>(false);
const isShowModal = ref<boolean>(false);

watchEffect(() => {
  activeImage.value = props.images[0];
  internalLimit.value = props.limit;

  if (props.images.length > props.limit) {
    isMask.value = true;
  }
});

const resetLimit = () => {
  internalLimit.value = props.images.length;
  isMask.value = false;
};

</script>
<template>
  <div class="w-full max-w-[538px]">
    <div @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="relative">
      <button
        @click="isShowModal = true"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
        class="absolute top-5 right-5 z-20 bg-black/30 p-2 rounded-[10px] duration-300"
      >
        <vueInlineSvg :src="fullScreenIcon" />
      </button>
      <Image :width="538" :height="321" :image="{ src: activeImage, rotateIndex: 0 }" />
    </div>
    <div class="flex flex-wrap gap-[3px] w-full max-w-[548px] mt-1">
      <div class="w-full h-full flex justify-center" v-if="props.images.length === 1">
        Фотографий больше нет :(
      </div>
      <div v-else class="relative w-[132px]" v-for="(img, index) in props.images.filter((_, index) => index < internalLimit)">
        <Image
          class="cursor-pointer"
          @mouseenter="activeImage = img"
          :width="132"
          :height="74"
          :image="{ src: img, rotateIndex: 0 }"
        />
        <div
          @mouseenter="activeImage = img"
          @click="resetLimit"
          v-if="isMask && props.limit - 1 === index"
          class="absolute flex items-center justify-center top-0 left-0 w-full h-full rounded-[10px] z-20 bg-black/60 cursor-pointer"
        >
          <p class="text-white text-sm font-normal">еще {{ props.images.length - internalLimit }} фото</p>
        </div>
      </div>
    </div>
    <Dialog class="w-[98%] h-[100%]" v-model:visible="isShowModal" modal>
      <template #default>
        <div class="w-full h-screen">
          <Image class="test123" :width="100" :height="100" size-sign="%" :image="{ src: activeImage, rotateIndex: 0 }" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
<style lang="scss">
  .test123{
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }
</style>
