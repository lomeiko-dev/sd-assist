import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import { createNewLot } from "../api/create-lot";
import { IFieldsManager, fieldsManager } from "shared/ui/input";
import { useRouter } from "vue-router";
import { uploadFiles } from "shared/services/file-service";
import { IFile } from "shared/services/file-service";
import { generateID } from "shared/lib/utils/generateID";
import { generateName } from "shared/lib/utils/generateName";
import { convertToBase64 } from "shared/lib/utils/convertToBase64";
import { Routes } from "shared/config/routes";
import { authStore } from "entities/auth";

const IGNORE_LIST: string[] = ["images", "files"];

export const createLotStore = defineStore("create-lot", () => {
  const step = ref<number>(1);
  const router = useRouter();
  const isShowModal = ref(false);
  const fieldsManagmant = ref<IFieldsManager>(fieldsManager());

  const auth = authStore();

  watch(
    () => isShowModal.value,
    () => {
      if (isShowModal.value === false) {
        step.value--;
      }
    }
  );

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

  const createLot = async () => {
    isShowModal.value = false;

    const data = fieldsManagmant.value.generateDataFields(IGNORE_LIST);

    const images = fieldsManagmant.value.object["images"]?.data;
    const files = fieldsManagmant.value.object["files"]?.data;

    const media_images: IFile[] = [];
    const media_files: IFile[] = [];

    data["userId"] = auth.authData?.id || 0;
    data["id_lot"] = generateID(5);
    data["date_create"] = new Date();
    data[
      "title"
    ] = `${fieldsManagmant.value.object["car_brand"].data.brand} ${fieldsManagmant.value.object["car_model"].data.model} ${fieldsManagmant.value.object["car_generation"].data.generation}`;
    data["bids"] = [];

    for (let i = 0; i < images.length; i++) {
      const generatingName = `[image]${generateName(10)}.${generateID(5)}`;
      media_images.push({ name: generatingName, data: images[i] });
    }

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const generatingName = `[file]${generateName(10)}.${generateID(5)}`;
        media_files.push({ name: generatingName, data: await convertToBase64(files[i], "") });
      }
    }

    data["files"] = media_files.map((item) => item.name);
    data["images"] = media_images.map((item) => item.name);

    await uploadFiles(media_images);
    await uploadFiles(media_files);
    await createNewLot(data);

    router.push({ name: Routes.SUCCESS.name });
  };

  return {
    step,
    isShowModal,
    fieldsManagmant,
    nextStep,
    createLot,
  };
});
