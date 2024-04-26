import * as React from "react";
import ProgramCard from "components/programcard/ProgramCard";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { SampleCard } from "./SampleData";
import axios from "axios";
import { StudentCardViewFullInfo } from "@models";

export function ProgramsList() {
  const [allPrograms, setAllPrograms] =
    React.useState<StudentCardViewFullInfo[]>();

  React.useEffect(() => {
    axios
      .get("https://seven-apply.liara.run/eduportal/positions")
      .then((response) => {
        setAllPrograms(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!allPrograms) return null;

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
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        gap={"0.2rem"}
        p={2}
        padding={"0rem"}
      >
        {allPrograms.map((program, index) => (
          <ProgramCard
            key={index}
            professor={program.professor}
            id={program.id}
            status={program.status}
            title={program.title}
            tags={program.tags}
            fee={program.fee}
            duration={program.duration}
            starts_at={program.starts_at}
            updated_at={program.updated_at}
            created_at={program.created_at}
            deadline={program.deadline}
            description="" //To be assigned later
            capacity={0} //To be assigned later
          />
        ))}
      </Box>
    </Box>
  );
}
