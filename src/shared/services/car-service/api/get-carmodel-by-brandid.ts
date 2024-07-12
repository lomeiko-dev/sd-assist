import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCarModelByBrandID = async (id: number) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.CAR_MODEL}?brandid=${id}`,
    },
    BASE_API
  );

  return result;
};
