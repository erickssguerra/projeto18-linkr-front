import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

export function config(token) {
  const configuration = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return configuration;
}
