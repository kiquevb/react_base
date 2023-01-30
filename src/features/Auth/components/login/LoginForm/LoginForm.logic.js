import { useState } from "react";
import { useHistory } from "react-router-dom";

import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";
import { useLoginMutation } from "@/features/Auth/Auth.queries";

const LoginFormLogic = () => {
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });

  const onInputChange = (e) =>
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const { mutate: login } = useLoginMutation();

  const onLogin = () => {
    // TODO add validator
    if (true) {
      login(loginData, {
        onSuccess: (response) => {
          Auth.setLoginData(response?.item);
          history.push(paths.home);
        },
      });
    }
  };

  return { onInputChange, onLogin, loginData };
};

export default LoginFormLogic;
