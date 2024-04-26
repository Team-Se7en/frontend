import { Button, Chip, Container, styled } from "@mui/material";
import theme from "Theme";

export const Wrapper = styled(Container)(() => ({
    // borderRadius: theme.shape.borderRadius,
    backgroundImage: theme.palette.backgroundColor,
    // borderRadius: theme.shape.borderRadius,0
}));

export const SaveButton = styled(Button)(() => ({
    // borderTopRightRadius: 0,
    // borderStartStartRadius: 0,
    borderRadius: 0,
    '&:hover': {
        backgroundColor: 'navy',
        color: 'white',
    }
}));

export const CancelButton = styled(Button)(() => ({
    // borderTopLeftRadius: 0,
    // borderStartEndRadius: 0,
    borderRadius: 0,

    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
    }
}));

export const StyledTag = styled(Chip)(() => ({
    backgroundColor: 'white',
}));