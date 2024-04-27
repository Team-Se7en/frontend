import { Card, CardContent, CardActions, Box } from "@mui/material";
import styled from "styled-components";

export const StyledStudentCard = styled(Card)(() => ({
    borderRadius: "1rem",

    "&:hover": {
        webkitBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
        mozBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
    },
    }));

    export const StyledCardContent = styled(CardContent)(() => ({
    display: "flex",
    padding: "1.5rem",
    flexDirection: "column",
    }));

    export const StyledCardActions = styled(CardActions)(() => ({
    padding: "0",
    }));

    export const DeaedLineAndButton = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    marginTop: "0.3rem",
    gap: "3rem",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    }));

    export const ProfAndUni = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    alignItems: "flex-start",
    width: "100%",
    }));

    export const Deadline = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    }));

    export const ProgramInfo = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "0rem",
    }));
