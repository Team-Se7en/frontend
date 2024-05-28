import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledChats = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0.6rem",
  borderBottom: "1px solid gray",

  "&:hover": {
    backgroundColor: "black",
  },
}));
