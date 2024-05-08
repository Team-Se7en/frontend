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

interface showContentProps {
    header: string;
}

function showContent(header: string) {
    switch (header) {
        case 'Home':
            return (
                <>
                    <ProfessorRecentPositions />
                </>
            )


        default:
            return (
                <></>
            )
    }
}

export function ProfessorHomePage() {

    const [currentHeader, setCurrentHeader] = useState('Home');
    
    const headerChange = (header: string) => {
        setCurrentHeader(header);
    }

    const globalClasses = Styles();

    return (
        <Box>
            <CssBaseline />
            
            <ProfessorHeader changeHeader={headerChange}/>

            <Box style={{marginTop:'70px'}}>
            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" sx={{ gap: '8px' }}>
            
            <ProfessorPositionsFilter/>
                <Box className={globalClasses.flexColumn}>
                        
                    <Box className={clsx(globalClasses.flexRow)}>
                <Box style={{marginTop:'20px',width:'100% '}}>
                <Search/>
                </Box>
                
                <Box style={{marginTop:'12px'}}>
                <ProfessorPositionSort/>
                </Box>

                
                    </Box>
                    <Box>

            </Box>
                </Box>
            </Box>


            
            </Box>
            <Footer/>
        </Box>

    );
}
