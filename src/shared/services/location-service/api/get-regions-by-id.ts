import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getRegionsById = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.REGIONS}?id=${id}`,
  });

  return result;
};
