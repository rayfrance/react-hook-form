import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography, Box, Grid, Divider } from "@mui/material";
import validationSchema from "../utils/validationSchema"; // Certifique-se de que seu schema de validação está correto

function FormularioCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [submittedData, setSubmittedData] = useState(null); // Estado para armazenar os dados submetidos

  const onSubmit = (data) => {
    console.log(data)
    setSubmittedData(data); // Armazena os dados submetidos no estado
    reset(); // Limpa os campos do formulário após a submissão
  };

  const clearData = () => {
    setSubmittedData(null); // Limpa os dados exibidos
    reset(); // Limpa os campos do formulário
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Formulário de Cadastro
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Campo Nome */}
        <TextField
          {...register("name")} // Registra o campo para o React Hook Form
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.name} // Exibe erro se houver
          helperText={errors.name?.message} // Mensagem de erro
        />

        {/* Campo Email */}
        <TextField
          {...register("email")}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Campo Senha */}
        <TextField
          fullWidth
          label="Senha"
          type="password"
          {...register("password")}
          variant="outlined"
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {/* Campo Confirmação de Senha */}
        <TextField
          fullWidth
          label="Confirmação de Senha"
          type="password"
          {...register("confirmPassword")}
          variant="outlined"
          margin="normal"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        {/* Botões Enviar e Limpar */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ py: 1.5 }}
          >
            Enviar
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            sx={{ py: 1.5 }}
            onClick={clearData}
          >
            Limpar
          </Button>
        </Box>
      </form>

      {/* Exibição dos Dados Submetidos */}
      {submittedData && (
        <Box mt={4} p={3} border={1} borderColor="grey.300" borderRadius={2} bgcolor="#f9f9f9">
          <Typography variant="h6" gutterBottom>Dados Enviados:</Typography>
          <Typography><strong>Nome:</strong> {submittedData.name}</Typography>
          <Typography><strong>Email:</strong> {submittedData.email}</Typography>
        </Box>
      )}
    </>
  );
}

export default FormularioCadastro;
