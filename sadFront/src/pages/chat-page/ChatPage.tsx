import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Button,
  CircularProgress,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { StyledChats } from "./ChatPage.styles";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import client from "../../Http/axios";
import { AllowedChats, ChatModel } from "../../models/Chat";
import { MessageModel } from "../../models/Message";
import { generateMessageDate } from "../../lib/MessageDate";
import { Flip, ToastContainer, toast } from "react-toastify";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import { MoreVert } from "@mui/icons-material";
import ChatBackground from "./../../assets/images/chat-background.png";
import { Link } from "react-router-dom";

export default function ChatPage() {
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const composeOpen = Boolean(anchorE2);
  const [chatID, setChatID] = React.useState(-1);
  const [chatName, setChatName] = React.useState("");
  const [allowedNewChats, setAllowedNewChats] =
    React.useState<AllowedChats[]>();
  const [chats, setchats] = React.useState<ChatModel[]>();
  const [messages, setMessages] = React.useState<MessageModel[]>();
  const [text, setText] = React.useState("");
  const [loadChats, setLoadChats] = React.useState(0);

  const currentDate = new Date();

  const backHandleClick = () => {};
  const moreHandleClick = () => {};
  const searchHandleClick = () => {};

  const composeHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
    client
      .get("https://seven-apply.liara.run/eduportal/professor_new_chat/")
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
      setLoadChats(loadChats + 1);
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
    setChatName(chat.group_name);
    client
      .get("https://seven-apply.liara.run/eduportal/messages/" + chat.id + "/")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
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
      .get("https://seven-apply.liara.run/eduportal/chat_list/")
      .then((response) => {
        setchats(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [loadChats]);

  return (
    <Box
      className="main-container"
      display={"flex"}
      height={"100%"}
      width={"100%"}
      justifyContent={"center"}
      sx={{ backgroundColor: "black" }}
    >
      <Box
        className="page-container"
        height="100%"
        width={"90%"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Box
          className="leftside-chatmenu"
          width={"25%"}
          display={"felx"}
          flexDirection={"column"}
          height={"100%"}
          sx={{ backgroundColor: "#0F1035" }}
        >
          <Box
            className="top-bar-left"
            height={"3rem"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingRight={"1.2rem"}
            paddingLeft={"1.2rem"}
            paddingTop={"0.5rem"}
          >
            <Tooltip title="Back">
              <Link to="/professorhomepage">
                <IconButton
                  onClick={backHandleClick}
                  size="large"
                  sx={{ color: "white", padding: "0" }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Typography
              color={"white"}
              fontSize={"1.2rem"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              7Apply
              <ForumIcon />
              chat
            </Typography>
            <Tooltip title="Search chats">
              <IconButton
                onClick={searchHandleClick}
                sx={{ color: "white", padding: "0" }}
              >
                <SearchIcon sx={{ fontSize: "1.8rem" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box className="chats">
            {chats ? (
              chats.length > 0 ? (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  overflow={"auto"}
                >
                  <Box padding={"1rem"} paddingTop={"0rem"}>
                    {chats.map((chat, index) => (
                      <StyledChats
                        key={index}
                        className="chat-body"
                        onClick={() => chatHandleClick(chat)}
                      >
                        <Avatar
                          className="avatar"
                          alt="A Student"
                          src="https://pngimg.com/uploads/student/student_PNG62560.png"
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
                              {generateMessageDate(
                                chat.time_of_the_last_message,
                                currentDate
                              )}
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
                      left={"21.5rem"}
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
                                onClick={() =>
                                  composeHandleClose(prof.id, prof.name)
                                }
                              >
                                <Box
                                  display={"flex"}
                                  flexDirection={"row"}
                                  alignItems={"center"}
                                  gap={"0.3rem"}
                                >
                                  <Avatar
                                    className="avatar"
                                    alt="A Student"
                                    src="https://pngimg.com/uploads/student/student_PNG62560.png"
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
          </Box>
        </Box>

        <Box
          className="right-side"
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          width={"75%"}
        >
          <Box
            className="top-bar-right"
            height={"8%"}
            display={chatID == -1 ? "none" : "flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingLeft={"1rem"}
            paddingRight={"1rem"}
            sx={{ backgroundColor: "#0F1035" }}
          >
            <Box
              className="contact-info"
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"0.5rem"}
            >
              <Avatar
                className="avatar"
                alt="A Student"
                src="https://pngimg.com/uploads/student/student_PNG62560.png"
                sx={{
                  minHeight: "3rem",
                  minWidth: "3rem",
                }}
              />
              <Box
                className="name-and-uni"
                display={"flex"}
                flexDirection={"column"}
              >
                <Typography color={"white"} fontSize={"0.9rem"}>
                  {chatName}
                </Typography>
                <Typography color={"#D9D9D9"} fontSize={"0.7rem"}>
                  Student
                </Typography>
              </Box>
            </Box>
            <Tooltip title="more">
              <IconButton
                onClick={moreHandleClick}
                sx={{ color: "white", padding: "0" }}
              >
                <MoreVert sx={{ fontSize: "1.8rem" }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            className="chat-page"
            height={chatID == -1 ? "100%" : "92%"}
            sx={{
              backgroundImage: `url(${ChatBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box
              className="chat-texts-container"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
              padding={"0.8rem"}
              gap={"1rem"}
              height={"90%"}
              alignItems={"right"}
            >
              <ToastContainer transition={Flip} />
              {messages ? (
                messages.map((message, index) => (
                  <Box
                    key={index}
                    className="text-container"
                    sx={{
                      backgroundColor: message.is_student ? "white" : "#DEEBF7",
                    }}
                    borderRadius={"0.3rem"}
                    padding={"0.5rem"}
                    maxWidth={"33rem"}
                    alignSelf={message.is_student ? "flex-start" : "flex-end"}
                    width={"fit-content"}
                  >
                    <Typography fontSize={"0.9rem"} paddingRight={"3rem"}>
                      {message.text}
                    </Typography>
                    <Box
                      className="bottom-date"
                      display={"flex"}
                      flexDirection={"row-reverse"}
                    >
                      <Typography color="text.secondary" fontSize={"0.6rem"}>
                        {generateMessageDate(
                          message.send_time.toString(),
                          currentDate
                        )}
                      </Typography>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  width={"100%"}
                  height={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Typography
                    sx={{ backgroundColor: "black" }}
                    borderRadius={"0.5rem"}
                    width={"20rem"}
                    color={"white"}
                  >
                    Click on a contact to open the chat ...
                  </Typography>
                </Box>
              )}
            </Box>
            <Box
              className="bottom-input-message"
              position={"fixed"}
              bottom={"0"}
              width={"76.5%"}
              display={chatID == -1 ? "none" : "flex"}
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
        </Box>
      </Box>
    </Box>
  );
}
