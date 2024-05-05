import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { StudentCardViewFullInfo } from "../../models/CardInfo";
import ProgramCard from "../programcard/ProgramCard";

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
  console.log(allPrograms);
  return (
    <Box
      width="90%"
      maxWidth={"45rem"}
      minWidth={"20rem"}
      sx={{ backgroundColor: "#fafafa" }}
    >
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
            //tags={program.tags}
            tags={[
              "Machine Learning",
              "Artificial Intelligence",
              "Computer Science",
            ]}
            //fee={program.fee}
            fee={145800000}
            position_start_date={program.position_start_date}
            position_end_date={program.position_end_date}
            // updated_at={program.updated_at}
            start_date={program.start_date}
            end_date={program.end_date}
            description="" //Will be assigned in modal
            capacity={0} //Will be assigned in modal
          />
        ))}
      </Box>
    </Box>
  );
}
