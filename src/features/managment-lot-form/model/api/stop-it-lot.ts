import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const stopItLot = async (id: number) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.LOTS}/${id}`,
      method: "PATCH",
      data: { isOpen: false },
    },
    BASE_API
  );

  return result;
};
