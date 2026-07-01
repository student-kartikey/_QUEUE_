import axios from "axios";

const queueApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 8000
});

export default queueApi;
