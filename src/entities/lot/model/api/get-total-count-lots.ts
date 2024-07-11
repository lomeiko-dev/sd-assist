import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getTotalCountLots = async (params: string) => {
  console.log(1);
  const { data, total } = await ApiClient({ url: `${Endpoints.LOTS}?${params}` }, BASE_API);

  return total || data.length;
};
