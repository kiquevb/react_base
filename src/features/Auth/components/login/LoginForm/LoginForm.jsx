import React from "react";
import LoginFormLogic from "./LoginForm.logic";

const LoginForm = () => {
  const { token, onLogin, onInputChange } = LoginFormLogic();

  return (
    <div>
      <input value={token} onChange={onInputChange} />
      <button onClick={onLogin}>Enter</button>
    </div>
  );
};

export default LoginForm;
