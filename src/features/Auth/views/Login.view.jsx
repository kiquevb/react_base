import React from "react";
import { Redirect } from "react-router-dom";

import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";
import { LanguageSelector } from "@/components";
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
