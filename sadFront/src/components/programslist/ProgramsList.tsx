import ProgramCard from "components/programcard/ProgramCard";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export function ProgramsList() {
  return (
    <Box width={800} sx={{ backgroundColor: "#fafafa" }}>
      <Divider
        textAlign="left"
        sx={{ fontFamily: "roboto", fontSize: "1.2rem", color: "#6e6e6e" }}
      >
        Recent Programs
      </Divider>
      <Box
        height={800}
        my={4}
        display="flex"
        flexDirection={"column"}
        gap={"1rem"}
        p={2}
        padding={"2rem"}
        overflow={"scroll"}
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
