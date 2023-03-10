import React from "react";
import { Redirect } from "react-router-dom";

import { Auth } from "@infra/_exports";
import paths from "@navigation/paths";
import { LanguageSelector } from "@components/_exports";
import { LoginForm } from "../Auth.exports";

const Login = () => {
  if (Auth.isLoggedIn()) return <Redirect to={paths.home} />;

  return (
    <>
      <LoginForm />
      <LanguageSelector />
    </>
  );
};

export default Login;
