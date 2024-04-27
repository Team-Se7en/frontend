import { Box, ButtonGroup, Typography } from "@mui/material";
import { NoButton, Wrapper, YesButton } from "./DeleteDialog-styles";
import Styles from "Styles";
import clsx from "clsx";
import { WarningRounded } from "@mui/icons-material";
import theme from "Theme";

export interface DeleteDialogProps {
    onYesClick?: () => void;
    onNoClick?: () => void;
}

export default function DeleteDialog(props: DeleteDialogProps) {

    const handleYesClick = () => {
        props.onYesClick?.();
    };

    const handleNoClick = () => {
        props.onNoClick?.();
    };

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
            <ButtonGroup variant="text" fullWidth>
                <YesButton color="success" sx={{ borderRadius: 0 }} onClick={handleYesClick}>Yes</YesButton>
                <NoButton color="error" sx={{ borderRadius: 0 }} onClick={handleNoClick}>No</NoButton>
            </ButtonGroup>
        </Wrapper>
    );
}