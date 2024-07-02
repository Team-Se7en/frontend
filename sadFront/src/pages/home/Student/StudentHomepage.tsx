import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";

import Footer from "../../../components/footer/footer/footer";
import PaginationControlled from "../../../components/homepage_pagination/PaginationControlled"
import ProfessorCard from "../../../components/professorcard/ProfessorCard";
import SearchStudent from "../../../components/Search_student/Search";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import { StudentHomePage1 } from "../../../assets/images";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import { StudentPositions } from "../../../components/studentpositions/StudentPositions";

export default function StudentHomepage() {
  const [data,setdata]=useState<StudentCardViewFullInfo[]>([]);

    const [filterOptions, setFilterOptions] = useState({
      term: "",
      feeMax: 9999999999,
      feeMin: 0,
      year: "",
      filled: 0,
    });

  const [sortOptions, setSortOptions] = useState("");

  const [cards, setCards] = useState([]);

  React.useEffect(() => {

    setCards({
      ...cards,
      term: filterOptions.term[0],
      feeMax: filterOptions.feeMax,
      feeMin: filterOptions.feeMin,
      year: filterOptions.year[0],
      filled: filterOptions.filled,
      ordering: sortOptions,
    });
  }, [sortOptions, filterOptions]);
    

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
          <SearchStudent setData={setdata} />
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
            <StudentPositionSort onSortChange={setSortOptions}/>
            <StudentPositionFilter onStudentFilter={setFilterOptions}/>

          </Box>

          <Box sx = {{width: "100%"}}>
          <StudentPositions data={data} queryParams={cards}/>
          
          <Box sx = {{display: "flex", flexDirection: "row", marginTop: "16px", marginBottom: '20px', marginLeft: "225px", paddingRight: "0px"}}>
            <PaginationControlled/>
          </Box>

          <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "10px", backgroundColor:'white', maxWidth: "875px"}}>
            <ProfessorCard/>
          </Box>

          <Box sx = {{display: "flex", flexDirection: "row", margin: "16px 225px auto",}}>
            <PaginationControlled/>
          </Box>

            
          </Box>

          
        </Box>



      </Box>

      <Box sx={{ paddingTop: "128px" }}>
        <Footer />
      </Box>
    </Box>

  );
}
