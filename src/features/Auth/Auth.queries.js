import { useMutation } from "@tanstack/react-query";
import { loginService } from "./Auth.services";

import Alert from "@/infrastructure/Alerts";

export const useLoginMutation = () =>
  useMutation(({ email, password }) => loginService({ email, password }), {
    onSuccess: () => Alert.success("Successful login"),
  });
