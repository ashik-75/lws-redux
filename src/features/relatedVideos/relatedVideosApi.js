import axiosInstace from "../../utils/axiosInstance";

export const relatedVideosApi = async (tags, id) => {
  let queryString = "";

  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (id) {
    queryString += `&id_ne=${id}`;
  }

  const response = await axiosInstace.get(`/videos?${queryString}`);

  return response.data;
};
