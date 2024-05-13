import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Badge, Button, Divider, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircleIcon from "@mui/icons-material/Circle";

export default function NotificationsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Recent Notifications">
          <IconButton
            onClick={handleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ color: "white" }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            backgroundColor: "#0F1035",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          className="menu-container"
          width={"22rem"}
          display={"felx"}
          flexDirection={"column"}
          padding={"1rem"}
        >
          <Box
            className="notifs"
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            maxHeight={"35rem"}
            overflow={"auto"}
          >
            <Box
              className="notif-body"
              display={"flex"}
              flexDirection={"row"}
              padding={"0.5rem"}
              borderBottom={"1px solid gray"}
            >
              <Box className="left-main">
                <Box className="notif-icon-and-text">
                  <CampaignIcon
                    sx={{
                      color: "white",
                      marginRight: "0.5rem",
                      marginBottom: "-0.3rem",
                    }}
                  />
                  <Typography
                    color={"white"}
                    display={"inline"}
                    fontSize={"0.85rem"}
                  >
                    Xiaodan Xiou opened a new position in Data Science field at
                    Massachusetts Institute of Technology. You can apply your
                    request before 16’s November.
                  </Typography>
                </Box>
                <Box className="notif-target-button" textAlign={"right"}>
                  <Button
                    variant="text"
                    sx={{ color: "white", fontSize: "0.8rem" }}
                  >
                    View Position
                  </Button>
                </Box>
              </Box>
              <Box className="right-circle" width={"5rem"} textAlign={"center"}>
                <Tooltip title="Mark As Seen">
                  <CircleIcon
                    sx={{
                      color: "#4472C4",
                      fontSize: "1.3rem",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box
            className="all-notifs-button"
            marginTop={"1rem"}
            textAlign={"center"}
          >
            <Button variant="outlined" sx={{ color: "white" }}>
              See All Notifications
            </Button>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
