import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getBidsByLot = async (id: number) => {
  const lot = await ApiClient({ url: `${Endpoints.LOTS}/${id}` }, BASE_API);

  if (lot.status === 200) return lot.data.bids;

  return [];
};
