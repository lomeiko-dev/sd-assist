import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getAllCarBrand = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_BRAND}`,
  });

  return result;
};