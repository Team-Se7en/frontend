import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
    interface PaletteOptions {
        button?: string;
        color1?: string;
    }
  }

const theme = createTheme({
    palette: {
        button: '#123456',
        color1: '#555555',
    }
});

export default theme;