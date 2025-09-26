import axios from "axios";
import { ENV } from "./env";

const apiClient = axios.create({
  baseURL: ENV.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;
