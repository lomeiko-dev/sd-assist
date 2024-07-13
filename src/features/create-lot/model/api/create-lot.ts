import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const createNewLot = async (data: any) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.LOTS}`,
      method: "POST",
      data: data,
    },
    BASE_API
  );

  return result;
};
