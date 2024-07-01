import React from "react";
import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Divider } from "@mui/material";
import axios from "axios";
import { University } from "../../models/University";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import StudentPositionCard from "../../components/student-position-card/StudentPositionCard";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const onNavClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function UniversityPage() {
  const [uniInfo, setuniInfo] = React.useState<University>();
  const location = useLocation();
  const uniID = location.state;

  React.useEffect(() => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/universities" +
          "/" +
          uniID +
          "/"
      )
      .then((response) => {
        setuniInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!uniInfo) return null;
  //console.log(uniInfo);

  const statisticTitles = [
    "Total Students",
    "International Students",
    "Ranking (2024)",
    "Total Shared Programs",
  ];
  const statistics = [
    uniInfo.total_student_count,
    uniInfo.international_student_count,
    uniInfo.rank,
    uniInfo.position_count,
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Box
        className="page-body"
        display={"flex"}
        flexDirection={"column"}
        marginTop={"4rem"}
        paddingBottom={"4rem"}
        width={"100%"}
        sx={{ backgroundColor: "#fafafa" }}
        gap={"2rem"}
      >
        <Box
          className="top-info"
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Box className="uni-image" width={"100%"}>
            <img src={uniInfo.image} width={"100%"} />
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
                <img src={uniInfo.icon} width={"80%"} height={"80%"} />
              </Box>
              <Typography
                className="title"
                variant="h5"
                sx={{ fontWeight: "bold" }}
                fontSize={"1.5rem"}
                color={"#F2F2F2"}
              >
                {uniInfo.name}
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
                  {uniInfo.city}, {uniInfo.country}
                </Typography>
              </Box>
            </Box>
            {statisticTitles.map((title, index) => (
              <Box
                key={"index"}
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
          paddingLeft={"10%"}
          paddingRight={"10%"}
          paddingTop={"2rem"}
          gap={"4rem"}
        >
          <Box
            className="left-side"
            display={"flex"}
            flexDirection={"column"}
            gap={"3rem"}
            width={"60%"}
          >
            <Box
              className="about-uni"
              display={"flex"}
              flexDirection={"column"}
            >
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1.1rem",
                  color: "#6e6e6e",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                About {uniInfo.name}
              </Divider>
              <Box padding={"1rem"}>
                <Typography className="uni-description" fontSize={"1rem"}>
                  {uniInfo.description}
                </Typography>
              </Box>
            </Box>
            <Box className="map-section">
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1.1rem",
                  color: "#6e6e6e",
                  marginBottom: "2rem",
                  fontWeight: "bold",
                }}
              >
                Where is it?
              </Divider>
              <Box className="map" width={"50rem"} height={"20rem"}></Box>
            </Box>
            <Box id="active-programs">
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1.1rem",
                  color: "#6e6e6e",
                  marginBottom: "2rem",
                  fontWeight: "bold",
                }}
              >
                Active Programs Here
              </Divider>
              <Box
                className="recent-programs"
                display={"flex"}
                flexDirection={"column"}
                gap={"0.5rem"}
              >
                {uniInfo.recent_positions.map((program, index) => (
                  <StudentPositionCard
                    key={index}
                    professor={program.professor}
                    id={program.id}
                    status={program.status}
                    title={program.title}
                    tags={program.tags}
                    fee={program.fee}
                    position_start_date={program.position_start_date}
                    position_end_date={program.position_end_date}
                    start_date={program.start_date}
                    end_date={program.end_date}
                    description="" //Will be assigned in modal
                    capacity={0} //Will be assigned in modal
                    university_name={program.university_name}
                    university_id={program.university_id}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="right-side" width={"40%"}>
            <Box
              className="top-locked"
              padding={"5%"}
              width={"80%"}
              maxHeight={"25rem"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"2rem"}
              sx={{
                backgroundColor: "white",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#BFBFBF",
              }}
              borderRadius={"1rem"}
            >
              <Box
                className="about-programs"
                width={"85%"}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={"0.7rem"}
              >
                <Typography
                  variant="h6"
                  fontSize={"1.1rem"}
                  textAlign={"center"}
                >
                  Here exist{" "}
                  <Box
                    fontWeight={"bold"}
                    display={"inline"}
                    fontSize={"1.3rem"}
                  >
                    {uniInfo.recent_positions.length} active programs
                  </Box>{" "}
                  from profs of this university
                </Typography>
                <Box className="button-container" textAlign={"center"}>
                  <Button
                    onClick={(e) => onNavClick(e, "active-programs")}
                    variant="contained"
                    disableElevation
                    sx={{
                      borderRadius: "0.3rem",
                      width: "90%",
                    }}
                  >
                    Go to active programs
                  </Button>
                </Box>
              </Box>
              <Box
                className="about-addmissions"
                width={"85%"}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={"0.7rem"}
              >
                <Typography
                  variant="h6"
                  fontSize={"1.1rem"}
                  textAlign={"center"}
                >
                  <Box
                    fontWeight={"bold"}
                    display={"inline"}
                    fontSize={"1.3rem"}
                  >
                    0 Students
                  </Box>{" "}
                  have been admitted via 7Apply so far
                </Typography>
                <Box className="button-container" textAlign={"center"}>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      borderRadius: "0.3rem",
                      width: "90%",
                      backgroundColor: "#0F1035",
                    }}
                  >
                    See History Of Admissions
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
