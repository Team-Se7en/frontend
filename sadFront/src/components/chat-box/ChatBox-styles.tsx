import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledChats = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0rem",
  borderBottom: "1px solid gray",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "black",
  },
}));
