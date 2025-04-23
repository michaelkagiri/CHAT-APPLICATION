// import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000/api",
//     withCredentials: true, // Ensure backend supports credentials (cookies)
// });


import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
  withCredentials: true,
});