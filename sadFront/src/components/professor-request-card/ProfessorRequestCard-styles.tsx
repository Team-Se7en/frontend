import { AspectRatio } from "@mui/icons-material";
import { Card, CardActions, CardContent, styled } from "@mui/material";


export const StyledCard = styled(Card)(({ theme }) => ({
    width: 'calc(100% - 10rem)',
    maxWidth: '80rem',
    minWidth: '20rem',
    // height: '12rem',
    minHeight: '12rem',
    aspectRatio: '4 / 1',
    margin: '1rem auto',
    backgroundImage: 'linear-gradient(to bottom right, #e5e5e5, white);',
    [theme.breakpoints.between('sm', 'md')]: {
        aspectRation: '3 / 1',
    },

    [theme.breakpoints.down('sm')]: {
        aspectRatio: '1 / 1',
    },

    '&:hover': {
        cursor: 'pointer',

    },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    height: 'calc(100% - 6rem)',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
    height: '3rem',
    backgroundImage: 'linear-gradient(to bottom right, #14213d, blue) !important',
}));
