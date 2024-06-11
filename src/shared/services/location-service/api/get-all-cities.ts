import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getAllCities = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CITIES}`,
  });

  return result;
};