import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { createNewLot } from "../api/create-lot";
import { IFieldsManager, fieldsManager } from "shared/ui/input";
import { useRouter } from "vue-router";

export const createLotStore = defineStore("create-lot", () => {
  const step = ref<number>(1);
  const router = useRouter();
  const isShowModal = ref(false);
  const fieldsManagmant = ref<IFieldsManager>(fieldsManager());

  onMounted(() => {
    fieldsManagmant.value = fieldsManager();
  });

  const nextStep = (validator: (indexForm: number) => boolean) => {
    const isValid = validator(step.value);

    if (isValid) {
      step.value++;

      if (step.value === 5) {
        isShowModal.value = true;
      }
    }
  };

  const createLot = async (data: any) => {
    isShowModal.value = false;
    await createNewLot(data);
    router.push({ name: "success" });
  };

  return {
    step,
    isShowModal,
    fieldsManagmant,
    nextStep,
    createLot,
  };
});
