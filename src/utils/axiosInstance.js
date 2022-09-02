import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://lws-server-json.herokuapp.com",
});

export default axiosInstace;
