import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { useMediaQuery } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  borderRadius: "1rem",
  borderColor: "#BFBFBF",
  padding: "1.5rem 1.5rem 0rem 1.5rem",
  gap: "1rem",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <div>
      <Button size="large" onClick={handleOpen}>
        LEARN MORE
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            id="modal-main"
            sx={style}
            minWidth={"27rem"}
            width={{ xs: "75%", sm: "65%", md: "55%", lg: "45%", xl: "40%" }}
            height={{ xs: "55%", sm: "60%", md: "65%", lg: "75%", xl: "85%" }}
          >
            <Box
              id="scrollable-top"
              sx={{ display: "flex" }}
              flexDirection={"column"}
              gap={"1rem"}
              overflow={"auto"}
              height={"100%"}
            >
              <Box id="prof-info-and-share" sx={{ display: "flex" }}>
                <Box id="prof-info" sx={{ display: "flex" }} gap={"0.8rem"}>
                  <Box
                    id="avatar-container"
                    sx={{
                      margin: "0.5rem",
                      marginBottom: 0,
                    }}
                  >
                    <Avatar
                      className="avatar"
                      alt="Sauleh Etemadi"
                      src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
                      sx={{ height: "auto", width: "100%" }}
                    />
                  </Box>
                  <Box
                    id="near-avatar-things"
                    sx={{ display: "flex", flexDirection: "column" }}
                    justifyContent={"center"}
                  >
                    <Box
                      id="name-and-button"
                      sx={{ display: "flex" }}
                      alignItems={"center"}
                    >
                      <Typography variant="h6">Sauleh Etemadi</Typography>
                      <KeyboardArrowRightIcon />
                      <Button size="small" sx={{ height: "2rem" }}>
                        {isSmallScreen ? (
                          <p>PROFILE</p>
                        ) : (
                          <p>VIEW FULL PROFILE</p>
                        )}
                      </Button>
                    </Box>
                    <Typography color="text.secondary">
                      Associate Professor at Queen's University
                    </Typography>
                    <Typography color="text.secondary">3w</Typography>
                  </Box>
                </Box>
                <Box id="share-container"></Box>
              </Box>
              <Divider
                textAlign="center"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                NLP/ML PhD Positions
              </Divider>
              <Box id="program-descriptions" padding={"0.5rem"}>
                <Typography>
                  Fully funded PhD and Master’s positions in Natural Language
                  Processing and Machine Learning are available at the Text
                  Analytics and Machine Learning Group (TAML), led by Dr.
                  Xiaodan Zhu (www.xiaodanzhu.com), at the Department of
                  Electrical and Computer Engineering at Queen’s University,
                  Canada. The students may also be affiliated with the Ingenuity
                  Labs Research Institute at Queen’s University
                  (https://lnkd.in/gcDWiB5T). Our students come from top
                  universities in Canada and across the globe. Our graduates
                  work at top research and industrial organizations and
                  companies in Canada and the U.S. We aim to create a diverse
                  and inclusive learning and research environment.
                </Typography>
              </Box>
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1rem",
                  color: "#404040",
                }}
              >
                Program Info
              </Divider>
              <Box
                id="program-info"
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                padding={"1rem"}
              >
                <Box
                  id="starting-date"
                  display={"flex"}
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  <TodayIcon sx={{ fontSize: "1.6rem" }} />
                  <Typography>Starting Date: </Typography>
                  <Typography fontWeight={"bold"}>
                    Sep. 1, 2024 or Jan. 1, 2025
                  </Typography>
                </Box>
                <Box
                  id="application-deadline"
                  display={"flex"}
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  <AccessAlarmsIcon sx={{ fontSize: "1.6rem" }} />
                  <Typography>Application Deadline:</Typography>
                  <Typography fontWeight={"bold"}>May 30th, 2024</Typography>
                </Box>
                <Box
                  id="Duration"
                  display={"flex"}
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  <AccessTimeIcon sx={{ fontSize: "1.6rem" }} />
                  <Typography>Duration: </Typography>
                  <Typography fontWeight={"bold"}>2 years</Typography>
                </Box>
                <Box
                  id="fee"
                  display={"flex"}
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  <PaidIcon sx={{ fontSize: "1.6rem" }} />
                  <Typography>Fee: </Typography>
                  <Typography fontWeight={"bold"}>
                    7,455,000,000 Rials
                  </Typography>
                </Box>
              </Box>
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1rem",
                  color: "#404040",
                }}
              >
                About Queen’s University
              </Divider>
              <Box
                id="about-uni"
                padding={"0.5rem"}
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
              >
                <Typography>
                  Queen’s university (https://www.queensu.ca/) has over 180
                  years’ history and is one of Canada’s oldest universities. It
                  is a public research university famous for many subjects such
                  as engineering, science, and business. As of 2023, five Nobel
                  Laureates and one Turing Award winner have been affiliated
                  with the university. Queen’s University’s campus is located by
                  the Ontario Lake and is one of the most beautiful campuses in
                  Canada. Queen’s University is located in Kingston, a tourist
                  hotspot, and is situated between several big cities in
                  Canada: Toronto, Montreal, and Ottawa, which are centers for
                  artificial intelligence research and dynamic cities to live
                  and visit.
                </Typography>
                <img
                  src="https://www.globaladmissions.com/uploads/school_pictures/Campus_1.jpg?auto=format,enhance,redeye,compress,true"
                  alt="Queen's University"
                  width={"90%"}
                />
              </Box>
            </Box>

            <Box id="footer" display={"flex"} justifyContent={"center"}>
              <Box
                id="button-container"
                textAlign={"center"}
                width={{
                  xs: "100%",
                  sm: "80%",
                  md: "60%",
                  lg: "40%",
                  xl: "20%",
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    borderRadius: "0.5rem 0.5rem 0px 0px",
                    width: "100%",
                  }}
                >
                  Apply Now!
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}