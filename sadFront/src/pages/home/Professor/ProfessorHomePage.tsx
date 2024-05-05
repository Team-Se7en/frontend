import { Box, CssBaseline } from "@mui/material";

import Footer from "../../../components/footer/footer/footer";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";
import ProfessorRequestFilter from "../../../components/ProfessorRequestFilter/ProfessorRequestFilter";
import ProgramCard from "../../../components/programcard/ProgramCard";
import Search from "../../../components/Search/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import StudentRequestFilter from "../../../components/StudentRequestFilter/StudentRequestFilter";
import StudentRequestSort from "../../../components/StudentRequestSort/StudentRequestSort";

export function ProfessorHomePage() {
    return (
        <Box>
            <CssBaseline />

            <ProfessorHeader/>
            <Box style={{marginTop:'70px'}}>
            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" sx={{ gap: '8px' }}>
            
            <ProfessorPositionFilter/>
                
                <Box style={{marginTop:'20px',width:'100% '}}>
                <Search/>
                </Box>
                
                <Box style={{marginTop:'12px'}}>
                <ProfessorPositionSort/>
                </Box>

            </Box>

            <Box>
            <StudentCard name={"Ali Alizadeh"} university={"Iust"} status={"pending"}
                        field={"Computer Science"} positionTitle={"Software"} requestDate={"5/4/2024"}
                        fee={"15000"} startDate={"1/1/2025"}
                        coverLetter={"I’m living the dream.I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. Today, I’m open to working as a software engineer, and I get to show off all these elements of who I am."}/>
            </Box>



            
            </Box>
            <Footer/>
        </Box>

    );
}
