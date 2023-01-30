import axios from "axios";
import Storage from "./Storage";

const API = (function () {
  const params = {};
  const api = axios.create({ params });

  api.defaults.baseURL = import.meta.env.VITE_API_URL;
  api.defaults.headers.Authorization = `Bearer ${Storage.get()?.token}`;

  const get = (url) => api.get(url);
  const post = (url, body) => api.post(url, body);

  return {
    get,
    post,
  };
})();

export default API;
