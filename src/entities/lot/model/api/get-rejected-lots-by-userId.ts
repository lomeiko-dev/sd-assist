import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getRejectedLotsByUserId = async (userId: number) => {
  const lot = await ApiClient({ url: `${Endpoints.REJECTED_LOTS}?userId=${userId}` }, BASE_API);

  return lot;
};
