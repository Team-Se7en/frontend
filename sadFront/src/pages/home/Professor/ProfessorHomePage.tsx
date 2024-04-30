import { Box, CssBaseline } from "@mui/material";

import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";

export function ProfessorHomePage() {

    return (
        <Box>
            <CssBaseline />

            <ProfessorHeader/>

            <ProfessorPositionFilter onProfessorFilter={function (filter: IIRFilterOptions): void {
                throw new Error("Function not implemented.");
            } }/>

            <ProfessorPositionsFilter onProfessorFilter={function (filter: IIRFilterOptions): void {
                throw new Error("Function not implemented.");
            } }/>
            
            <ProfessorPositionSort/>
            
            <ProfessorPositionsSort/>


        </Box>
    );
}
