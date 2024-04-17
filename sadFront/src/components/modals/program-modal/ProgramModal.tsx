import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Icon from "@mui/material/Icon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
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
          <Box id="modal-main" sx={style}>
            <Box id="prof-info-and-share" sx={{ display: "flex" }}>
              <Box id="prof-info" sx={{ display: "flex" }} gap={"0.8rem"}>
                <Avatar
                  className="avatar"
                  alt="Sauleh Etemadi"
                  src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
                  sx={{
                    width: "20%",
                    height: "auto",
                    margin: "0.5rem",
                    marginBottom: 0,
                    minWidth: "4rem",
                  }}
                />
                <Box
                  id="near-avatar-things"
                  sx={{ display: "flex", flexDirection: "column" }}
                  justifyContent={"center"}
                >
                  <Box
                    id="name-and-button"
                    sx={{ display: "flex" }}
                    alignItems={"center"}
                    gap={"0.5rem"}
                  >
                    <Typography variant="h6">Sauleh Etemadi</Typography>
                    <KeyboardArrowRightIcon />
                    <Button size="medium">VIEW FULL PROFILE</Button>
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
              NLP/ML PhD Positions Available at my Group at Queen's University
              Canada
            </Divider>
            <Box id="program-descriptions"></Box>
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
            <Box id="about-uni"></Box>
            <Box id="button-container" textAlign={"center"}>
              <Button
                variant="contained"
                disableElevation
                sx={{ width: "25rem", borderRadius: "0.5rem 0.5rem 0px 0px" }}
              >
                Apply Now!
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
