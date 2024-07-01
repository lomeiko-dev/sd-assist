<script setup lang="ts">
import { ILot } from "entities/lot/model";
import Description from "./components/description.vue";
import technicalCondition from "./components/technical-condition.vue";
import Other from "./components/other.vue";
import Documents from "./components/documents.vue";
import Comment from "./components/comment.vue";
import { ref } from "vue";
import { enumSwitcherDetails } from "../../model/types";
import Header from "./components/other/header.vue";
import { useWindowSize } from "@vueuse/core";

const MINI_TABLET = 640;

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
const selectSection = ref<enumSwitcherDetails>(enumSwitcherDetails.DESCRIPTION);
const { width } = useWindowSize();
</script>
<template>
  <div class="flex tablet:flex-col flex-row tablet:gap-0 gap-7">
    <Header
      v-if="width > MINI_TABLET"
      :select-section="selectSection"
      @set-select-section="(select) => (selectSection = select)"
    />
    <div class="tablet:mt-[51px] mt-0">
      <Description v-if="selectSection === enumSwitcherDetails.DESCRIPTION || width < MINI_TABLET" :data="props.data" />
      <technicalCondition
        v-if="selectSection === enumSwitcherDetails.TECHNICAL_CONDITION || width < MINI_TABLET"
        :data="props.data"
      />
      <Other v-if="selectSection === enumSwitcherDetails.OTHER || width < MINI_TABLET" :data="props.data" />
      <Documents
        :class="width < MINI_TABLET ? 'mt-10' : ''"
        v-if="selectSection === enumSwitcherDetails.DOCUMENTS || width < MINI_TABLET"
        :files="props.data.files"
      />
      <Comment
        :class="width < MINI_TABLET ? 'mt-10' : ''"
        v-if="selectSection === enumSwitcherDetails.COMMENT || width < MINI_TABLET"
        :comment="props.data.comment"
      />
    </div>
  </div>
</template>
