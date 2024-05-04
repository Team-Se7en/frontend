import { Box} from "@mui/material";
import { ProgramsList } from "../../../components/programslist/ProgramsList";
import Navbar from "../../../components/navbar/navbar/navbar";
import Footer from "../../../components/footer/footer/footer";
import  Search from "../../../components/Search/Search";


export default function StudentHomepage() {
  return (
<div>
  <div>
      <Navbar showAuthButton={false} />
      </div>
      <div style={{marginTop:'20px'}}>
      <Search />
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
