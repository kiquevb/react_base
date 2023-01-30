import Storage from "./Storage";

const Auth = (function () {
  const isLoggedIn = () => !!Storage.get()?.token;

  const setLoginData = ({ token }) => Storage.setItem("token", token);
  const logout = () => Storage.setItem("token", "");

  return {
    isLoggedIn,
    setLoginData,
    logout,
  };
})();

export default Auth;
