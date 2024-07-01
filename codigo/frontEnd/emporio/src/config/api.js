import axios from "axios";

export const apiConfig = {
  HTTPS: "https://localhost:7209/api/v.1",
  HTTP: "http://localhost:7209/api/v.1",
};

export const api = axios.create({
  baseURL: apiConfig.HTTPS,
  headers: {
    "Content-Type": "application/json",
  },
});
