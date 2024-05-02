import { Box, CssBaseline } from "@mui/material";

import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import ProfessorPositionsFilter from "../../../components/ProfessorPositionsFilter/ProfessorPositionsFilter";
import ProfessorPositionsSort from "../../../components/ProfessorPositionsSort/ProfessorPositionsSort";
import ProfessorRequestFilter from "../../../components/ProfessorRequestFilter/ProfessorRequestFilter";
import StudentPositionFilter from "../../../components/StudentPositionFilter/StudentPositionFilter";
import StudentPositionSort from "../../../components/StudentPositonSort/StudentPositionSort";
import StudentRequestFilter from "../../../components/StudentRequestFilter/StudentRequestFilter";
import StudentRequestSort from "../../../components/StudentRequestSort/StudentRequestSort";

export function ProfessorHomePage() {
    return (
        <Box>
            <CssBaseline />

            <ProfessorHeader/>

            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" sx={{ gap: '8px' }}>

            {/* <ProfessorPositionFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>
                
                <ProfessorRequestFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>

                <ProfessorPositionsFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>

                <ProfessorPositionSort/>
                
                <ProfessorPositionsSort/> */}


                {/* <StudentRequestFilterFilter onProfessorFilter={function (filter: IIRFilterOptions): void {
                    throw new Error("Function not implemented.");
                } }/>

                <StudentPositionFilter onProfessorFilter={function (filter: IIRFilterOptions): void {
                    throw new Error("Function not implemented.");
                } }/> */}

                {/* <StudentPositionSort onProfessorFilter={function (filter: FilterOptions): void {
                    throw new Error("Function not implemented.");
                } }/>

                <StudentRequestSort/> */}

                
            </Box>

        </Box>
    );
}