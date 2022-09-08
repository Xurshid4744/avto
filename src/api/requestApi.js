import axios from "axios";

const requestApi = axios.create({
  baseURL: "https://cartestwebapp.herokuapp.com",
});
requestApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("interceptor is working");

  if (config.headers !== undefined) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

requestApi.interceptors.response.use(
  (config) => config,
  (response) => response,
  (error) => {
    console.log("error", error);
    if (error.response.status === 401) {
      window.location.href = "/";
    }
  }
);

export default requestApi;
