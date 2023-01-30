import { useHistory } from "react-router-dom";
import { joiResolver, useForm } from "@mantine/form";

import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";
import { useLoginMutation } from "@/features/Auth/Auth.queries";
import AuthValidator from "@/features/Auth/Auth.validator";

const LoginFormLogic = () => {
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

  return { form, handleLogin };
};

export default LoginFormLogic;
