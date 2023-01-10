import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export function config(token) {
  const configuration = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return configuration;
}
