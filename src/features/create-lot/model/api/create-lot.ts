import { ILot } from "entities/lot";
import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const createNewLot = async (data: ILot) => {
  console.log(data.files[0]);
  const result = await ApiClient({
    url: `${Endpoints.LOTS}`,
    method: "POST",
    data: data,
  });

  return result;
};
