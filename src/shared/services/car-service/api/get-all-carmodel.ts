import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getAllCarModel = async () => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_MODEL}`,
  }, BASE_API);

  return result;
};