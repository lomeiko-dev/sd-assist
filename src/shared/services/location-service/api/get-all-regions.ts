import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getAllRegions = async () => {
  const result = await ApiClient(
    {
      url: `${Endpoints.REGIONS}`,
    },
    BASE_API
  );

  return result;
};
