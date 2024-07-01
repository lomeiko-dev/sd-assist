import { IBid } from "entities/lot";
import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const patchBids = async (id: number, new_bids: IBid[]) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.LOTS}/${id}`,
      method: "PATCH",
      data: { bids: new_bids },
    },
    BASE_API
  );

  return result;
};
