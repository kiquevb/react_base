import API from "@/infrastructure/Api";

export async function loginService({ email, password }) {
  const url = "https://api.vetech.com.mx/login";
  const { data } = await API.post(url, { email, password });
  return data;
}
