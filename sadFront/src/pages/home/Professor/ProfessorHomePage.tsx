import { Box, CssBaseline, Typography } from "@mui/material";

import Footer from "../../../components/footer/footer/footer";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";
import { ProfessorRecentPositions } from "../../../components/professor-recent-positions/ProfessorRecentPositions";
import ProfessorRequestFilter from "../../../components/ProfessorRequestFilter/ProfessorRequestFilter";
import ProgramCard from "../../../components/programcard/ProgramCard";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import Search from "../../../components/Search/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import StudentRequestFilter from "../../../components/StudentRequestFilter/StudentRequestFilter";
import StudentRequestSort from "../../../components/StudentRequestSort/StudentRequestSort";
import Styles from "../../../Styles";
import { clsx } from "clsx";
import { useState } from "react";

export function ProfessorHomePage() {

    const [currentHeader, setCurrentHeader] = useState('Home');
    
    const globalClasses = Styles();

    return (
        <Box>
            <CssBaseline />
            
            <ProfessorHeader/>

            {/* <Box style={{marginTop:'100px'}}> */}
            <Box style={{ marginTop: '100px', display: 'flex', flexDirection: 'column' , width: '100%',}}>

                
            {/* <Box sx={{ gap: '8px' }}> */}
            <Box display="flex" justifyContent="flex-end">

                <Search/>
                </Box>
                
            <Box display="flex" flexDirection="column" alignItems="flex-start">

            <ProfessorPositionFilter/>
            <ProfessorPositionSort/>

            </Box>


            
            </Box>
            <Footer/>
        </Box>

    );
}
