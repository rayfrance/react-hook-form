import * as yup from "yup";

const validationSchema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(3, "A senha deve ter pelo menos 3 caracteres")
      .max(6,"A senha deve ter no máximo 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "As senhas não coincidem")
      .required("Confirmação de senha é obrigatória"),
    /*idade: yup.number()
    .typeError("Idade precisa ser um número")
    .transform((value, originalValue) => (String(originalValue).trim() === "" ? null : value)) // Transforma campo vazio em null
    .positive("Idade precisa ser positiva")
    .integer("Idade precisa ser um número inteiro")
    .required("A idade é obrigatória")*/
  });
export default validationSchema;