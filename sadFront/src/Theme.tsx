import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
declare module '@mui/material/styles' {
    interface PaletteOptions {
        button?: string;
        iconButton?: string;
        status?: {
            open?: string;
            pending?: string;
            closed?: string;
        }
    }
  }

const theme = createTheme({
    palette: {
        button: '#123456',
        iconButton: '#14213d',
        warning: {
            main: yellow[600],
        },
        status: {
            open: ''
        }
    }
});

export default theme;