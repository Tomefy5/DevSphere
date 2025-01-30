import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
