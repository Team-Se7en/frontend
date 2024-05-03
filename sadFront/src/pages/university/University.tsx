import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import { Box } from "@mui/material";
import { ProgramsList } from "../../components/programslist/ProgramsList";

export default function UniversityPage() {
  return (
    <Box>
      <Navbar />
      <Box
        className="page-body"
        display={"flex"}
        flexDirection={"column"}
        marginTop={"4rem"}
        width={"100%"}
        sx={{ backgroundColor: "#fafafa" }}
      >
        <Box
          className="top-info"
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Box className="uni-image" width={"100%"}>
            <img src="src\assets\images\CroppedUniImage.jpg" width={"100%"} />
          </Box>
          <Box className="uni-logo"></Box>
          <Box className="statistics"></Box>
        </Box>
        <Box className="bottem-info" display={"flex"} flexDirection={"row"}>
          <Box className="left-side">
            <ProgramsList></ProgramsList>
          </Box>
          <Box className="right-side"></Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
