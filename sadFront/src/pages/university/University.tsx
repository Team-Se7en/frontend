import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import { Box } from "@mui/material";
import { ProgramsList } from "../../components/programslist/ProgramsList";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function UniversityPage() {
  const statisticTitles = [
    "Total Students",
    "International Students",
    "Ranking (2024)",
    "Total Shared Programs",
  ];
  const statistics = [840, 250, 56, 5];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Box
        className="page-body"
        display={"flex"}
        flexDirection={"column"}
        marginTop={"4rem"}
        width={"100%"}
        sx={{ backgroundColor: "#fafafa" }}
        gap={"1rem"}
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
          <Box
            className="statistics"
            sx={{ backgroundColor: "#0F1035" }}
            display={"flex"}
            flexDirection={"row"}
            color={"#F2F2F2"}
            justifyContent={"space-between"}
            paddingLeft={"15%"}
            paddingRight={"15%"}
            height={"8.5rem"}
            alignItems={"center"}
          >
            <Box
              className="logo-title-and-city"
              display={"flex"}
              flexDirection={"column"}
              marginBottom={"7rem"}
            >
              <Box
                className="logo-container"
                width={"8rem"}
                height={"8rem"}
                borderRadius={"1rem"}
                top={"48%"}
                left={"9%"}
                sx={{ backgroundColor: "#fafafa" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginBottom={"0.8rem"}
              >
                <img
                  src="src\assets\icons\acadia-university.webp"
                  width={"80%"}
                  height={"80%"}
                />
              </Box>
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
            {statisticTitles.map((title, index) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="h4" fontSize={"2.2rem"}>
                  {statistics[index]}
                </Typography>
                <Typography variant="h6" fontSize={"0.8rem"}>
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          className="bottem-info"
          display={"flex"}
          flexDirection={"row"}
          padding={"2rem"}
        >
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
