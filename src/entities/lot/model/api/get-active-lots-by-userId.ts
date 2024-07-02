import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getActiveLotsByUserId = async (userId: number) => {
  const lot = await ApiClient({ url: `${Endpoints.LOTS}?userId=${userId}&isCompleted=false` }, BASE_API);

  return lot;
};
