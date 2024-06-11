import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getAllCarGeneration = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_GENERATION}`,
  });

  return result;
};