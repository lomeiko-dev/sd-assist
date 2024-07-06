import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const runLot = async (id: number) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.LOTS}/${id}`,
      method: "PATCH",
      data: { isOpen: true },
    },
    BASE_API
  );

  return result;
};
