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
import { useMediaQuery } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80%",
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
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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
            width={{ xs: "75%", sm: "65%", md: "55%", lg: "45%", xl: "35%" }}
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
                    width={{
                      xs: "4rem",
                      sm: "5rem",
                      md: "5rem",
                      lg: "6rem",
                      xl: "6rem",
                    }}
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
                      gap={{
                        xs: "0rem",
                        sm: "0rem",
                        md: "0.5rem",
                        lg: "0.5rem",
                        xl: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontSize={{
                          xs: "1rem",
                          sm: "1rem",
                          md: "1.2rem",
                          lg: "1.2rem",
                          xl: "1.5rem",
                        }}
                      >
                        Sauleh Etemadi
                      </Typography>
                      <KeyboardArrowRightIcon />
                      <Button size="small" sx={{ height: "2rem" }}>
                        {isSmallScreen ? (
                          <p>PROFILE</p>
                        ) : (
                          <p>VIEW FULL PROFILE</p>
                        )}
                      </Button>
                    </Box>
                    <Typography
                      color="text.secondary"
                      fontSize={{
                        xs: "0.7rem",
                        sm: "0.7rem",
                        md: "1rem",
                        lg: "1rem",
                        xl: "1rem",
                      }}
                    >
                      Associate Professor at Queen's University
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize={{
                        xs: "0.7rem",
                        sm: "0.7rem",
                        md: "1rem",
                        lg: "1rem",
                        xl: "1rem",
                      }}
                    >
                      3w
                    </Typography>
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
              <Box id="program-descriptions">
                <Typography
                  fontSize={{
                    xs: "0.8rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1rem",
                    xl: "1rem",
                  }}
                >
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
              <Box id="program-info"></Box>
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
              <Box id="about-uni">
                <Typography
                  fontSize={{
                    xs: "0.8rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1rem",
                    xl: "1rem",
                  }}
                >
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
