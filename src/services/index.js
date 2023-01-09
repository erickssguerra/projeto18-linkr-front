import axios from "axios";

export const api = axios.create({
  baseURL: "https://linkr-dhw7.onrender.com/",
});

export function config(token) {
  const configuration = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return configuration;
}
