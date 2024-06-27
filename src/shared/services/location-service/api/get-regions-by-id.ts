import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getRegionsById = async (id: number) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.REGIONS}?id=${id}`,
    },
    BASE_API
  );

  return result;
};
