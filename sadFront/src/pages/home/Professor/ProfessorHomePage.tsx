import { Box, CssBaseline } from "@mui/material";

import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import Search from "../../../components/Search/Search";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import Footer from "../../../components/footer/footer/footer";


export function ProfessorHomePage() {
    return (
        <Box>
            <CssBaseline />

            <ProfessorHeader/>
            <div style={{marginTop:'70px'}}>
            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between" sx={{ gap: '8px' }}>
            
            <ProfessorPositionFilter onProfessorFilter={(filter) => {
                    throw new Error("Function not implemented.");
                }}/>
                
                <div style={{marginTop:'20px',width:'100% '}}>
                <Search/>
                
                </div>
                <div style={{marginTop:'12px'}}>
                <ProfessorPositionSort/>
                </div>

            </Box>
            </div>
            <Footer/>
        </Box>

    );
}
