import { ApiClient, Endpoints, FILE_API } from "shared/api";

export const deleteFileByName = async (name: string) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.FILE}?name=${name}`,
      method: "DELETE",
    },
    FILE_API
  );

  return result;
};
