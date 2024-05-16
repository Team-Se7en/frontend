import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledNotification = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "0.6rem",
  borderBottom: "1px solid #F2F2F2",
  justifyContent: "space-between",
  backgroundColor: "white",

  "&:hover": {
    backgroundColor: "#F2F2F2",
  },
}));
