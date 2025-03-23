import { Box, Button, styled } from "@mui/material";


export const Wrapper = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    // paddingTop: theme.spacing(2),
    
}));

export const YesButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'green',
        color: 'white',
    }
}));

export const NoButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
    }
}));