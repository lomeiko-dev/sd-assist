import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getAllCarBrand = async () => {
  const result = await ApiClient(
    {
      url: `${Endpoints.CAR_BRAND}`,
    },
    BASE_API
  );

  return result;
};
