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

  const myNotifs = [1, 2, 3, 4];

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
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {myNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"}>
                    <Box className="notif-icon-and-text">
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
                        Xiaodan Xiou opened a new position in Data Science field
                        at Massachusetts Institute of Technology. You can apply
                        your request before 16’s November.
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
                    width={"7rem"}
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
                    {1 > 0 ? (
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
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {myNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"}>
                    <Box className="notif-icon-and-text">
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
                        Xiaodan Xiou opened a new position in Data Science field
                        at Massachusetts Institute of Technology. You can apply
                        your request before 16’s November.
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
                    width={"7rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {1 > 0 ? (
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
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "30rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
                marginBottom: "4rem",
                overflow: "auto",
              }}
            >
              {myNotifs.map((notif, index) => (
                <StyledNotification key={index} className="notif-body">
                  <Box className="left-main" paddingLeft={"1rem"}>
                    <Box className="notif-icon-and-text">
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
                        Xiaodan Xiou opened a new position in Data Science field
                        at Massachusetts Institute of Technology. You can apply
                        your request before 16’s November.
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
                    width={"7rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {1 > 0 ? (
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
