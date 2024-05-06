import { Card, CardContent, CardActions, Box } from "@mui/material";
import styled from "styled-components";

export const StyledProgramCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

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
  gap: "0.5rem",
}));

export const StyledCardActions = styled(CardActions)(() => ({
  padding: "0",
}));

export const DeaedLineAndButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "0.3rem",
  gap: "1rem",
  textAlign: "center",
  alignItems: "center",
  width: "30%",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const ProfAndUni = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    width: "100%",
    gap: "0.2rem",
    alignItems: "flex-start",
  },
}));

export const Deadline = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
  },
}));

export const ProgramInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",

  [theme.breakpoints.down("lg")]: {
    gap: "0rem",
  },
}));

export const BottemInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "0rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
