<script setup lang="ts">
import { ref } from "vue";
import { ILot } from "../../model/types";
import { useWindowSize } from "@vueuse/core";
import ItemData from "./item-data.vue";
import { transferOption } from "../../model/lib/utils/transfer-option";
import { typeEngine, typeTransmission } from "shared/config/selectors";
import { getFileByName } from "shared/services/file-service";
import { onMounted } from "vue";

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();

const isHover = ref(false);
const { width } = useWindowSize();
const emit = defineEmits(["to"]);

const imageData = ref<string>('')

onMounted(async () => {
  const result = await getFileByName(props.data.images[0]);
  imageData.value = result.data[0].data;
})


</script>
<template>
  <div
    @mouseenter="width > 640 ? (isHover = true) : null"
    @mouseleave="width > 640 ? (isHover = false) : null"
    @click="width > 640 ? $emit('to') : null"
    :class="!isHover ? 'hovered-mobile' : 'hovered'"
    class="relative border border-solid overflow-hidden border-gray/30 p-[7px] w-full rounded-[10px] duration-300 cursor-pointer z-20"
  >
    <div class="relative">
      <div :style="`background-image: url(${imageData})`" class="preview rounded-[10px]"></div>
      <div
        class="flex items-center justify-center bg-primary absolute top-[13px] left-0 w-[192px] h-[39px] rounded-r-lg"
      >
        <h4 class="text-2xl font-bold text-white">{{ props.data.default_rate }} {{ props.data.currency }}</h4>
      </div>
    </div>
    <div class="content mx-[20px] mb-[24px]">
      <div class="mt-[28px] pb-[18px] border-b border-solid border-gray-300">
        <h3 class="tablet:text-[22px] text-lg font-medium leading-[24.2px]">{{ props.data.title }}</h3>
      </div>
      <div class="flex flex-col gap-[22px] mt-[19px]">
        <ItemData name="Лот">
          <div class="text-sm flex" :class="props.data.isOpen ? 'text-green' : 'text-red-600'">
            <p class="font-bold">{{ props.data.id_lot }}</p>
            <p>{{ props.data.isOpen ? "(Открытый)" : "(Закрытый)" }}</p>
          </div>
        </ItemData>
        <ItemData name="Город" :data="props.data.city.name" />
        <ItemData name="Пробег" :data="`${String(props.data.mileage)} км`" />
        <ItemData name="КПП" :data="transferOption(typeTransmission, props.data.type_transmission)" />
        <ItemData name="Двигатель" :data="transferOption(typeEngine ,props.data.type_engine)" />
      </div>
      <button
        @click="$emit('to')"
        :class="isHover ? 'opacity-100' : 'opacity-0'"
        class="absolute -bottom-[60px] left-0 mt-[31px] -z-50 bg-primary w-full h-[38px] text-base font-normal duration-300 text-white rounded-md hover:bg-primary/70"
      >
        Участвовать в торгах
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hovered:hover {
  transform: translate(0, 45px) scaleX(1.05) scaleY(1.2);
  position: relative;
  background-color: white;
  border: 1px solid transparent;
  box-shadow: 0px 14px 24px 0px #00000040;
  z-index: 30;

  .content {
    transition: 0.3s;
    transform: translate(0, -25px) scaleY(.9);
  }
}

.hovered-mobile:hover {
  box-shadow: 0px 14px 24px 0px #00000040;
}

.preview {
  height: 203px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sell {
  border-top: 100px solid #163c66;
  border-right: 100px solid transparent;
}
</style>
