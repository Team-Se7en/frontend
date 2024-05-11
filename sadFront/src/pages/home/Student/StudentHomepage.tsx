import { Box, CssBaseline } from "@mui/material";
import Footer from "../../../components/footer/footer/footer";
import ProgramsList from "../../../components/programslist/ProgramsList";
import React from "react";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import axios from "axios";
import SearchStudent from "../../../components/Search_student/Search";







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
  console.log(allPrograms);

  return (
    // <Box>
    //   <CssBaseline />

    //   <StudentHeader/>
      
    //   <Box style={{marginTop:'70px'}}>
    //   <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" sx={{ gap: '8px' }}>

    //   {/* <StudentPositionFilter/> */}


    //     <Box style={{marginTop:'20px',width:'100% '}}>
    //             <Search/>
    //     </Box>

    //     <Box style={{marginTop:'12px'}}>
    //             <StudentPositionSort/>
    //     </Box>

    //   </Box>
    //   </Box>
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
