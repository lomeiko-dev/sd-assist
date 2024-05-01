<script setup lang="ts">
import Intro from "./components/intro.vue";
import CustomerBase from "./components/customer-base.vue";
import { layoutApp } from "widgets/layouts/layout-app";
import { lotListPreview } from "widgets/lot-list";
import { container } from "shared/ui/container";

import { stepViewer } from "shared/ui/step-viewer";
import { groupDropdownSelect, groupInputText, groupInputDate, groupInputMask, groupColorPicker, groupTextarea, imageUploader, pdfUploader } from "shared/ui/input";
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
      <groupColorPicker title="sdgsdg"/>
      <groupTextarea title="dsgsdg"/>
      <pdfUploader/>
      <imageUploader/>
    </div>
  </div>
</template>

<style lang="scss">
.test1{
  background-color: #F2F8FF;
  height: 3000px;
  padding: 10px;
}
</style>
