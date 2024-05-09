import { Box, CssBaseline, Typography } from "@mui/material";

import Footer from "../../../components/footer/footer/footer";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import { ProfessorHomePage1 } from "../../../assets/images";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import { ProfessorPositions } from "../../../components/professor-positions/ProfessorPositions";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";
import ProfessorRequestFilter from "../../../components/ProfessorRequestFilter/ProfessorRequestFilter";
import ProgramCard from "../../../components/programcard/ProgramCard";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import Search from "../../../components/Search_professor/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import Styles from "../../../Styles";
import { clsx } from "clsx";
import { useState } from "react";

// import Search from "../../../components/Search/Search";







export function ProfessorHomePage() {

    const [currentHeader, setCurrentHeader] = useState('Home');

    const globalClasses = Styles();

    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundImage: `url(${ProfessorHomePage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }}>

            <CssBaseline />

            <Box>
                <ProfessorHeader />

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", marginTop: "100px", }}>
                    {/* <Search /> */}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: '1px', }}>

                    {/* <ProfessorPositionFilter /> */}
                    <ProfessorPositionSort />
                    {/* <ProfessorPositions queryParams={{ fee: 100 }}/> */}

                </Box>
            </Box>

            <Box sx={{ margintop: "128px" }}>
                <Footer />
            </Box>

        </Box>

    );
}
