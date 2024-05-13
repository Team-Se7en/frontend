import { Box } from "@mui/material";
import ProgramCard from "../programcard/ProgramCard";
import React from "react";
import { StudentCardViewFullInfo } from "../../models/CardInfo";
import axios from "axios";

// import axios from "axios";





interface SendData {
  allPrograms: StudentCardViewFullInfo[];
}
const ProgramsList:React.FC<SendData>=({allPrograms})=>
  {
  // const [allPrograms, setAllPrograms] =
  //   React.useState<StudentCardViewFullInfo[]>();
  
  // React.useEffect(() => {
  //   axios
  //     .get("https://seven-apply.liara.run/eduportal/positions")
  //     .then((response) => {
  //       setAllPrograms(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });
  // }, []);

  if (!allPrograms) return null;
  return (
    <Box
      width="90%"
      maxWidth={"55rem"}
      minWidth={"20rem"}
      sx={{ backgroundColor: "#365486" }}
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
            tags={program.tags}
            fee={program.fee}
            position_start_date={program.position_start_date}
            position_end_date={program.position_end_date}
            updated_at={program.updated_at}
            start_date={program.start_date}
            end_date={program.end_date}
            created_at={program.created_at}
            description=""
            capacity={0}
            university_name={program.university_name}
            university_id={program.university_id}
          />
        ))}
      </Box>
    </Box>
  );
}
export default ProgramsList;
