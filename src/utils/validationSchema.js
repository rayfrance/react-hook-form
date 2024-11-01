import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "As senhas não coincidem")
      .required("Confirmação de senha é obrigatória"),
  });
export default validationSchema;