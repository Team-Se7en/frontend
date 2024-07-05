import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useStyles from "./footer-styles";
import { useNavigate } from "react-router-dom";

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToAbout = () => {
    navigate("/aboutus");
  };

  return (
    <div style={{ float: "none" }} className={classes.footerWrapper}>
      <div
        style={{
          backgroundColor: "#0F1035",
          color: "#FFF5EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            my: 3,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ pb: 4 }}>
              7Apply
            </Typography>
            <div>
              <Typography style={{}} variant="h6" gutterBottom>
                Get Social
              </Typography>

              <div>
                <IconButton
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transition: '0.2s',
                    ":hover": {
                      color: 'black',
                      bgcolor: 'white',
                      ml: 1,
                    }}}
                  color="inherit"
                  href="https://twitter.com"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transition: '0.2s',
                    ":hover": {
                      color: 'black',
                      bgcolor: 'white',
                      ml: 1,
                    }}}
                  color="inherit"
                  href="https://instagram.com"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transition: '0.2s',
                    ":hover": {
                      color: 'black',
                      bgcolor: 'white',
                      ml: 1,
                    }}}
                  color="inherit"
                  href="https://linkedin.com"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transition: '0.2s',
                    ":hover": {
                      color: 'black',
                      bgcolor: 'white',
                      ml: 1,
                    }}}
                  color="inherit"
                  href="https://telegram.com"
                >
                  <TelegramIcon />
                </IconButton>
              </div>
            </div>
          </Box>

          <Grid flexDirection="column" display="flex" pl={8}>
            <Typography variant="h6" mr={2} gutterBottom>
              {"About"}
            </Typography>
            <Grid display="flex" flexDirection="column" alignItems="start">
              <Button
              onClick={navigateToAbout}
                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                About
              </Button>
              <Button
                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Our Story
              </Button>
              <Button
                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Careers
              </Button>
            </Grid>
          </Grid>
          <Grid flexDirection="column" display="flex">
            <Typography style={{}} variant="h6" gutterBottom>
              Students
            </Typography>
            <Grid display="flex" flexDirection="column" alignItems="flex-start">
              <Button
                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Schools
              </Button>

              <Button
                color="inherit"
                style={{
                  textTransform: "none",
                }}
                sx={{
                  
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Register
              </Button>
              <Button
                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Recruiters
              </Button>
            </Grid>
          </Grid>

          <Grid flexDirection="column" display="flex">
            <Typography style={{}} variant="h6" gutterBottom>
              Professor
            </Typography>
            <Grid display="flex" flexDirection="column" alignItems="flex-start">
              <Button

                color="inherit"
                style={{
                  
                  textTransform: "none",
                }}
                sx={{
                  
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Apply
              </Button>
              <Button
                color="inherit"
                sx={{
                  
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Resources
              </Button>

              <Button

                color="inherit"
                sx={{
                  
                  display: "flex",
                  justifyContent: "start",
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: '0.2s',
                  ":hover": {
                    color: 'black',
                    bgcolor: 'white',
                    ml: 1,
                  }}}
              >
                Press
              </Button>
            </Grid>
          </Grid>
          <span style={{ flex: "0.2 1 auto" }}></span>
        </Container>

        <Box>
          <div>
            <Button
              style={{ textTransform: "capitalize" }}
              sx={{
                  
                backgroundColor: "transparent",
                textTransform: "none",
                transition: '0.2s',
                ":hover": {
                  color: 'black',
                  bgcolor: 'white',
                  ml: 1,
                }}}
              
              color="inherit"
              href="/terms"
            >
              Terms of Use
            </Button>
            <Button
              style={{ textTransform: "capitalize" }}
              sx={{
                  
                backgroundColor: "transparent",
                textTransform: "none",
                transition: '0.2s',
                ":hover": {
                  color: 'black',
                  bgcolor: 'white',
                  ml: 1,
                }}}
              color="inherit"
              href="/privacy"
            >
              Privacy Policy
            </Button>
            <Button
              style={{ textTransform: "capitalize" }}
              sx={{
                  
                backgroundColor: "transparent",
                textTransform: "none",
                transition: '0.2s',
                ":hover": {
                  color: 'black',
                  bgcolor: 'white',
                  ml: 1,
                }}}
              color="inherit"
              onClick={scrollToTop}
            >
              Back to Top
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
