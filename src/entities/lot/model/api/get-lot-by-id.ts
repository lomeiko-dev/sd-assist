import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getLotById = async (id: number) => {
  const lot = await ApiClient({ url: `${Endpoints.LOTS}?id=${id}` }, BASE_API);

  return lot;
};
