import axiosInstace from "../../utils/axiosInstance";

export const reactionApi = async (id, info) => {
  const response = await axiosInstace.patch(`/videos/${id}`, info, {
    headers: {
      "content-type": "application/json",
    },
  });

  return response.data;
};
