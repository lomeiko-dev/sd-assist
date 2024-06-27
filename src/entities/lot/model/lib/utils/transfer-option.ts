import { IOption } from "shared/config/selectors";

export const transferOption = (option: IOption[], value: string) => {
  const data = option.find((item) => item.value === value)?.title;

  return data ?? "Неизвестно";
};
