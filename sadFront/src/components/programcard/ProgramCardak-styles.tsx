import {
  Card,
  styled,
  CardActions,
  CardContent,
  Box,
  getAppBarUtilityClass,
} from "@mui/material";

export const StyledProgramCard = styled(Card)(({ theme }) => ({
  borderRadius: "1rem",

  "&:hover": {
    webkitBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
    mozBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  padding: "1.5rem",
  flexDirection: "column",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: "0",
}));

export const DeaedLineAndButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "0.3rem",
  gap: "3rem",
  justifyContent: "space-between",
  textAlign: "center",
  alignItems: "center",
  width: "100%",
}));

export const ProfAndUni = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  alignItems: "flex-start",
  width: "100%",
}));

export const Deadline = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
}));

export const ProgramInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0rem",
}));