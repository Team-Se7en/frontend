import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledChats = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  //borderBottom: "1px solid gray",
  cursor: "pointer",
  height: "5rem",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "black",
  },
}));

export const StyledTopMessage = styled(Box)(() => ({
  height: "6%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#188DEA",
  opacity: "93%",

  "&:hover": {
    opacity: "100%",
  },
}));
