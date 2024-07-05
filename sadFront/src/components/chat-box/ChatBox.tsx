import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Badge,
  Button,
  CircularProgress,
  Divider,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { StyledChats, StyledTopMessage } from "./ChatBox-styles";
import ChatIcon from "@mui/icons-material/Chat";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import client from "../../Http/axios";
import { AllowedChats, ChatModel, newChatsNumber } from "../../models/Chat";
import { MessageModel } from "../../models/Message";
import { generateMessageDate } from "../../lib/MessageDate";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import Cookies from "js-cookie";

export default function ChatBox() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const chatsOpen = Boolean(anchorEl);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const composeOpen = Boolean(anchorE2);
  const [whichtab, setWhichtab] = React.useState("chats");
  const [chatID, setChatID] = React.useState(-1);
  const [chatName, setChatName] = React.useState("");
  const [allowedNewChats, setAllowedNewChats] =
    React.useState<AllowedChats[]>();
  const [chats, setchats] = React.useState<ChatModel[]>();
  const [messages, setMessages] = React.useState<MessageModel[]>();
  const [text, setText] = React.useState("");
  const currentDate = new Date();
  const [newChatsCount, setNewChatsCount] = React.useState<newChatsNumber>();
  const [chatSocket, setChatSocket] = React.useState<WebSocket>();

  const loadChats = () => {
    client
      .get("https://seven-apply.liara.run/eduportal/chat_list/")
      .then((response) => {
        setchats(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const chatIconHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    loadChats();
  };
  const chatMenuHandleClose = () => {
    setAnchorEl(null);
  };
  const backHandleClick = () => {
    setWhichtab("chats");
    setMessages([]);
    setChatID(-1);
  };

  const composeHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
    client
      .get("https://seven-apply.liara.run/eduportal/student_new_chat/")
      .then((response) => {
        setAllowedNewChats(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const composeHandleClose = (id: number, name: string) => {
    if (id != -1) {
      setChatID(id);
      setChatName(name);
      setWhichtab("person");
      loadChats();
      client
        .get(
          "https://seven-apply.liara.run/eduportal/start_new_chat/" + id + "/"
        )
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      setAnchorE2(null);
    }
  };

  const chatHandleClick = (chat: ChatModel) => {
    setChatID(chat.id);
    //console.log("chat.id = " + chat.id + "   , chatID = " + chatID);
    setWhichtab("person");
    setChatName(chat.group_name);
    client
      .get("https://seven-apply.liara.run/eduportal/messages/" + chat.id + "/")
      .then((response) => {
        setMessages(response.data);
        //console.log(chatID);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    let token = Cookies.get("token");

    // Setup notifs socket
    let newChatSocket = new WebSocket(
      "wss://seven-apply.liara.run/ws/chat/" + chat.id + "/?token=" + token
    );
    setChatSocket(newChatSocket);
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
      .then(() => {
        setText("");
        client
          .get(
            "https://seven-apply.liara.run/eduportal/messages/" + chatID + "/"
          )
          .then((response) => {
            setMessages(response.data);
            //console.log(chatID);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      })
      .catch(() => {
        toast.error("You can only send one message in each turn.", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  React.useEffect(() => {
    client
      .get("https://seven-apply.liara.run/eduportal/number_of_new_messages/")
      .then((response) => {
        setNewChatsCount(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (chatSocket) {
    // on socket open
    chatSocket.onopen = function () {
      console.log("Socket successfully connected.");
    };

    // on socket close
    chatSocket.onclose = function () {
      console.log("Socket closed unexpectedly");
    };

    // on receiving message on group
    chatSocket.onmessage = function () {
      client
        .get("https://seven-apply.liara.run/eduportal/messages/" + chatID + "/")
        .then((response) => {
          setMessages(response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
  }

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
            onClick={chatIconHandleClick}
            size="large"
            aria-controls={chatsOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={chatsOpen ? "true" : undefined}
            sx={{ color: "white" }}
          >
            <Badge
              badgeContent={newChatsCount ? Number(newChatsCount.number) : "?"}
              color="error"
            >
              <ChatIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={chatsOpen}
        onClose={chatMenuHandleClose}
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
          height={"35rem"}
          display={"flex"}
          flexDirection={"column"}
        >
          <StyledTopMessage>
            <Link to={{ pathname: "/studentchatpage" }}>
              <Button sx={{ color: "white" }}>
                {">>"} Open in 7Apply Messenger
              </Button>
            </Link>
          </StyledTopMessage>

          <Box
            className="right-chats"
            display={"felx"}
            flexDirection={"column"}
            height={"95%"}
          >
            {chats ? (
              chats.length > 0 ? (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  overflow={"auto"}
                >
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
                                {chat.time_of_the_last_message
                                  ? generateMessageDate(
                                      chat.time_of_the_last_message,
                                      currentDate
                                    )
                                  : "Start Chat"}
                              </Typography>
                            </Box>
                            <Typography color={"#D9D9D9"} fontSize={"0.8rem"}>
                              {chat.part_of_last_message}
                            </Typography>
                          </Box>
                        </StyledChats>
                      ))}
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
                        <Box
                          className="chat-texts-container"
                          display={"flex"}
                          position={"fixed"}
                          width={"100%"}
                          flexDirection={"column"}
                          padding={"0.8rem"}
                          gap={"0.7rem"}
                          maxHeight={"28.8rem"}
                          bottom={"2rem"}
                        >
                          <ToastContainer transition={Flip} />
                          {messages ? (
                            messages.map((message, index) => (
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
                                width={"fit-content"}
                                maxWidth={"18rem"}
                                alignSelf={
                                  message.is_student ? "flex-end" : "flex-start"
                                }
                              >
                                <Typography
                                  fontSize={"0.7rem"}
                                  paddingRight={"2rem"}
                                >
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
                                    {generateMessageDate(
                                      message.send_time.toString(),
                                      currentDate
                                    )}
                                  </Typography>
                                </Box>
                              </Box>
                            ))
                          ) : (
                            <Box width={"100%"} textAlign={"center"}>
                              <CircularProgress />
                            </Box>
                          )}
                        </Box>

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
                  justifyContent={"center"}
                  height={"100%"}
                  padding={"4rem"}
                >
                  <ForumIcon sx={{ color: "#F2F2F2", fontSize: "8rem" }} />
                  <Typography color={"#F2F2F2"} fontSize={"0.9rem"}>
                    You have no active chats. Click on compose icon to start a
                    new chat ...
                  </Typography>
                </Box>
              )
            ) : (
              <Stack spacing={1.5} marginLeft={"2rem"} marginTop={"2rem"}>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={"90%"}
                    height={"4.5rem"}
                    sx={{ bgcolor: "gray" }}
                  />
                ))}
              </Stack>
            )}
            <Box
              className="compose icon"
              position={"fixed"}
              bottom={"2rem"}
              right={"2rem"}
              borderRadius={"100%"}
              height={"2.7rem"}
              width={"2.7rem"}
              sx={{ backgroundColor: "#188DEA" }}
              display={chatID == -1 ? "flex" : "none"}
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
                onClose={() => composeHandleClose(-1, "")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {allowedNewChats ? (
                  allowedNewChats.length != 0 ? (
                    allowedNewChats.map((prof, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => composeHandleClose(prof.id, prof.name)}
                      >
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
                              {prof.name}
                            </Typography>
                            <Typography
                              fontSize={"0.6rem"}
                              color="text.secondary"
                            >
                              {prof.university}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))
                  ) : (
                    <Box
                      width={"13rem"}
                      height={"4rem"}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      padding={"2rem"}
                      textAlign={"center"}
                    >
                      <Typography fontSize={"0.8rem"}>
                        There is no remaining allowed chats
                      </Typography>
                    </Box>
                  )
                ) : (
                  <Box
                    width={"13rem"}
                    height={"4rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CircularProgress />
                  </Box>
                )}
              </Menu>
            </Box>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
