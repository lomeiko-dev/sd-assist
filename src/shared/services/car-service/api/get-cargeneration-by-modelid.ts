import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getCarGenerationByModelid = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_GENERATION}?modelid=${id}`,
  });

  return result;
};
