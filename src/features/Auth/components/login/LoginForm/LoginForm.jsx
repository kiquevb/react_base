import React from "react";
import LoginFormLogic from "./LoginForm.logic";

const LoginForm = () => {
  const { loginData, onLogin, onInputChange } = LoginFormLogic();
  const { password, email } = loginData;

  return (
    <div>
      <input
        value={password}
        onChange={onInputChange}
        name="password"
        placeholder="password"
      />

      <input
        value={email}
        onChange={onInputChange}
        name="email"
        placeholder="email"
      />

      <button onClick={onLogin}>Enter</button>
    </div>
  );
};

export default LoginForm;
