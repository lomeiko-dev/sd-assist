<script setup lang="ts">
import { ref } from "vue";
import { ISelection } from "../model/types";
import { onMounted } from "vue";

interface IProps {
  selections: ISelection[];
}

const props = defineProps<IProps>();
const emit = defineEmits(["select"]);

const selectedIndex = ref(0);
const buttonRef = ref<HTMLButtonElement[]>();
const lineOffset = ref(0);
const lineWidth = ref(0);

const selectHandle = (indexElement: number, value: number) => {
  emit("select", value);
  selectedIndex.value = indexElement;

  lineOffset.value = 0;
  if (buttonRef.value) {
    const offset = buttonRef.value.slice(0, indexElement).map((item) => item.offsetWidth);
    const buttonWidth = buttonRef.value[indexElement].offsetWidth;

    lineWidth.value = buttonWidth;
    offset.forEach((item) => (lineOffset.value += item + 16));
  }
};

onMounted(() => {
   selectHandle(0, props.selections[0].index)
})

</script>
<template>
  <div>
    <div class="flex flex-col w-fit">
      <div class="flex flex-row gap-4 tablet:text-[20px] text-base tablet:font-bold font-semibold">
        <button
          ref="buttonRef"
          v-for="(item, index) in props.selections"
          class="duration-300 text-gray hover:text-primary/70"
          :class="selectedIndex === index ? 'text-primary' : ''"
          @click="selectHandle(index, item.index)"
        >
          {{ item.title }}
        </button>
      </div>
      <div class="relative w-full h-[1px] bg-gray mt-[20px]">
        <span
          :style="`width: ${lineWidth}px; left: ${lineOffset}px`"
          class="absolute top-0 h-[3px] bg-primary rounded-lg duration-200 -mt-[1px]"
        ></span>
      </div>
    </div>
  </div>
</template>
