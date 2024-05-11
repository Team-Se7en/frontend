import { Box, CssBaseline, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";

import Footer from "../../../components/footer/footer/footer";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import { ProfessorHomePage1 } from "../../../assets/images";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import { ProfessorPositions } from "../../../components/professor-positions/ProfessorPositions";
import ProgramCard from "../../../components/programcard/ProgramCard";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import Search from "../../../components/Search_professor/Search";
import StudentCard from "../../../components/studentcard/StudentCard";
import Styles from "../../../Styles";
import { clsx } from "clsx";

export function ProfessorHomePage() {

    const [filterOptions, setFilterOptions] = useState({});
    const [sortOptions, setSortOptions] = useState({});

    const handleFilterChange = (newFilterOptions: SetStateAction<{}>) => {
        setFilterOptions(newFilterOptions);
    };

    const handleSortChange = (newSortOptions: SetStateAction<{}>) => {
        setSortOptions(newSortOptions);
    };

    // Combine filter and sort options into queryParams
    const queryParams = {
        ...filterOptions,
        ...sortOptions
    };
    

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
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

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", marginTop: "100px",marginBottom: "20px", }}>
                    <Search />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: '1px', }}>

                <ProfessorPositionFilter onProfessorFilter={handleFilterChange} />
                <ProfessorPositionSort onSortChange={handleSortChange} />

                </Box>

                <Box sx={{ display: 'flex',  alignItems: "flex-end",justifyContent: 'flex-end', width: '80%' }}>
                {/* <ProfessorPositions/> */}
                <ProfessorPositions queryParams={queryParams} />

                </Box>
                
            </Box>

            <Box sx={{ margintop: "128px" }}>
                <Footer />
            </Box>

        </Box>

    );
}
