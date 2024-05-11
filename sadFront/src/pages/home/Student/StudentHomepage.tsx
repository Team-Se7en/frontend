import { Box } from "@mui/material";
import ProgramsList from "../../../components/programslist/ProgramsList";
import React from "react";
import Footer from "../../../components/footer/footer/footer";
import  SearchStudent from "../../../components/Search_student/Search";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import axios from "axios";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";

export default function StudentHomepage() {
  const [allPrograms, setAllPrograms] =
    React.useState<StudentCardViewFullInfo[]>();
  const [condition,setcondition]=React.useState<boolean>(true);
  React.useEffect(() => {
    axios
      .get("https://seven-apply.liara.run/eduportal/positions")
      .then((response) => {
        if(condition===true)
      {
        setAllPrograms(response.data);
        setcondition(false);
      }
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
      <SearchStudent setData={setAllPrograms} />
      </div>
      <Box
        className="main"
        sx={{ backgroundColor: "#fafafa" }}
        marginTop={"0.5rem"}
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"2rem"}
      >
        <ProgramsList allPrograms={allPrograms}/>
      </Box>
      <Footer />
    </div>
  );
}
