import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First name must only contains characters")
    .required("Please enter your First Name"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last name must only contains characters")
    .required("Please enter your Last Name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special symbol"
    )
    .min(8)
    .max(20)
    .required("Please enter your password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "password are not same"
  ),
});
