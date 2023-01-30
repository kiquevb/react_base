import React from "react";
import LoginFormLogic from "./LoginForm.logic";
import { TextInput } from "@mantine/core";

const LoginForm = () => {
  const { form, handleLogin } = LoginFormLogic();

  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="example@mail.com"
        {...form.getInputProps("email")}
      />

      <TextInput
        withAsterisk
        label="Password"
        {...form.getInputProps("password")}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
