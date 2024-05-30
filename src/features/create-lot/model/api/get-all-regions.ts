import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getAllRegions = async () => {
  const result = await ApiClient({
    url: `${Endpoints.REGIONS}`,
  });

  return result
};