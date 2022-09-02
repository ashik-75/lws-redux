import axiosInstace from "../../utils/axiosInstance";

export const fetchVideosApi = async (author, search, tags, page) => {
  let queryString = "";

  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search) {
    queryString += `&q=${search}`;
  }

  if (author) {
    queryString += `&author_like=${author}`;
  }

  if (page) {
    queryString += `&_page=${page}&_limit=4`;
  }

  console.log(queryString);

  const response = await axiosInstace.get(`/videos?${queryString}`);

  return response.data;
};
