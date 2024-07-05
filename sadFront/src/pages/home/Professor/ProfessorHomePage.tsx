import * as React from "react";

import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

import Footer from "../../../components/footer/footer/footer";
import Pagination from '@mui/material/Pagination';
import { ProfessorCardViewShortInfo } from "../../../models/CardInfo";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import { ProfessorHomePage1 } from "../../../assets/images";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import { ProfessorPositions } from "../../../components/professor-positions/ProfessorPositions";
import {ProfessorPositionsQueryParams} from "../../../models/QueryParams.ts";
import SearchProfessor from "../../../components/Search_professor/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import { getProfessorPositions } from "../../../services/position.service";
import {makeStyles} from '@mui/styles';
import { useParams } from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';

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

export function ProfessorHomePage() {
    const [filterOptions, setFilterOptions] = useState({
      term: "",
      feeMax: 9999999999,
      feeMin: 0,
      year: "",
    });
  
    const [sortOptions, setSortOptions] = useState("");
    const [cards, setCards] = useState({});
    const [data,setdata]=useState<ProfessorCardViewShortInfo[]>([]);
    const [page, setPage] = useState(1);
    const classes = useStyles();
    
    const params = useParams<Params>();
    const { page1, page2 } = params;


    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {      
        window.location.href = "/professorhomepage/page1=" + value + "/page2=" + page2.split("=")[1];
        
        
    }

    const handleChange2 = (_: React.ChangeEvent<unknown>, value: number) => {      
      window.location.href = "/professorhomepage/page1="+ page1.split("=")[1] + "/page2="+value;
      
    }


  useEffect(() => {
    setCards({
      ...cards,
      term: filterOptions.term[0],
      feeMax: filterOptions.feeMax,
      feeMin: filterOptions.feeMin,
      year: filterOptions.year[0],
      ordering: sortOptions,
      

    });
    
      
      getProfessorPositions(Number(page1.split("=")[1]), {...cards}).then(r => {
          try {
              if(r.data.results !== undefined){
                  setdata(r.data.results)
              }
              
          } catch (error) {
              console.log(error);

          }
      })    
}, [sortOptions, filterOptions]);


  const [modelToAdd, setModelToAdd] = useState<ProfessorCardViewShortInfo>();
  const handleProfessorPositionAddition = (
    model: ProfessorCardViewShortInfo
  ) => {
    setModelToAdd(model);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${ProfessorHomePage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <CssBaseline />

      <Box>
        <ProfessorHeader
          handleProfessorPositionAddition={handleProfessorPositionAddition}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "100px",
            marginBottom: "20px",
            marginLeft: "450px",
            marginRight: 'auto',
            minWidth: "calc(26rem * (10 / 4))",
          }}
        >

          <SearchProfessor setData={setdata}/>
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
            <ProfessorPositionSort onSortChange={setSortOptions} />
            <ProfessorPositionFilter onProfessorFilter={setFilterOptions} />
          </Box>



        <Box sx = {{width: "100%"}}>
          <ProfessorPositions data={data} modelToAdd={modelToAdd} queryParams={cards} />

            <Box sx={{display: "flex", flexDirection: "row", margin: "16px 225px auto",}}>
              <div className={classes.root}>
              <Pagination
                  count={10}
                  page={Number(page1.split("=")[1])}
                  onChange={handleChange}
                  className={classes.pagination}
              />
              </div>

            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "1px",
                maxWidth: 790
            }}>
                <StudentCard page = {Number(page2.split("=")[1])}/>

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
