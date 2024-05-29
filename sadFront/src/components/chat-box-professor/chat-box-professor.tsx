import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { StyledChats } from "./chat-box-professor-style";
import ChatIcon from "@mui/icons-material/Chat";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import client from "../../Http/axios";
import { ChatModel } from "../../models/Chat";
import { MessageModel } from "../../models/Message";

export default function ChatBoxProf() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const chatsOpen = Boolean(anchorEl);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const composeOpen = Boolean(anchorE2);

  const notifIconHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const notifMenuHandleClose = () => {
    setAnchorEl(null);
  };
  const backHandleClick = () => {
    setWhichtab("chats");
  };

  const composeHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const composeHandleClose = () => {
    setAnchorE2(null);
  };

  const chatHandleClick = (chat: ChatModel) => {
    setChatID(chat.id);
    setWhichtab("person");
    setChatName(chat.group_name);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const sendHandleClick = (text: string, chatID: number) => {
    client
      .post("https://seven-apply.liara.run/eduportal/create_message/", {
        text: text,
        related_chat_group: chatID,
        user: null,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const myChats = [1, 2, 3];
  const [whichtab, setWhichtab] = React.useState("chats");
  const [chatID, setChatID] = React.useState(-1);
  const [chatName, setChatName] = React.useState("");
  const [allowedProfs, setAllowedProfs] = React.useState([1, 2, 3]);
  const [chats, setchats] = React.useState<ChatModel[]>();
  const [messages, setMessages] = React.useState<MessageModel[]>();
  const [text, setText] = React.useState("");
  //const [refreshKey, setRefreshKey] = React.useState(0);

  React.useEffect(() => {
    client
      .get("https://seven-apply.liara.run/eduportal/chat_list/")
      .then((response) => {
        setchats(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  });

  React.useEffect(() => {
    client
      .get("https://seven-apply.liara.run/eduportal/messages/" + chatID + "/")
      .then((response) => {
        setMessages(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [chatID, messages]);

  //console.log(chats);
  //console.log(messages);

  if (!chats) return null;

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Chats">
          <IconButton
            onClick={notifIconHandleClick}
            size="large"
            aria-controls={chatsOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={chatsOpen ? "true" : undefined}
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
        open={chatsOpen}
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
          height={"35rem"}
        >
          {myChats.length > 0 ? (
            <Box display={"flex"} flexDirection={"column"} overflow={"auto"}>
              {whichtab == "chats" ? (
                <Box padding={"1rem"}>
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
                  {chats.map((chat, index) => (
                    <StyledChats
                      key={index}
                      className="chat-body"
                      onClick={() => chatHandleClick(chat)}
                    >
                      <Avatar
                        className="avatar"
                        alt="Sauleh Etemadi"
                        src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
                        sx={{
                          minHeight: "4rem",
                          minWidth: "4rem",
                          width: "18%",
                        }}
                      />
                      <Box
                        className="near-avatar"
                        display={"flex"}
                        flexDirection={"column"}
                        width={"82%"}
                        paddingRight={"0.5rem"}
                        borderBottom={"1px solid gray"}
                        paddingLeft={"1rem"}
                        height={"100%"}
                        justifyContent={"center"}
                      >
                        <Box
                          className="name-and-date"
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography color={"white"}>
                            {chat.group_name}
                          </Typography>
                          <Typography color={"#D9D9D9"} fontSize={"0.8rem"}>
                            Fri
                          </Typography>
                        </Box>
                        <Typography color={"#D9D9D9"} fontSize={"0.8rem"}>
                          {chat.part_of_last_message}
                        </Typography>
                      </Box>
                    </StyledChats>
                  ))}
                  <Box
                    className="compose icon"
                    position={"fixed"}
                    bottom={"2rem"}
                    right={"2rem"}
                    borderRadius={"100%"}
                    height={"2.7rem"}
                    width={"2.7rem"}
                    sx={{ backgroundColor: "#188DEA" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Tooltip title="Start New Chat">
                      <IconButton
                        aria-controls={
                          composeOpen ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={composeOpen ? "true" : undefined}
                        onClick={composeHandleClick}
                      >
                        <CreateIcon
                          sx={{
                            color: "white",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorE2}
                      open={composeOpen}
                      onClose={composeHandleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {allowedProfs.map((prof, index) => (
                        <MenuItem key={index} onClick={composeHandleClose}>
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            gap={"0.3rem"}
                          >
                            <Avatar
                              className="avatar"
                              alt="Sauleh Etemadi"
                              src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
                              sx={{
                                minHeight: "1rem",
                                minWidth: "1rem",
                              }}
                            />
                            <Box>
                              <Typography fontSize={"0.8rem"}>
                                Sauleh Etemadi
                              </Typography>
                              <Typography
                                fontSize={"0.6rem"}
                                color="text.secondary"
                              >
                                IUST
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
              ) : (
                <>
                  <Box
                    className="chat-with-person-container"
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Box
                      className="nav-contact-info"
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      sx={{ backgroundColor: "#203864" }}
                      height={"4.4rem"}
                      padding={"0.8rem"}
                    >
                      <Tooltip title="Back">
                        <IconButton
                          onClick={backHandleClick}
                          size="large"
                          sx={{ color: "white", padding: "0" }}
                        >
                          <ArrowBackIosIcon />
                        </IconButton>
                      </Tooltip>
                      <Avatar
                        className="avatar"
                        alt="Sauleh Etemadi"
                        src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
                        sx={{
                          minHeight: "3.5rem",
                          minWidth: "3.5rem",
                          marginRight: "0.5rem",
                        }}
                      />
                      <Box
                        className="near-avatar"
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography color={"white"}>{chatName}</Typography>
                        <Typography color="#D9D9D9" fontSize={"0.7rem"}>
                          Professor
                        </Typography>
                      </Box>
                    </Box>
                    {messages ? (
                      <Box
                        className="chat-texts-container"
                        display={"flex"}
                        flexDirection={"column"}
                        padding={"0.8rem"}
                        gap={"0.7rem"}
                        maxHeight={"28.8rem"}
                      >
                        {messages.map((message, index) => (
                          <Box
                            key={index}
                            className="text-container"
                            sx={{
                              backgroundColor: message.is_student
                                ? "#DEEBF7"
                                : "white",
                            }}
                            borderRadius={"0.3rem"}
                            padding={"0.5rem"}
                            maxWidth={"18rem"}
                            marginLeft={message.is_student ? "4.3rem" : "0"}
                          >
                            <Typography fontSize={"0.7rem"}>
                              {message.text}
                            </Typography>
                            <Box
                              className="bottom-date"
                              display={"flex"}
                              flexDirection={"row-reverse"}
                            >
                              <Typography
                                color="text.secondary"
                                fontSize={"0.6rem"}
                              >
                                May 11, 12:24
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Box></Box>
                    )}

                    <Box
                      className="bottom-input-message"
                      position={"fixed"}
                      bottom={"0"}
                      width={"100%"}
                      display={"flex"}
                      flexDirection={"row"}
                    >
                      <TextField
                        id="standard-basic"
                        label="Type Your Message"
                        onChange={handleInputChange}
                        value={text}
                        variant="standard"
                        sx={{ width: "83%" }}
                      />
                      <Button
                        onClick={() => sendHandleClick(text, chatID)}
                        variant="contained"
                        size="small"
                        sx={{ height: "2.1rem", marginTop: "0.9rem" }}
                      >
                        Send
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
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