import API from "@/infrastructure/Api";

export async function loginService({ email, password }) {
  const url = "/login";
  const { data } = await API.post(url, { email, password });
  return data;
}
