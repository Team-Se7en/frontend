import "@mui/material"

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
        backgroundColor2?: string;
        borderColor?: string;
        chartColor?: string;
    }
    interface Palette {
        button: string;
        iconButton: string;
        status: {
            open: string;
            pending: string;
            closed: string;
            notActive: string;
            accepted: string;
            rejected: string;
        };
        backgroundColor: string;
        backgroundColor2: string;
        borderColor: string;
        chartColor: string;
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
        backgroundColor: 'white',
        backgroundColor2: '#0F1035',
        // color1: ''
        borderColor: '#3A506B',
        chartColor: 'black',  
    }
});

export default theme;