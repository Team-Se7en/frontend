import ProgramCard from "components/programcard/ProgramCard";
import Box from "@mui/material/Box";

export function ProgramsList() {
  return (
    <Box
      height={800}
      width={800}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      <ProgramCard></ProgramCard>
    </Box>
  );
}
