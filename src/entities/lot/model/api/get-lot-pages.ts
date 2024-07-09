import { ILot } from "../types";
import { ApiClient, Endpoints, BASE_API } from "shared/api";

export const getLotPages = async (page: number, limit: number, parameters: string) => {
  const resultLot = await ApiClient(
    { url: `${Endpoints.LOTS}?_page=${page}&_limit=${limit}${parameters !== "" ? `&${parameters}` : ""}` },
    BASE_API
  );

  if (resultLot.status === 200) {
    const data: ILot[] = resultLot.data || [];
    const total = resultLot.total;

    return { data, total };
  }
};
