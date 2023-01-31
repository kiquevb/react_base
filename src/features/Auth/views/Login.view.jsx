import React from "react";
import { LoginForm } from "../Auth.exports";
import Auth from "@/infrastructure/Auth";
import { Redirect } from "react-router-dom";
import paths from "@/navigation/paths";

const Login = () => {
  if (Auth.isLoggedIn()) return <Redirect to={paths.home} />;

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
