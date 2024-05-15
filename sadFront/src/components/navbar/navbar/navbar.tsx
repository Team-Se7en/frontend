import React from "react";
import {
  Typography,
  IconButton,
  Hidden,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import useStyles from "./navbar-styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MobileMenu from "./MobileMenu";

function Navbar({
  showAuthButtons = false,
  showAuthButton = false,
  showAuth = false,
}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          position:'fixed',
          zIndex: '3',
          backgroundColor: "#0F1035",
          color: "#FFF5EE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "82px",
        }}
      >
        <span style={{ flex: "0.2 1 auto" }}></span>
        <div style={{ margin: "0 2rem" }}>
          <Typography align="left" variant="h6" style={{}}>
            7Apply
          </Typography>
        </div>

        <div style={{ margin: "0 5rem", paddingLeft: "10rem" }}>
          {isMobile ? (
            <Grid>
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                  style={{}}
                >
                  <MenuIcon />
                </IconButton>
                <MobileMenu
                  open={drawerOpen}
                  onClose={handleDrawerClose}
                  showAuthButtons={showAuthButtons}
                  showAuthButton={showAuthButton}
                  showAuth={showAuth}
                />
              </Hidden>
            </Grid>
          ) : (
            showAuthButton && (
              <Hidden smDown>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/students"
                      sx={{
                        backgroundColor: "transparent",
                        textTransform: "none",
                        transition: "0.2s",
                        ":hover": {
                          color: "black",
                          bgcolor: "white",
                          ml: 1,
                        },
                      }}
                    >
                      Students
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/professors"
                      sx={{
                        backgroundColor: "transparent",
                        textTransform: "none",
                        transition: "0.2s",
                        ":hover": {
                          color: "black",
                          bgcolor: "white",
                          ml: 1,
                        },
                      }}
                    >
                      Professors
                    </Button>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/institutions"
                      sx={{
                        backgroundColor: "transparent",
                        textTransform: "none",
                        transition: "0.2s",
                        ":hover": {
                          color: "black",
                          bgcolor: "white",
                          ml: 1,
                        },
                      }}
                    >
                      Institutions
                    </Button>
                  </Grid>
                </Grid>
              </Hidden>
            )
          )}
        </div>
        <span style={{ flex: "1 1 auto" }}></span>
        {showAuth && (
          <>     
          
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  margin: "1rem",
                  borderRadius: "50%",
                  color: "#bde0fe",
                  backgroundColor: "#03045e",
                  fontSize: "48px",
                  fontWeight: "bold",
                  backgroundImage:
                    "linear-gradient(135deg, #bde0fe 0%, #03045e 100%)",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></Avatar>
          </>
        )}
        <div
          style={{
            margin: "0 2rem",
          }}
        >
          {showAuthButtons && !isMobile && (
            <>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: "0.2s",
                  ":hover": {
                    color: "black",
                    bgcolor: "white",
                    ml: 1,
                  },
                }}
                color="inherit"
                component={Link}
                to="/login"
              >
                <AccountCircleIcon style={{ marginRight: "5px" }} />
                Login
              </Button>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                  transition: "0.2s",
                  ":hover": {
                    color: "black",
                    bgcolor: "white",
                    ml: 1,
                  },
                }}
                color="inherit"
                component={Link}
                to="/signup"
              >
                <AddCircleOutlineIcon style={{ marginRight: "5px" }} />
                Signup
              </Button>
            </>
          )}
        </div>
        <span style={{ flex: "0.1 1 auto" }}></span>
      </div>
    </div>
  );
}

export default Navbar;
