import { CardBackground } from "@assets";
import { Status } from "@models";
import { Box, Card, CardActions, CardActionsProps, CardContent, Chip, styled, Typography } from "@mui/material";


export const StyledCard = styled(Card)(({ theme }) => ({
    width: 'calc(100% - 10rem)',
    maxWidth: '80rem',
    minWidth: '20rem',
    // height: '12rem',
    minHeight: '15rem',
    aspectRatio: '4 / 1',
    margin: '1rem auto',
    position: 'relative',
    zIndex: '0',
    backgroundImage: 'linear-gradient(to bottom right, #e5e5e5, white);',
    [theme.breakpoints.between('sm', 'md')]: {
        aspectRation: '3 / 1',
    },

    [theme.breakpoints.down('sm')]: {
        aspectRatio: '1 / 1',
    },
}));

export const StyledBackgroundImage = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '0.2',
    backgroundImage: `url(${CardBackground})`,
    backgroundPosition: 'left top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1',
}));

export const StyledCardContent = styled(CardContent)(() => ({
    height: 'calc(100% - 4.75rem)',
    paddingBottom: '8px !important',
}));

function statusColor(status: Status): string {
    switch (status) {
        case Status.open:
            return 'linear-gradient(to bottom right, #14213d, #50C878) !important';
        case Status.pending:
            return 'linear-gradient(to bottom right, #14213d, blue) !important';
        case Status.closed:
            return 'linear-gradient(to bottom right, #14213d, #FF0000) !important';
        default:
            return 'linear-gradient(to bottom right, #14213d, blue) !important';
    }
}

export interface StyledCardActionsProps extends CardActionsProps {
    status: Status;
}

export const StyledCardActions = styled(CardActions)((props: StyledCardActionsProps) => ({
    height: '2.25rem',
    backgroundImage: statusColor(props.status),
    '&:hover': {
        cursor: 'pointer',

    },
}));

export const StyledTag = styled(Chip)(() => ({
    backgroundColor: 'white',
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    marginTop: '0.25rem',
    maxHeight: 'calc(100% - 5.5rem)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    [theme.breakpoints.up(1400)]: {
        WebkitLineClamp: '6',
    },

    [theme.breakpoints.between(1300, 1400)]: {
        WebkitLineClamp: '5',
    },

    [theme.breakpoints.between(1200, 1300)]: {
        WebkitLineClamp: '4',
    },

    [theme.breakpoints.between(1100, 1200)]: {
        WebkitLineClamp: '3 ',
    },

    [theme.breakpoints.down('sm')]: {
        WebkitLineClamp: '11',
    },

    [theme.breakpoints.between(560, 580)]: {
        WebkitLineClamp: '10',
    },

    [theme.breakpoints.between(540, 560)]: {
        WebkitLineClamp: '9',
    },

    [theme.breakpoints.between(520, 540)]: {
        WebkitLineClamp: '8',
    },

    [theme.breakpoints.between(500, 520)]: {
        WebkitLineClamp: '7',
    },

    [theme.breakpoints.down(500)]: {
        WebkitLineClamp: '6',
    },
}));