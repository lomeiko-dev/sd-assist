<script setup lang="ts">
// import Intro from "./components/intro.vue";
// import CustomerBase from "./components/customer-base.vue";
// import { layoutApp } from "widgets/layouts/layout-app";
// import { lotListPreview } from "widgets/lot-list";
// import { container } from "shared/ui/container";

// import { stepViewer } from "shared/ui/step-viewer";
import {
  groupDropdownSelect,
  groupInputText,
  groupInputDate,
  groupInputMask,
  groupColorPicker,
  groupTextarea,
  imageUploader,
  pdfUploader,
} from "shared/ui/input";
import { ImagePreview } from "features/paint";
import { ref } from "vue";

const images = ref<string[]>([]);

</script>
<template>
  <div>
    <!-- <layout-app>
      <Intro class="tablet:mt-[73px] mt-[41px]" />
      <container is-mobile-padding>
        <lotListPreview class="tablet:my-[100px] my-[41px]" title="Недавно размещенные лоты" to-all-offers="/" />
      </container>
      <CustomerBase />
    </layout-app> -->

    <div class="test1 flex flex-col gap-2">
      <stepViewer :passed-number="2" :selected-index="3" :steps="['шаг 1', 'шаг 2', 'шаг 3', 'шаг 3']"/>
      <groupDropdownSelect :options="['Текст1', 'Текст2', 'Текст3', 'Текст4', 'Текст5', 'Текст6']"  placeholder="Не выбрано" title="Объект торгов*"/>
      <groupInputText title="Имя какое то*"/>
      <groupInputDate title="Имя какое то*"/>
      <groupInputMask placeholder="sdgdsg" title="Код" mask="9 9 9 9 9 9 9 9 9 9"/>
      <groupColorPicker error-placeholder="ИДИ НАХУЙ" placeholder="sdgsdg"/>
      <groupTextarea title="dsgsdg"/>
      <pdfUploader/>
      <imageUploader error-message="Ошибка такая то такая то" @get-image="(img) => images.push(img)">
        <template #default>
          <ImagePreview v-for="(img, index) in images" @on-change="(image) => images[index] = image.src" @on-delete="images.splice(index, 1);" :width="230" :height="230" :image="{src: img, rotateIndex: 0}"/>
        </template>
      </imageUploader>
    </div>
  </div>
</template>

<style lang="scss">
.test1 {
  background-color: #f2f8ff;
  height: 3000px;
}
</style>
