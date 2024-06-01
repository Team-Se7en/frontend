import {
  useMediaQuery,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  Avatar,
  Typography,
  Divider,
  Stack,
  Skeleton,
} from "@mui/material";
import React from "react";
import { ConvDate } from "../../../lib/DateConvertor";
import { ModalInput, StudentCardViewFullInfo } from "../../../models/CardInfo";
import { style } from "./ProgramModal-styles";
import {
  KeyboardArrowRight,
  Today,
  AccessAlarms,
  AccessTime,
  Paid,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { applyToPosition } from "../../../services/position.service";
import { RequestModel } from "../../../models/Request";
import client from "../../../Http/axios";

export default function TransitionsModal(props: ModalInput) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    client
      .get(
        "https://seven-apply.liara.run/eduportal/positions" +
          "/" +
          props.id +
          "/"
      )
      .then((response) => {
        setFullInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const handleClose = () => setOpen(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [fullInfo, setFullInfo] = React.useState<StudentCardViewFullInfo>();
  const [isApplyAvailable, setIsApplyAvailable] = React.useState(false);

  const handleApply = async () => {
    const requestModel: RequestModel = {
      position_id: props.id,
    };
    try {
      await applyToPosition(requestModel);
      setIsApplyAvailable(false);
      toast.success("Request sent successfully");
    } catch (error) {
      toast.error("Failed to apply to position");
    }
  };

  return (
    <div>
      <Button size="large" onClick={handleOpen} sx={{ padding: "0.2rem" }}>
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
            minWidth={"25rem"}
            width={{ xs: "75%", sm: "65%", md: "55%", lg: "45%", xl: "40%" }}
            height={{ xs: "55%", sm: "60%", md: "65%", lg: "75%", xl: "85%" }}
          >
            {fullInfo ? (
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
                        src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
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
                        <Typography variant="h6">
                          {fullInfo.professor.user.first_name +
                            " " +
                            fullInfo.professor.user.last_name}
                        </Typography>
                        <KeyboardArrowRight />
                        <Button size="small" sx={{ height: "2rem" }}>
                          {isSmallScreen ? (
                            <p>PROFILE</p>
                          ) : (
                            <p>VIEW FULL PROFILE</p>
                          )}
                        </Button>
                      </Box>
                      <Typography color="text.secondary">
                        Associate Professor at{" "}
                        <Link
                          to={{ pathname: "/universitypage" }}
                          state={fullInfo.university_id}
                        >
                          <Typography
                            color="text.secondary"
                            display={"inline"}
                            fontWeight={"bold"}
                          >
                            {fullInfo.university_name}
                          </Typography>
                        </Link>
                      </Typography>
                      <Typography color="text.secondary">
                        {ConvDate(fullInfo.start_date, "week diff")}w
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
                <Box id="program-descriptions" padding={"0.5rem"}>
                  <Typography>{fullInfo.description}</Typography>
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
                    <Today sx={{ fontSize: "1.6rem" }} />
                    <Typography>Starting Date: </Typography>
                    <Typography fontWeight={"bold"}>
                      {ConvDate(fullInfo.position_start_date, "full")}
                    </Typography>
                  </Box>
                  <Box
                    id="application-deadline"
                    display={"flex"}
                    gap={"1rem"}
                    alignItems={"center"}
                  >
                    <AccessAlarms sx={{ fontSize: "1.6rem" }} />
                    <Typography>Application Deadline:</Typography>
                    <Typography fontWeight={"bold"}>
                      {ConvDate(fullInfo.position_end_date, "full")}
                    </Typography>
                  </Box>
                  <Box
                    id="Duration"
                    display={"flex"}
                    gap={"1rem"}
                    alignItems={"center"}
                  >
                    <AccessTime sx={{ fontSize: "1.6rem" }} />
                    <Typography>Duration: </Typography>
                    <Typography fontWeight={"bold"}>{} days</Typography>
                  </Box>
                  <Box
                    id="fee"
                    display={"flex"}
                    gap={"1rem"}
                    alignItems={"center"}
                  >
                    <Paid sx={{ fontSize: "1.6rem" }} />
                    <Typography>Fee: </Typography>
                    <Typography fontWeight={"bold"}>
                      {fullInfo.fee} Rials
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box height={"100%"}>
                <Stack spacing={1}>
                  <Skeleton variant="circular" width={"7rem"} height={"7rem"} />
                  <Skeleton
                    variant="rectangular"
                    width={"90%"}
                    height={"10rem"}
                  />
                  <Skeleton variant="rounded" width={"90%"} height={"10rem"} />
                </Stack>
              </Box>
            )}

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
                  onClick={handleApply}
                  disabled={isApplyAvailable}
                >
                  {isApplyAvailable ? "Apply Now!" : "Already Applied"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
