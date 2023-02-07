import { useMutation } from "@tanstack/react-query";
import { loginService } from "./Auth.services";

import { Alert } from "@infra/_exports";

export const useLoginMutation = () =>
  useMutation(({ email, password }) => loginService({ email, password }), {
    onSuccess: () => Alert.success("Successful login"),
  });
