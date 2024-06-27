import { IConfigField } from "shared/ui/input";
import { typeCar } from "shared/config/selectors";

export const carFormConfig_primary: IConfigField[] = [
  {
    type: "mask",
    isValid: true,
    key: "VIN_number",
    placeholder: "VIN номер*",
    mask: "99999999999999999",
    indexForm: 2,
  },
  {
    type: "mask",
    isValid: false,
    key: "frame_number",
    placeholder: "Frame номер",
    mask: "99999999999999999",
    indexForm: 2,
  },
  {
    type: "dropdwn",
    isValid: true,
    key: "car_type",
    placeholder: "Тип авто*",
    optionLabel: "title",
    optionValue: "value",
    options: typeCar,
    indexForm: 2,
  },
  {
    type: "other",
    nameSlot: "internal",
  },
  {
    type: "number",
    isValid: true,
    key: "release_year",
    placeholder: "Год выпуска*",
    indexForm: 2,
  },
];

export const carFormConfig_secondary: IConfigField[] = [
  {
    type: "dropdwn",
    isValid: true,
    key: "car_brand",
    placeholder: "Марка*",
    optionLabel: "brand",
    options: [],
    indexForm: 2,
  },
  {
    type: "dropdwn",
    isValid: true,
    key: "car_model",
    placeholder: "Модель*",
    optionLabel: "model",
    options: [],
    indexForm: 2,
  },
  {
    type: "dropdwn",
    isValid: false,
    key: "car_generation",
    placeholder: "Поколение",
    optionLabel: "generation",
    options: [],
    indexForm: 2,
  },
];
