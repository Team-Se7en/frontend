import { Box, Divider } from "@mui/material";
// import ProgramCardak from "../programcard/ProgramCardak";
// import { SampleCard } from "./SampleData";


export function ProgramsListCopy() {
  return (
    <Box
      width={"60%"}
      minWidth={"30rem"}
      maxWidth={"50rem"}
      sx={{ backgroundColor: "#fafafa" }}
    >
      <Divider
        textAlign="left"
        sx={{ fontFamily: "Arial", fontSize: "1rem", color: "#6e6e6e",  paddingTop: "20px"}}
      >
        Recent Programs
      </Divider>
      {/* <Box
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
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
        <ProgramCardak
          status={SampleCard.status}
          start_date={SampleCard.start_date}
          end_date={SampleCard.end_date}
          tags={SampleCard.tags}
          fee={SampleCard.fee}
          position_start_date={SampleCard.position_start_date}
          duration={SampleCard.duration}
          universityName={SampleCard.universityName}
          title={SampleCard.title}
          capacity={SampleCard.capacity}
          professor={SampleCard.professor}
        ></ProgramCardak>
      </Box> */}
    </Box>
  );
}
