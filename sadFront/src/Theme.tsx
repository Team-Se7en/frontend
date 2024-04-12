import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
    interface PaletteOptions {
        button?: string;
        iconButton?: string;
    }
  }

const theme = createTheme({
    palette: {
        button: '#123456',
        iconButton: '#14213d',
    }
});

export default theme;