import { Card, styled, CardActions, CardContent } from "@mui/material";

export const StyledProgramCard = styled(Card)(({ theme }) => ({
  borderRadius: "1rem",

  "&:hover": {
    boxShadow: "0.3rem 0.3rem 0.3rem 0.3rem gray",
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "1.5rem",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: "0",
}));
