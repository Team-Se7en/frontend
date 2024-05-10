import { Box, CssBaseline } from "@mui/material";

import Footer from "../../../components/footer/footer/footer";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import React from "react";
import Search from "../../../components/Search_student/Search";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import { StudentHomePage1 } from "../../../assets/images";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import axios from "axios";

// import  Search from "../../../components/Search/Search";


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
  console.log(allPrograms);

  return (
    <Box sx={{
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
      
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", marginTop: "100px",marginBottom: "20px", }}>
          <Search />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: '1px', }}>
              <StudentPositionFilter/>
              <StudentPositionSort/>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '80%' }}>
            <ProgramsList/>
          </Box>


      </Box>

      
      <Box sx={{ margintop: "128px" }}>
        <Footer />
      </Box>
      
    </Box>

  );
}
