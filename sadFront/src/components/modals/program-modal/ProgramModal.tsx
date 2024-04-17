import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

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
  padding: "2rem 2rem 0rem 2rem",
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
            <Box id="prof-info"></Box>
            <Divider
              textAlign="center"
              sx={{
                fontFamily: "roboto",
                fontSize: "1rem",
                color: "black",
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
                sx={{ width: "50%", borderRadius: "0.5rem 0.5rem 0px 0px" }}
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
