import { Box, CssBaseline } from "@mui/material";

import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";
import ProfessorRequestFilter from "../../../components/ProfessorRequestFilter/ProfessorRequestFilter";

export function ProfessorHomePage() {
    return (
        <Box>
            <CssBaseline />

            <ProfessorHeader/>

            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" overflowX="hidden" sx={{ gap: '8px' }}>
                <ProfessorRequestFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>

                {/* <ProfessorPositionFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>

                <ProfessorPositionsFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/> */}

                {/* <ProfessorPositionSort/> */}
                
                <ProfessorPositionsSort/>
            </Box>

        </Box>
    );
}