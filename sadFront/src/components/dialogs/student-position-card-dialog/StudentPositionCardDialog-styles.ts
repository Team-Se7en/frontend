import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledApplyButton = styled(Button)(() => ({
    position: "absolute",
    bottom: '0.5rem',
    width: '14rem',
    left: 'calc(50% - 7rem)',
    minHeight: '3rem',

    "&:disabled": {
        backgroundColor: "lightgray",
        color: "white",
    }
}));