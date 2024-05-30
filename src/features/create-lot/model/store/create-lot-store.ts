import { defineStore } from "pinia";
import { ref } from "vue";

export const createLotStore = defineStore("create-lot", () => {
  const fields = ref<any>({});
  const step = ref<number>(1);

  const addLazyProps = (name: string, isCheckedNull: boolean) => {
    fields.value[name] = {
      data: null,
      isCheckedNull: isCheckedNull,
      indexForm: step.value,
      isError: false,
    };
  };

  const getProps = (key: string) => {
    if (fields.value[key] !== undefined) return fields.value[key]?.data;
  };

  const checkError = (key: string) => {
    if (fields.value[key] !== undefined) return fields.value[key].isError;
    return false;
  };

  const validateProps = () => {
    let result = true;
    const props = Object.keys(fields.value).filter((item) => {
      if (fields.value[item].indexForm === step.value && fields.value[item].isCheckedNull === true) {
        return fields.value[item];
      }
    });

    for (let key in props) {
      if (fields.value[props[key]].data === null || fields.value[props[key]].data === "") {
        fields.value[props[key]].isError = true;
        result = false;
      } else {
        fields.value[props[key]].isError = false;
      }
    }

    if (result) {
      step.value++;
      return true;
    }

    return false;
  };

  return {
    fields,
    step,
    addLazyProps,
    getProps,
    checkError,
    validateProps,
  };

  // const objectAucion = ref<string | null>(null);
  // const insurances = ref<string | null>(null);
  // const typeAuction = ref<string | null>(null);

  // const beginAutcion = ref<Date | null>(null);
  // const endAuction = ref<Date | null>(null);

  // const offerPeriods = ref<string | null>(null);
  // const caseNumber = ref<number>(0);

  // const region = ref<string | null>(null);
  // const city = ref<string | null>(null);

  // const VINNumber = ref<number>(0);
  // const FrameNumber = ref<number>(0);

  // const typeCar = ref<string | null>(null);
  // const brand = ref<string | null>(null);
  // const model = ref<string | null>(null);
  // const generationCar = ref<string | null>(null); // поколение
  // const yearRelease = ref<number>(0);

  // const carBody = ref<string | null>(null);
  // const carColor = ref<string | null>(null);
  // const mileage = ref<number>(0);
  // const damageCar = ref<string | null>(null);
  // const typePassportPTS = ref<string | null>(null);

  // const isNotFreeField = ref<boolean>(false);
  // const isMarkTermitionRegistrationCar = ref<boolean>(false);
  // const isMarkMVD = ref<boolean>(false);

  // const typeEngine = ref<string | null>(null);
  // const volumeEngine = ref<number>(0);
  // const powerEngine = ref<number>(0);

  // const damageEngine = ref<string | null>(null);
  // const typeDrive = ref<string | null>(null);
  // const typeTransmission = ref<string | null>(null);
  // const damageKPP = ref<string | null>(null);

  // const isWithdrawalAccountingGBDD = ref<boolean>(false);
  // const isHidingMechanicDamage = ref<boolean>(false);
  // const isFullEquipment = ref<boolean>(false);
  // const isGOTSParkingLotSK = ref<boolean>(false);
  // const comment = ref<string>("");

  // const images = ref<IImage[]>([]);
  // const files = ref<File[]>([]);

  // const isError = ref<boolean>(false);
});
