


import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.SERVER_URL}/api`,
  withCredentials: true,
});