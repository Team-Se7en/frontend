import Navbar from "../../../components/navbar/navbar/navbar";
import Footer from "../../../components/footer/footer/footer";
import { Box } from "@mui/material";

function Landing() {
  return (
    <div>
      <Navbar showAuthButtons={true} /> 
      <Box sx={{ height: '470px' }} />
      <Footer />
    </div>
  );
}

export default Landing;
