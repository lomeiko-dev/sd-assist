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

interface IProps {
  data: ILot;
}

const props = defineProps<IProps>();
const selectSection = ref<enumSwitcherDetails>(enumSwitcherDetails.DESCRIPTION);
</script>
<template>
  <div>
    <Header :select-section="selectSection" @set-select-section="(select) => (selectSection = select)" />
    <div class="mt-[51px]">
      <Description v-if="selectSection === enumSwitcherDetails.DESCRIPTION" :data="props.data" />
      <technicalCondition v-else-if="selectSection === enumSwitcherDetails.TECHNICAL_CONDITION" :data="props.data" />
      <Other v-else-if="selectSection === enumSwitcherDetails.OTHER" :data="props.data" />
      <Documents v-else-if="selectSection === enumSwitcherDetails.DOCUMENTS" :files="props.data.files" />
      <Comment v-else-if="selectSection === enumSwitcherDetails.COMMENT" :comment="props.data.comment" />
    </div>
  </div>
</template>
