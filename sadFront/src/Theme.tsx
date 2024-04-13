import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
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
        warning: {
            main: yellow[600],
        }
    }
});

export default theme;