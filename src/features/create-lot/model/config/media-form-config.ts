import { IConfigField } from "shared/ui/input";

export const mediaFormConfig_primary: IConfigField[] = [
  {
    type: "image-loader",
    key: "images",
    isValid: true,
    title: "Фотографии",
    subTitle:
      "Разрешение загружаемых фото не должно превышать 600x600 пикселей, размер — 5 MB. Допустимые форматы фото jpeg, bmp, png",
    errorMessage: "Лот должен иметь как минимум 1 изображение",
    nameSlot: "images",
  },
];

export const mediaFormConfig_secondary: IConfigField[] = [
  {
    type: "file-loader",
    key: "files",
    isValid: false,
    title: "Документы к лоту",
    subTitle:
      "Вы можете загрузить PDF-файл, размером до 100 MB, изображения из которого будут автоматически извлечены.",
    nameSlot: "files",
  },
];
