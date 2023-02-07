import Joi from "joi";

const AuthValidator = (function () {
  const loginSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message("Invalid email"),
    password: Joi.string()
      .min(6)
      .message("Password should have at least 6 characters"),
  });

  return {
    loginSchema,
  };
})();

export default AuthValidator;
