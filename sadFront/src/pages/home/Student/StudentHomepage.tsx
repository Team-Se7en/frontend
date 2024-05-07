import { Box} from "@mui/material";
import { ProgramsList } from "../../../components/programslist/ProgramsList";

import Footer from "../../../components/footer/footer/footer";
import  SearchStudent from "../../../components/Search_student/Search";
import StudentHeader from "../../../components/home_st_header/StudentHeader";


export default function StudentHomepage() {
  return (
<div>
  <div>
      <StudentHeader/>
      </div>
      <div style={{marginTop:'100px'}}>
      <SearchStudent />
      </div>
      <Box
        className="main"
        sx={{ backgroundColor: "#fafafa" }}
        marginTop={"0.5rem"}
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"2rem"}
      >
        <ProgramsList></ProgramsList>
      </Box>
      <Footer />
      </div>

  );
}
