import React from "react";
import { TextInput, PasswordInput } from "@mantine/core";

import LoginFormLogic from "./LoginForm.logic";
import { Button } from "@/components/components.exports";

const LoginForm = () => {
  const { form, text, handleLogin } = LoginFormLogic();

  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
      <TextInput
        withAsterisk
        label={text.email}
        placeholder="example@mail.com"
        {...form.getInputProps("email")}
      />

      <PasswordInput
        withAsterisk
        label={text.password}
        {...form.getInputProps("password")}
      />

      <Button type="submit">{text.login}</Button>
    </form>
  );
};

export default LoginForm;
