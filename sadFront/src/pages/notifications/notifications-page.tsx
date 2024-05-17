import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  IconButton,
  Link,
  Tooltip,
} from "@mui/material";
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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { Notifications } from "../../models/Notifications";
import { GenerateNotifText } from "../../lib/NotifText";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

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

  const [newNotifs, setnewNotifs] = React.useState<Notifications[]>();
  const [allNotifs, setallNotifs] = React.useState<Notifications[]>();
  const [markedNotifs, setmarkedNotifs] = React.useState<Notifications[]>();
  const [refreshKey, setRefreshKey] = React.useState(0);

  const bookmarkHandleClick = (id: number) => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/" +
          id +
          "/toggle_bookmark/"
      )
      .then(() => {
        setRefreshKey((oldKey) => oldKey + 1);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const markReadHandleClick = (id: number) => {
    axios
      .get(
        "https://seven-apply.liara.run/eduportal/notifications/" +
          id +
          "/mark_as_read/"
      )
      .then(() => {
        setRefreshKey((oldKey) => oldKey + 1);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const deleteHandleClick = (id: number) => {
    axios
      .delete(
        "https://seven-apply.liara.run/eduportal/notifications/" + id + "/"
      )
      .then(() => {
        setRefreshKey((oldKey) => oldKey + 1);
      });
  };

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
  }, [refreshKey]);

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
  }, [refreshKey]);

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
  }, [refreshKey]);

  const tabsData = [newNotifs, allNotifs, markedNotifs];
  console.log(tabsData);

  //if (!tabsData) return null;

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
        <Box width={{ xs: "80%", sm: "70%", md: "60%", lg: "50%", xl: "40%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Unread" {...a11yProps(0)} />
              <Tab label="All Notifications" {...a11yProps(1)} />
              <Tab label="Bookmarked" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {tabsData.map((tabData, index1) => (
            <CustomTabPanel key={index1} value={value} index={index1}>
              <Box
                className="notifications-tab-body"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "divider",
                  backgroundColor: "white",
                  borderRadius: "0.2rem",
                  minHeight: "13rem",
                  maxHeight: "30rem",
                  padding: "0.5rem",
                  marginBottom: "4rem",
                  overflow: "auto",
                }}
              >
                {!tabData ? (
                  <CircularProgress />
                ) : tabData.length != 0 ? (
                  tabData.map((notif, index2) => (
                    <StyledNotification key={index2} className="notif-body">
                      <Box
                        className="left-main"
                        paddingLeft={"1rem"}
                        width={"90%"}
                      >
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
                        <Box
                          className="notif-target-button"
                          textAlign={"right"}
                        >
                          {notif.student && notif.position ? (
                            <Button
                              variant="text"
                              sx={{ color: "black", fontSize: "0.8rem" }}
                            >
                              {notif.notification_type == 1
                                ? "See " + notif.student.name + "'s profile"
                                : notif.notification_type == 2
                                ? "Go to position's page"
                                : notif.notification_type == -2
                                ? "Explore similar positions"
                                : notif.notification_type == 3
                                ? "Message " + notif.student.name
                                : notif.notification_type == -3
                                ? "Explore your other requests"
                                : "See Position"}
                            </Button>
                          ) : (
                            ""
                          )}
                        </Box>
                      </Box>
                      <Box
                        className="right-circle-and-ribbon"
                        marginRight={"0.7rem"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                      >
                        {index1 == 0 ? (
                          <Tooltip title="Mark As Read">
                            <IconButton
                              onClick={() => markReadHandleClick(notif.id)}
                            >
                              <CircleIcon
                                sx={{
                                  color: "#4472C4",
                                  fontSize: "1.3rem",
                                  cursor: "pointer",
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          ""
                        )}

                        {!notif.bookmarked ? (
                          <Tooltip title="Bookmark this notification">
                            <IconButton
                              onClick={() => bookmarkHandleClick(notif.id)}
                            >
                              <BookmarkBorderIcon
                                sx={{
                                  color: "black",
                                  fontSize: "1.3rem",
                                  cursor: "pointer",
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title="Delete from bookmarks">
                            <IconButton
                              onClick={() => bookmarkHandleClick(notif.id)}
                            >
                              <BookmarkIcon
                                sx={{
                                  color: "black",
                                  fontSize: "1.3rem",
                                  cursor: "pointer",
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                        <Tooltip title="Delete Notification">
                          <IconButton
                            onClick={() => deleteHandleClick(notif.id)}
                          >
                            <DeleteOutlineIcon
                              sx={{
                                color: "black",
                                fontSize: "1.3rem",
                                cursor: "pointer",
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </StyledNotification>
                  ))
                ) : (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <CircleNotificationsIcon
                      sx={{ color: "gray", fontSize: "8rem" }}
                    />
                    <Typography color={"gray"} fontSize={"0.9rem"}>
                      {index1 == 0
                        ? "There is no unread notification ..."
                        : index1 == 1
                        ? "You have not any notifications yet ..."
                        : "You have no bookmarked notification ..."}
                    </Typography>
                  </Box>
                )}
              </Box>
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
