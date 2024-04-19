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
        };
        backgroundColor?: string;
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
            open: 'linear-gradient(to bottom right, #5fa8d3, #add8e6) !important',
            pending: 'linear-gradient(to bottom right, #0086B2, #00A7C9) !important',
            closed: 'linear-gradient(to bottom right, #ff9999 , #FFCCCC) !important',
        },
        backgroundColor: 'linear-gradient(to bottom right, #e5e4e2 , #f6f5f3) !important',
    }
});

export default theme;