import { ApiClient, Endpoints, FILE_API } from "shared/api";
import { IFile } from "../types/types";

export const uploadFiles = async (files: IFile[]) => {
  let isSuccess = true;
  for (let i = 0; i < files.length; i++) {
    const result = await ApiClient(
      {
        url: `${Endpoints.FILE}`,
        method: "POST",
        data: files[i],
      },
      FILE_API
    );

    if (result.status !== 200) {
      isSuccess = false;
    }
  }

  return isSuccess;
};
