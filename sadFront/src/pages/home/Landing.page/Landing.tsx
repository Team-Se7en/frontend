import { Box } from "@mui/material";
import Footer from "../../../components/footer/footer/footer";
import Navbar from "../../../components/navbar/navbar/navbar";

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
