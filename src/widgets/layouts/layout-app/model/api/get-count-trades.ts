import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getCountTrades = async () => {
  const result = await ApiClient(
    {
      url: `${Endpoints.COUNT_TRADES}`,
      method: "GET",
    },
    BASE_API
  );

  return result;
};
