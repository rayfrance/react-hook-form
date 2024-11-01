import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Cor azul personalizada
    },
    secondary: {
      main: "#ff5722",
    },
    background: {
      default: "#f0f4f8", // Cor de fundo suave
    },
  },
  typography: {
    h4: {
      fontWeight: "bold",
    },
  },
});

export default theme;