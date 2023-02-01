import { useHistory } from "react-router-dom";
import { joiResolver, useForm } from "@mantine/form";

import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";
import { useLoginMutation } from "@/features/Auth/Auth.queries";
import AuthValidator from "@/features/Auth/Auth.validator";
import Translator from "@/infrastructure/Translator";

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

  const { mutate: login } = useLoginMutation();

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

  return { form, text, handleLogin };
};

export default LoginFormLogic;
