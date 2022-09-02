import axiosInstace from "../../utils/axiosInstance";

export const tagsApi = async () => {
  const response = await axiosInstace.get("/tags");

  return response.data;
};
