import { ILot } from "../types";
import { ApiClient } from "shared/api";
import { Endpoints } from "shared/api/model/endpoints";

export const getLotPages = async (page: number, limit: number) => {
  const resultLot = await ApiClient({ url: `${Endpoints.LOTS}?_page=${page}&_limit=${limit}` });
  const resultTotalCount = await ApiClient({ url: Endpoints.LOTS_TOTAL });

  if (resultLot.status === 200 && resultTotalCount.status === 200) {
    const data: ILot[] = resultLot.data;
    const total = resultTotalCount.data.total_count;

    return { data, total };
  }
};
