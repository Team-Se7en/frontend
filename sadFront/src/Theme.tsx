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
            notActive?: string;
            accepted?: string;
            rejected?: string;
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
            open: 'green !important',
            pending: 'yellow !important',
            accepted: 'blue !important',
            notActive: 'purple !important',
            closed: 'gray !important',
            rejected: 'red !important',
        },
        backgroundColor: 'linear-gradient(to bottom right, #e5e4e2 , #f6f5f3) !important',
        // color1: ''
    }
});

export default theme;