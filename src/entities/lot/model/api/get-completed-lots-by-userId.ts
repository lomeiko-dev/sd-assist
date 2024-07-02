import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCompletedLotsByUserId = async (userId: number) => {
  const lot = await ApiClient({ url: `${Endpoints.LOTS}?userId=${userId}&isCompleted=true` }, BASE_API);

  return lot;
};
