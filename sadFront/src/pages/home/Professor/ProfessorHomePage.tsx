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
            
            <ProfessorPositionFilter/>
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

                        {showContent(currentHeader)}
            {/* <StudentCard name={"Ali Alizadeh"} university={"Iust"} status={"pending"}
                        field={"Computer Science"} positionTitle={"Software"} requestDate={"5/4/2024"}
                        fee={"15000"} startDate={"1/1/2025"}
                        coverLetter={"I’m living the dream.I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. Today, I’m open to working as a software engineer, and I get to show off all these elements of who I am."}/> */}
            </Box>
                </Box>
            </Box>



            {/* <Box><ProgramsList/></Box> */}
            {/* <Box><ProgramCard professor={undefined} description={""} capacity={0} id={0} title={""} status={"d:/project/university_project/Sad/frontend/sadFront/src/models/Status".Open} start_date={undefined} end_date={undefined} tags={[]} fee={0} position_start_date={undefined} position_end_date={undefined}/></Box> */}


            
            </Box>
            <Footer/>
        </Box>

    );
}
