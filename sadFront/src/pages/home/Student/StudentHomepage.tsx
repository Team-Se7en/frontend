import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";

import Footer from "../../../components/footer/footer/footer";
import Pagination from '@mui/material/Pagination';
import ProfessorCard from "../../../components/professorcard/ProfessorCard";
import SearchStudent from "../../../components/Search_student/Search";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import StudentHeader from "../../../components/home_st_header/StudentHeader";
import { StudentHomePage1 } from "../../../assets/images";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import { StudentPositions } from "../../../components/studentpositions/StudentPositions";
import {makeStyles} from '@mui/styles';
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  pagination: {
      '& .MuiPaginationItem-root': {
          color: '#0F1035',
      },
      '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#0F1035',
          color: '#fff',
      },
  },
  pageInfo: {
      marginBottom: '10px',
  },
});

interface Params {
  [key: string]: string;
  page1: string;
  page2: string;
}

export default function StudentHomepage() {
  const [data,setdata]=useState<StudentCardViewFullInfo[]>([]);

    const [filterOptions, setFilterOptions] = useState({
      term: "",
      feeMax: 9999999999,
      feeMin: 0,
      year: "",
      filled: 0,
    });

  const params = useParams<Params>();
  const { page1, page2 } = params;

  const [sortOptions, setSortOptions] = useState("");

  const [cards, setCards] = useState([]);

  const classes = useStyles();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {      
    window.location.href = "/studenthomepage/page1="+value+"/page2="+page2.split("=")[1];
    
}

const handleChange2 = (_: React.ChangeEvent<unknown>, value: number) => {      
  window.location.href = "/studenthomepage/page1="+page1.split("=")[1]+"/page2="+value;
  
}


  React.useEffect(() => {

    console.log(filterOptions, "this is filter options");
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
          <StudentPositions data={data} queryParams={cards} page={page1}/>
          
          <Box sx = {{display: "flex", flexDirection: "row", marginTop: "16px", marginBottom: '20px', marginLeft: "225px", paddingRight: "0px"}}>
            <div className={classes.root}>
              <Pagination
                  count={10}
                  page={Number(page1.split("=")[1])}
                  onChange={handleChange}
                  className={classes.pagination}
              />
              </div>
              
          </Box>

          <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "10px", maxWidth: "875px"}}>
            <ProfessorCard page = {Number(page2.split("=")[1])}/>
          </Box>

          <Box sx = {{display: "flex", flexDirection: "row", margin: "16px 225px auto",}}>
              <div className={classes.root}>
                
              <Pagination
                  count={10}
                  page={Number(page2.split("=")[1])}
                  onChange={handleChange2}
                  className={classes.pagination}
              />
              </div>
              
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
