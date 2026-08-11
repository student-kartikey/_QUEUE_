import axios from "axios";

const queueApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5002/api",
  timeout: 8000
});

const unwrap = (request) => request.then((response) => response.data.data);

export const getQueue = () => unwrap(queueApi.get("/queue"));
export const getQueueStatus = () => unwrap(queueApi.get("/queue/status"));
export const createToken = (payload) => unwrap(queueApi.post("/queue/token", payload));
export const serveNext = () => unwrap(queueApi.post("/queue/serve"));
export const completeToken = (tokenNumber) =>
  unwrap(queueApi.post(`/queue/${tokenNumber}/complete`));
export const cancelToken = (tokenNumber) => unwrap(queueApi.delete(`/queue/${tokenNumber}`));

export function getApiError(error) {
  if (error.code === "ECONNABORTED" || !error.response) {
    return "Cannot reach the queue server. Please check that the backend is running.";
  }

  return error.response.data?.message || "The queue request could not be completed.";
}

export default queueApi;
