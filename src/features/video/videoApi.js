import axiosInstace from "../../utils/axiosInstance";

export const fetchVideoApi = async (id) => {
  const response = await axiosInstace.get(`/videos/${id}`);

  return response.data;
};

export const reactionApi = async (id, info) => {
  const response = await axiosInstace.patch(`/videos/${id}`, info, {
    headers: {
      "content-type": "application/json",
    },
  });

  return response.data;
};
