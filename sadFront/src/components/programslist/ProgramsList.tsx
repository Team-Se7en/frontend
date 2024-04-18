import ProgramCard from "components/programcard/ProgramCard";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export function ProgramsList() {
  return (
    <Box
      width={"60%"}
      minWidth={"30rem"}
      maxWidth={"50rem"}
      sx={{ backgroundColor: "#fafafa" }}
    >
      <Divider
        textAlign="left"
        sx={{ fontFamily: "roboto", fontSize: "1rem", color: "#6e6e6e" }}
      >
        Recent Programs
      </Divider>
      <Box
        height={"30rem"}
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        gap={"0.2rem"}
        p={2}
        padding={"0rem"}
        overflow={"auto"}
      >
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
      </Box>
    </Box>
  );
}
