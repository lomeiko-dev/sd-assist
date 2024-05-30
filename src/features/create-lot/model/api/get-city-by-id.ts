import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getCitiesById = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CITIES}?regionid=${id}`,
  });

  return result;
};
