import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Badge, Button, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircleIcon from "@mui/icons-material/Circle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { StyledNotification } from "./NotificationsMenu-styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import axios from "axios";
import { Notifications } from "../../models/Notifications";
import { GenerateNotifText } from "../../lib/NotifText";

export default function NotificationsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [notifs, setnotifs] = React.useState<Notifications[]>();

  React.useEffect(() => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/new_notifications/"
      )
      .then((response) => {
        setnotifs(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  //const myNotifs = [1, 2, 3, 4];
  console.log(notifs);

  if (!notifs) return null;
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
            <Badge badgeContent={notifs.length} color="error">
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            backgroundColor: "#0F1035",
            mt: 1.5,
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#0F1035",
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
          width={"24rem"}
          display={"felx"}
          flexDirection={"column"}
          padding={"1rem"}
        >
          {notifs.length > 0 ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              maxHeight={"30rem"}
              overflow={"auto"}
            >
              {notifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box>
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
                        {GenerateNotifText(notif)}
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
                  <Box
                    className="right-circle-and-ribbon"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    marginLeft={"0.6rem"}
                  >
                    <Tooltip title="Mark As Seen">
                      <CircleIcon
                        sx={{
                          color: "#4472C4",
                          fontSize: "1.3rem",
                          cursor: "pointer",
                          marginTop: "0.5rem",
                        }}
                      />
                    </Tooltip>
                    {1 > 0 ? (
                      <Tooltip title="Bookmark this notification">
                        <BookmarkBorderIcon
                          sx={{
                            color: "white",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Delete from bookmarks">
                        <BookmarkIcon
                          sx={{
                            color: "white",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        />
                      </Tooltip>
                    )}
                  </Box>
                </StyledNotification>
              ))}
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <CircleNotificationsIcon
                sx={{ color: "#F2F2F2", fontSize: "8rem" }}
              />
              <Typography color={"#F2F2F2"} fontSize={"0.9rem"}>
                You have no unseen notification.
              </Typography>
            </Box>
          )}
          <Box
            className="all-notifs-button"
            marginTop={"1rem"}
            textAlign={"center"}
          >
            <Link to="/notifications">
              <Button variant="outlined" sx={{ color: "white" }}>
                See All Notifications
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}