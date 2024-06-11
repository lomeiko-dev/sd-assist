import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getCarBrandById = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_BRAND}?id=${id}`,
  });

  return result;
};
