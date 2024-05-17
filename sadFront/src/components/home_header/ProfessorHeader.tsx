import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardModal from "../modals/card-modal/CardModal";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge, Modal } from "@mui/material";
import { ProfessorCardViewShortInfo } from "../../models/CardInfo";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsMenu from "../notifications-menu/NotificationsMenu";
import { AuthContextType, useAuth } from "../../hooks/authUtils";

const pages = ["Home", "Positions", "Requests", "University"];
const settings = ["Profile", "Add Program", "Logout"];

export interface ProfessorHeaderProps {
  handleProfessorPositionAddition: (model: ProfessorCardViewShortInfo) => void;
}

function ProfessorHeader(props: ProfessorHeaderProps) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Home");

  const { isLoggedIn, userInfo, _, logout }: AuthContextType = useAuth();

  const handleOpenNavMenu = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page: string) => {
    props.changeHeader(page);
    if (page === "University") {
      navigate("/university");
    } else {
      console.log("Navigate to:", page);
    }
    handleCloseNavMenu();
  };

  const handleSettingClick = (setting: string) => {
    switch (setting) {
      case "Add Program":
        handleModalOpen();
        break;

      case "Logout":
        logout();
        navigate("/login");
        break;
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddition = (model: ProfessorCardViewShortInfo) => {};

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#0F1035",
          color: "#FFF5EE",
          height: "10%",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ backgroundColor: "#0F1035", color: "#FFF5EE" }}
        >
          <Toolbar disableGutters>
            <Box style={{ flex: "flex-end" }}></Box>
            <Box style={{ marginLeft: "2px" }}>
              <Typography
                variant="h6"
                noWrap
                align="left"
                sx={{ marginRight: "200px" }}
              >
                7Apply
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transition: "0.3s",
                    ":hover": {
                      color: "black",
                      bgcolor: "white",
                      ml: 1,
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <NotificationsMenu />

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "1rem",
                      borderRadius: "50%",
                      color: "#bde0fe",
                      backgroundColor: "#03045e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "48px",
                      fontWeight: "bold",
                      backgroundImage:
                        "linear-gradient(135deg, #bde0fe 0%, #03045e 100%)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  ></Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button
                      variant="text"
                      onClick={() => handleSettingClick(setting)}
                    >
                      {setting}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {/* <Box>
                <ProfessorHeader setActiveComponent={setActiveComponent} />
                {renderComponent()}
            </Box> */}
      </AppBar>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        sx={{ m: 2, borderRadius: "4px", height: "90%" }}
      >
        <CardModal
          onClose={handleModalClose}
          onAddUpdate={props.handleProfessorPositionAddition}
        />
      </Modal>
    </>
  );
}

export default ProfessorHeader;
