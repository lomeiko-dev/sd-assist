<script setup lang="ts">
import { ref } from "vue";
import { ISwitcher } from "../model/types";
interface IProps {
  switchPrimary: ISwitcher;
  swtichSecondary: ISwitcher;
}

const props = defineProps<IProps>();
const emit = defineEmits(["switch"]);

const selectedIndex = ref(props.switchPrimary.index);

const toggleSelected = (value: number) => {
  emit("switch", value);
  selectedIndex.value = value;
};
</script>
<template>
  <div class="flex mobile:flex-row flex-col">
    <button
      :class="
        selectedIndex === props.switchPrimary.index ? 'bg-green-light text-white' : 'text-gray hover:bg-green-light/20'
      "
      class="left-button"
      @click="toggleSelected(props.switchPrimary.index)"
    >
      {{ props.switchPrimary.title }}
    </button>
    <button
      :class="
        selectedIndex === props.swtichSecondary.index
          ? 'bg-green-light text-white'
          : 'text-gray hover:bg-green-light/20'
      "
      class="right-button -ml-[1px]"
      @click="toggleSelected(props.swtichSecondary.index)"
    >
      {{ props.swtichSecondary.title }}
    </button>
  </div>
</template>
<style lang="scss">
.left-button,
.right-button {
  border: 1px solid #8c9091;
  padding: 17px 18.8px;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  transition: 0.3s;
}
.left-button {
  border-radius: 10px 0 0 10px;
}
.right-button {
  border-radius: 0 10px 10px 0;
}

.p-dialog .p-dialog-header {
  padding: 0.5rem;
}

@media (max-width: 640px) {
  .left-button,
  .right-button {
    border: 1px solid #8c9091;
    padding: 10px 5.8px;
    font-size: 12px;
    line-height: 16.8px;
    font-weight: 400;
    transition: 0.3s;
  }
}

@media (max-width: 430px) {
  .left-button {
    border-radius: 10px 10px 0 0;
  }
  .right-button {
    border-radius: 0 0 10px 10px;
  }
}
</style>
