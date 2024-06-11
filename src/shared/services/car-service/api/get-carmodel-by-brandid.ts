import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getCarModelByBrandid = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_MODEL}?brandid=${id}`,
  });

  return result;
};
