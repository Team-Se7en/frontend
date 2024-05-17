import { Box, Breadcrumbs, Button, Link, Tooltip } from "@mui/material";
import Navbar from "../../components/navbar/navbar/navbar";
import Footer from "../../components/footer/footer/footer";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { StyledNotification } from "./notifications-page-style";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircleIcon from "@mui/icons-material/Circle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Notifications } from "../../models/Notifications";
import { GenerateNotifText } from "../../lib/NotifText";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NotificationsPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //const myNotifs = [1, 2, 3, 4];

  const [newNotifs, setnewNotifs] = React.useState<Notifications[]>();
  const [allNotifs, setallNotifs] = React.useState<Notifications[]>();
  const [markedNotifs, setmarkedNotifs] = React.useState<Notifications[]>();

  React.useEffect(() => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/new_notifications/"
      )
      .then((response) => {
        setnewNotifs(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/all_notifications/"
      )
      .then((response) => {
        setallNotifs(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/bookmarked_notifications/"
      )
      .then((response) => {
        setmarkedNotifs(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  if (!newNotifs) return null;
  if (!allNotifs) return null;
  if (!markedNotifs) return null;

  return (
    <Box sx={{ overflowX: "hidden", backgroundColor: "#F2F2F2" }}>
      <Navbar />
      <Box marginLeft={"3rem"} marginTop={"7rem"}>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/studenthomepage">
              Home
            </Link>
            <Typography color="text.primary">Notifications</Typography>
          </Breadcrumbs>
        </div>
      </Box>
      <Box
        className="page-body"
        minHeight={"30rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"2rem"}
      >
        <Box sx={{ width: "50%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Unread Notifications" {...a11yProps(0)} />
              <Tab label="All Notifications" {...a11yProps(1)} />
              <Tab label="Bookmarked Notifications" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box
              className="unread-notifications-tab-body"
              sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                backgroundColor: "white",
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {newNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"} width={"90%"}>
                    <Box className="notif-icon-and-text" width={"100%"}>
                      <CampaignIcon
                        sx={{
                          color: "black",
                          marginRight: "0.5rem",
                          marginBottom: "-0.3rem",
                        }}
                      />
                      <Typography
                        color={"black"}
                        display={"inline"}
                        fontSize={"0.85rem"}
                      >
                        {GenerateNotifText(notif)}
                      </Typography>
                    </Box>
                    <Box className="notif-target-button" textAlign={"right"}>
                      <Button
                        variant="text"
                        sx={{ color: "black", fontSize: "0.8rem" }}
                      >
                        View Position
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    className="right-circle-and-ribbon"
                    marginRight={"0.7rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Tooltip title="Mark As Seen">
                      <CircleIcon
                        sx={{
                          color: "#4472C4",
                          fontSize: "1.3rem",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                    {!notif.bookmarked ? (
                      <Tooltip title="Bookmark this notification">
                        <BookmarkBorderIcon
                          sx={{
                            color: "black",
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
                            color: "black",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        />
                      </Tooltip>
                    )}
                    <Tooltip title="Delete Notification">
                      <DeleteIcon
                        sx={{
                          color: "black",
                          fontSize: "1.3rem",
                          cursor: "pointer",
                          marginTop: "0.5rem",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </StyledNotification>
              ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box
              className="all-notifications-tab-body"
              sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                backgroundColor: "white",
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {allNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"}>
                    <Box className="notif-icon-and-text" width={"90%"}>
                      <CampaignIcon
                        sx={{
                          color: "black",
                          marginRight: "0.5rem",
                          marginBottom: "-0.3rem",
                        }}
                      />
                      <Typography
                        color={"black"}
                        display={"inline"}
                        fontSize={"0.85rem"}
                      >
                        {GenerateNotifText(notif)}
                      </Typography>
                    </Box>
                    <Box className="notif-target-button" textAlign={"right"}>
                      <Button
                        variant="text"
                        sx={{ color: "black", fontSize: "0.8rem" }}
                      >
                        View Position
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    className="right-circle-and-ribbon"
                    marginRight={"0.7rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {!notif.bookmarked ? (
                      <Tooltip title="Bookmark this notification">
                        <BookmarkBorderIcon
                          sx={{
                            color: "black",
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
                            color: "black",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        />
                      </Tooltip>
                    )}
                    <Tooltip title="Delete Notification">
                      <DeleteIcon
                        sx={{
                          color: "black",
                          fontSize: "1.3rem",
                          cursor: "pointer",
                          marginTop: "0.5rem",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </StyledNotification>
              ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box
              className="bookmarked-notifications-tab-body"
              sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                backgroundColor: "white",
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {markedNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"}>
                    <Box className="notif-icon-and-text" width={"90%"}>
                      <CampaignIcon
                        sx={{
                          color: "black",
                          marginRight: "0.5rem",
                          marginBottom: "-0.3rem",
                        }}
                      />
                      <Typography
                        color={"black"}
                        display={"inline"}
                        fontSize={"0.85rem"}
                      >
                        {GenerateNotifText(notif)}
                      </Typography>
                    </Box>
                    <Box className="notif-target-button" textAlign={"right"}>
                      <Button
                        variant="text"
                        sx={{ color: "black", fontSize: "0.8rem" }}
                      >
                        View Position
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    className="right-circle-and-ribbon"
                    marginRight={"0.7rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {!notif.bookmarked ? (
                      <Tooltip title="Bookmark this notification">
                        <BookmarkBorderIcon
                          sx={{
                            color: "black",
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
                            color: "black",
                            fontSize: "1.3rem",
                            cursor: "pointer",
                            marginTop: "0.5rem",
                          }}
                        />
                      </Tooltip>
                    )}
                    <Tooltip title="Delete Notification">
                      <DeleteIcon
                        sx={{
                          color: "black",
                          fontSize: "1.3rem",
                          cursor: "pointer",
                          marginTop: "0.5rem",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </StyledNotification>
              ))}
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
