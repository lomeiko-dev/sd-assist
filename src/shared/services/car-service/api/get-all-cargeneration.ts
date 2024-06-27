import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getAllCarGeneration = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_GENERATION}`,
  }, BASE_API);

  return result;
};