import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProgramCard from "components/programcard/ProgramCard";
import { ProgramsList } from "components/programslist/ProgramsList";
import { Stack } from '@mui/material';
import StudentCard from "components/studentcard/StudentCard";
import { StudentList } from "components/studentlist";
import Styles from "Styles";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import clsx from "clsx";

export function ProfessorHomePage() {
    const globalClasses = Styles();
    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <Box>
            <CssBaseline />
            <Box className={ProfessorHomePageClasses.paperContainer}>
                
                <Avatar className={ProfessorHomePageClasses.avatar}></Avatar>

                <Stack className={ProfessorHomePageClasses.socialicons} direction="row" spacing={2}>
                    <YouTubeIcon style={{ color: '#FF0000', fontSize: 50 }} />
                    <LinkedInIcon style={{ color: '#0077b5', fontSize: 50 }} />
                    <TwitterIcon style={{ color: '#1DA1F2', fontSize: 50 }} />
                </Stack>

                <Button className={ProfessorHomePageClasses.editprofilebutton} type="submit">
                Edit Profile
                </Button>
                
            </Box>
            
            <Grid container spacing={2}>
                
                <Grid item xs={12} md={6} className={ProfessorHomePageClasses.positions1}>
                    <ProgramsList />
                </Grid>
                
                <Grid item xs={12} md={6} className={ProfessorHomePageClasses.positions2}>
                    <StudentList />
                </Grid>
                
            </Grid>
            
        </Box>
    );
}