import { ApiClient, Endpoints, FILE_API } from "shared/api";

export const getFileByName = async (name: string) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.FILE}?name=${name}`,
      method: "GET",
    },
    FILE_API
  );

  return result;
};
