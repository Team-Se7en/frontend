import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledNotification = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  borderBottom: "1px solid #F2F2F2",
  borderTop: "1px solid #F2F2F2",
  justifyContent: "space-between",
  backgroundColor: "white",
  width: "100%",
  paddingBottom: "1rem",
  paddingTop: "1rem",

  "&:hover": {
    backgroundColor: "#F2F2F2",
  },
}));
