import { API } from "@infra/_exports";

export async function loginService({ email, password }) {
  const url = "/login";
  const { data } = await API.post(url, { email, password });
  return data;
}
