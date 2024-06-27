import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCitiesById = async (id: number) => {
  const result = await ApiClient({
    url: `${Endpoints.CITIES}?regionid=${id}`,
  }, BASE_API);

  return result;
};
