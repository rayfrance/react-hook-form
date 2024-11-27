// App.js
import React from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import FormularioCadastro from "./components/FormularioCadastro";
import theme from "./utils/theme";
import ExemploGridFlexbox from "./components/ExemploGridFlexbox";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center" // Centraliza horizontalmente
        alignItems="center" // Centraliza verticalmente
        minHeight="100vh" // Ocupa 100% da altura da viewport
        bgcolor="#f0f4f8" // Cor de fundo suave
        padding={2} // Adiciona padding geral
      >
        <Container
          component="main"
          maxWidth="xs" // Define a largura máxima do formulário
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            p: 4,
            bgcolor: "#fff",
          }}
        >
          <FormularioCadastro />                      
        </Container>
      </Box>
      <Container>
      <ExemploGridFlexbox /> 
      </Container>
    </ThemeProvider>
  );
}

export default App;
