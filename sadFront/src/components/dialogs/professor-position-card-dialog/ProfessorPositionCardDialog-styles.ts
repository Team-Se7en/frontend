import { Box, Button, styled } from "@mui/material";


export const StyledDialogContainer = styled(Box)(() => ({
    // backgroundImage: theme.palette.backgroundColor,
}));

export const StyledShowButton = styled(Button)(() => ({
    // backdropFilter: 'blur(10px)', 
    ':hover': {
        backgroundColor: 'transparent !important',
    }
}));
