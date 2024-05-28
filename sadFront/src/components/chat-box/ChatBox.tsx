import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Badge, Divider, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { StyledChats } from "./ChatBox-styles";
import ChatIcon from "@mui/icons-material/Chat";

export default function ChatBox() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const notifIconHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const notifMenuHandleClose = () => {
    setAnchorEl(null);
  };

  const myChats = [1, 2, 3];
  //const [chats, setchats] = React.useState<Notifications[]>();
  //const [refreshKey, setRefreshKey] = React.useState(0);

  if (!myChats) return null;
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
            onClick={notifIconHandleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ color: "white" }}
          >
            <Badge badgeContent={myChats.length} color="error">
              <ChatIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={notifMenuHandleClose}
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
          {myChats.length > 0 ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              maxHeight={"30rem"}
              overflow={"auto"}
            >
              <Divider
                textAlign="left"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "1rem",
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  "&.MuiDivider-root": {
                    "&::before": {
                      borderTop: "thin solid white",
                    },
                    "&::after": {
                      borderTop: "thin solid white",
                    },
                  },
                }}
              >
                Your Chats
              </Divider>
              {myChats.map((chat, index) => (
                <StyledChats key={index} className="chat-body">
                  <Avatar
                    className="avatar"
                    alt="Sauleh Etemadi"
                    src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
                    sx={{
                      minHeight: "4rem",
                      minWidth: "4rem",
                      margin: "0.5rem",
                    }}
                  />
                </StyledChats>
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
                You have no chats.
              </Typography>
            </Box>
          )}
        </Box>
      </Menu>
    </React.Fragment>
  );
}
