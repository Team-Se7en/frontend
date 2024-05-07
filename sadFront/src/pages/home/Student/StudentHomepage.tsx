import { Box } from "@mui/material";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import React from "react";
import Footer from "../../../components/footer/footer/footer";
import  SearchStudent from "../../../components/Search_student/Search";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import axios from "axios";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";

export default function StudentHomepage() {
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
  //console.log(allPrograms);

  return (
    <div>
      <div>
        <StudentHeader />
      </div>
      <div style={{marginTop:'100px'}}>
      <SearchStudent />
      </div>
      <Box
        className="main"
        sx={{ backgroundColor: "#fafafa" }}
        marginTop={"0.5rem"}
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"2rem"}
      >
        <ProgramsList></ProgramsList>
      </Box>
      <Footer />
    </div>
  );
}
