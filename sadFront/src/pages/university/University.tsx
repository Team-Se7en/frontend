import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import { Box } from "@mui/material";
import { ProgramsList } from "../../components/programslist/ProgramsList";
import { Typography } from "@mui/material";
import { Icon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          <Box className="uni-image-and-logo" width={"100%"}>
            <img src="src\assets\images\CroppedUniImage.jpg" width={"100%"} />
          </Box>
          <Box
            className="statistics"
            sx={{ backgroundColor: "#0F1035" }}
            display={"flex"}
            flexDirection={"row"}
            color={"#F2F2F2"}
            justifyContent={"space-between"}
            paddingLeft={"4rem"}
            paddingRight={"4rem"}
            height={"8rem"}
            alignItems={"center"}
          >
            <Box
              className="title-and-city"
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                className="title"
                variant="h5"
                sx={{ fontWeight: "bold" }}
                fontSize={"1.5rem"}
                color={"#F2F2F2"}
              >
                Acadia University
              </Typography>
              <Box
                className="loc-icon-and-tex"
                display={"flex"}
                flexDirection={"row"}
              >
                <LocationOnIcon></LocationOnIcon>
                <Typography
                  className="city-info"
                  variant="h6"
                  fontSize={"1rem"}
                >
                  Nova Scotia, Canada
                </Typography>
              </Box>
            </Box>
            <Box
              className="total-students"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                className="num"
                variant="h4"
                fontWeight={"bold"}
                fontSize={"2rem"}
              >
                840
              </Typography>
              <Typography className="num" variant="h6" fontSize={"0.8rem"}>
                Total Student
              </Typography>
            </Box>
            <Box
              className="international-students"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                className="num"
                variant="h4"
                fontWeight={"bold"}
                fontSize={"2rem"}
              >
                250
              </Typography>
              <Typography className="num" variant="h6" fontSize={"0.8rem"}>
                International Student
              </Typography>
            </Box>
            <Box
              className="ranking"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                className="num"
                variant="h4"
                fontWeight={"bold"}
                fontSize={"2rem"}
              >
                56
              </Typography>
              <Typography className="num" variant="h6" fontSize={"0.8rem"}>
                Ranking(2024)
              </Typography>
            </Box>
            <Box
              className="shared-programs"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                className="num"
                variant="h4"
                fontWeight={"bold"}
                fontSize={"2rem"}
              >
                5
              </Typography>
              <Typography className="num" variant="h6" fontSize={"0.8rem"}>
                Total Shared Programs
              </Typography>
            </Box>
          </Box>
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
