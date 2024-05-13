import { Box, CssBaseline } from "@mui/material";

import Footer from "../../../components/footer/footer/footer";
import { Padding } from "@mui/icons-material";
import ProfessorCard from "../../../components/professorcard/ProfessorCard";
import ProgramCard from "../../../components/programcard/ProgramCard";
import ProgramsList from "../../../components/programslist/ProgramsList";
import React from "react";
import Search from "../../../components/Search_student/Search";
import SearchStudent from "../../../components/Search_student/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import { StudentHomePage1 } from "../../../assets/images";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import axios from "axios";

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
  // console.log(allPrograms);

  return (
    <Box 
      sx={{
      width: '100%',
      height: 'auto',
      backgroundImage: `url(${StudentHomePage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
  }}>
    <CssBaseline />
    
      <Box>
        <StudentHeader/>
      </Box>
      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '10px'
        }}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "100px",
            marginBottom: "20px",
            marginLeft: "450px",
          }}
        >
          <Search/>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1px",
            gap: "30px",
            paddingRight: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "1px",
              marginBottom: "auto",
              paddingRight: "100px",
            }}
          >
            <StudentPositionSort/>
            <StudentPositionFilter/>

          </Box>
          {/* <ProgramsList allPrograms={[]}/> */}
          <ProfessorCard/>
          <StudentCard/>
        </Box>
      </Box>

      <Box sx={{ margintop: "128px" }}>
        <Footer />
      </Box>
    </Box>

  );
}
