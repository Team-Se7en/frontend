import {
  Box,
  Card,
  CardContent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import client from "../../Http/axios";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    background: {
      default: "#0F1035",
      paper: "#0F1035",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Arial",
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      width: "400px",
    },
  },
});

export default function ProfessorCard() {
  interface University {
    name?: string;
    country?: string;
    city?: string;
  }
  interface Professor {
    professor_name: string;
    major: string;
    university?: University;
    department?: string;
    project_num: number;
  }

  const [topProfessors, setTopProfessors] = useState<Professor[]>([]);

  const getTopProfessor = async () => {
    try {
      const result = await client.get(`/eduportal/top_professors/`);
      const values: Professor[] = Object.keys(result.data).map(function (key) {
        return result.data[key];
      });
      setTopProfessors([...values]);
      console.log(values);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  useEffect(() => {
    getTopProfessor();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        height={"30rem"}
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems={"flex-end"}
        gap="1rem"
        p={2}
        padding={"0rem"}
        overflow={"auto"}
      >
        <Box
          sx={{
            maxWidth: 700,
            mx: "auto",
            mt: 1,
            p: 1,
            borderRadius: 2,
            width: "100%",
            pb: 7,
          }}
        >
          {topProfessors.map((prof, index) => (
            <Card key={index} raised sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5">{prof.professor_name}</Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "secondary",
                  }}
                >
                  <WorkIcon sx={{ mr: 1 }} /> {prof.major}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "secondary",
                  }}
                >
                  <SchoolIcon sx={{ mr: 1 }} /> {prof.university?.name || "N/A"}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "secondary",
                  }}
                >
                  <AssuredWorkloadIcon sx={{ mr: 1 }} /> department:{" "}
                  {prof.department}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "secondary",
                  }}
                >
                  <DescriptionIcon sx={{ mr: 1 }} /> Published Papers:{" "}
                  {prof.project_num}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "secondary",
                  }}
                >
                  <LocationOnIcon sx={{ mr: 1 }} /> Location:{" "}
                  {prof.department || "N/A"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
