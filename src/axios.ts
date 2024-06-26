import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8888",
});

instance.interceptors.request.use((config) => {
  config.headers.token = window.localStorage.getItem("token");
  return config;
});
export default instance;
