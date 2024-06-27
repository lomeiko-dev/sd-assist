import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCarGenerationByModelid = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_GENERATION}?modelid=${id}`,
  }, BASE_API);

  return result;
};
