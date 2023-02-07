import { useHistory } from "react-router-dom";
import { joiResolver, useForm } from "@mantine/form";

import { Auth, Translator } from "@infra/_exports";
import paths from "@navigation/paths";
import { useLoginMutation } from "@features/Auth/Auth.queries";
import AuthValidator from "@features/Auth/Auth.validator";

const LoginFormLogic = () => {
  const { t } = Translator();
  const history = useHistory();

  const form = useForm({
    validate: joiResolver(AuthValidator.loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isLoading } = useLoginMutation();

  const handleLogin = (values) => {
    login(values, {
      onSuccess: (response) => {
        Auth.setLoginData(response?.item);
        history.push(paths.home);
      },
    });
  };

  const text = {
    login: t("basic.login"),
    email: t("basic.email"),
    password: t("basic.password"),
  };

  return { form, text, isLoading, handleLogin };
};

export default LoginFormLogic;
