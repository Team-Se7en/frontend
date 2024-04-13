import { Box, Button, ButtonGroup, Container, IconButton, Typography } from "@mui/material";
import { NoButton, Wrapper, YesButton } from "./DeleteDialog-styles";
import Styles from "Styles";
import clsx from "clsx";
import { DangerousRounded, WarningRounded } from "@mui/icons-material";
import theme from "Theme";



export default function DeleteDialog() {

    const globalStyles = Styles();

    return (
        <Wrapper>
            <Box className={clsx(globalStyles.fullyCenter, globalStyles.flexColumn)} sx={{ p: theme.spacing(3, 0, 3, 0), m: 'auto', width: 'fit-content' }}>
                <WarningRounded sx={{ m: 'auto' }} color="warning" fontSize="large" />
                <Typography variant="h6" sx={{
                    marginInlineStart: theme.spacing(1), [theme.breakpoints.down('sm')]: {
                        fontSize: '1rem',
                    }
                }}>
                    Are you sure you want to delete this?
                </Typography>
            </Box>
            <ButtonGroup variant="" fullWidth>
                <YesButton color="success" sx={{ borderStartStartRadius: 0 }}>Yes</YesButton>
                <NoButton color="error" sx={{ borderStartEndRadius: 0 }}>No</NoButton>
            </ButtonGroup>
        </Wrapper>
    );
}