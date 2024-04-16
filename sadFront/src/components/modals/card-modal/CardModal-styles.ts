import { Button, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
}));

export const SaveButton = styled(Button)(({ theme }) => ({
    borderTopRightRadius: 0,
    borderStartStartRadius: 0,
    '&:hover': {
        backgroundColor: 'navy',
        color: 'white',
    }
}));

export const CancelButton = styled(Button)(({ theme }) => ({
    borderTopLeftRadius: 0,
    borderStartEndRadius: 0,
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
    }
}));