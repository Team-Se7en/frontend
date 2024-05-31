import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledApplyButton = styled(Button)(() => ({
    position: "absolute",
    bottom: '0.5rem',
    width: '17.5rem',
    left: 'calc(50% - 8.75rem)',
    minHeight: '3rem',

    "&:disabled": {
        backgroundColor: "lightgray",
        color: "white",
    }
}));