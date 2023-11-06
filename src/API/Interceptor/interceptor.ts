import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sm.oortfy.com/v1",
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token"); 

  if (token) {
    console.log("Auth Token:", token); 
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

export default axiosInstance;
