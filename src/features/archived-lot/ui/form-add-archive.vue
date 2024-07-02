<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { lotArchivedStore } from "../model";

interface IProps {
  lotId: number;
}

const props = defineProps<IProps>();

const store = lotArchivedStore();
const isArchived = ref<boolean>(false);

const checkArchive = () => {
  const IDs = store.getIDs();
  if (IDs !== null) {
    isArchived.value = IDs.find((id) => id === props.lotId) !== undefined;
  }
}

watchEffect(() => {
  checkArchive()
});

const toggleArchiveHandler = () => {
  isArchived.value ? store.removeLot(props.lotId) : store.saveLot(props.lotId)
  checkArchive()
}

</script>
<template>
  <div>
    <button
      @click="toggleArchiveHandler"
      class="border border-solid border-primary/20 rounded-md px-[13px] py-[6px] font-normal text-base text-primary duration-300 hover:bg-primary/20"
    >
      {{ isArchived ? "Удалить из архива" : "Сохранить в архив" }}
    </button>
  </div>
</template>
