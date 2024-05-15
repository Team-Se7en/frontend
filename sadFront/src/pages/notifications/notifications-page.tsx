import { Box, Breadcrumbs, Link } from "@mui/material";
import Navbar from "../../components/navbar/navbar/navbar";
import Footer from "../../components/footer/footer/footer";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

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

  return (
    <Box sx={{ overflowX: "hidden" }}>
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
        minHeight={"100rem"}
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
              className="tab-body"
              sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                borderRadius: "0.2rem",
                minHeight: "13rem",
                maxHeight: "25rem",
                //boxShadow: "0px -1px 5px -1px rgba(0,0,0,0.42)",
              }}
            ></Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
