import { useState } from "react";
import { useHistory } from "react-router-dom";

import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";

const LoginFormLogic = () => {
  const history = useHistory();
  const [token, setToken] = useState("");

  const onInputChange = (e) => setToken(e.target.value);
  const onLogin = () => {
    if (token.trim()) {
      Auth.setLoginData({ token });
      history.push(paths.home);
    }
  };

  return { onInputChange, onLogin, token };
};

export default LoginFormLogic;
