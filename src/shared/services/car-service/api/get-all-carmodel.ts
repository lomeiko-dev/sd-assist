import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getAllCarModel = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_MODEL}`,
  });

  return result;
};