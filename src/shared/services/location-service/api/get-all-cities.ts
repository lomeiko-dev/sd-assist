import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getAllCities = async () => {
  const result = await ApiClient(
    {
      url: `${Endpoints.CITIES}`,
    },
    BASE_API
  );

  return result;
};
