import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCarBrandById = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CAR_BRAND}?id=${id}`,
  }, BASE_API);

  return result;
};
