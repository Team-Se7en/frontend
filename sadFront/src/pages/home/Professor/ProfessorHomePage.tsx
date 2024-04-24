import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";
import { ProfessorCardViewShortInfo, Status } from "@models";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ProfessorRequestCard } from "@components";
import ProgramCardak from "components/programcard/ProgramCardak";
import { ProgramsListCopy } from "components/programslistcopy/ProgramsListCopy";
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

    const model: ProfessorCardViewShortInfo = {
        title: 'Laboratory Research',
        status: Status.closed,
        tags: ['science', 'lab'],
        startDate: new Date(),
        endDate: new Date(),
        universityName: "Iran University of Science and Technology",
        studentCapacity: 12,
        fee: 1.99,
        positionStartDate: new Date(),
        duration: {
        year: 1,
        month: 2,
        day: 4
        },
        requestingStudents: 4,
    }

    return (
        <Box>
            <CssBaseline />

            <Box className={ProfessorHomePageClasses.paperContainer}>
                <Stack direction="column" alignItems="center" spacing={2} style={{ marginTop: '25px' }}>
                    
                    <Avatar className={ProfessorHomePageClasses.avatar}></Avatar>
                    
                    <Button className={ProfessorHomePageClasses.editprofilebutton} type="submit">
                    Profile Management
                    </Button>

                    <Button className={ProfessorHomePageClasses.addprogrambutton} type="submit">
                    Program Management
                    </Button>
                    
                </Stack>
                
                <Stack className={ProfessorHomePageClasses.socialicons} direction="row" spacing={2} style={{ marginLeft: 'auto' }}>
                    <YouTubeIcon style={{ color: '#FF0000', fontSize: 50 }} />
                    <LinkedInIcon style={{ color: '#0077b5', fontSize: 50 }} />
                    <TwitterIcon style={{ color: '#1DA1F2', fontSize: 50 }} />
                </Stack>
                
            </Box>

            
            <Grid container spacing={2}>
                
                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                    <ProfessorRequestCard model = {model} />
                </Grid>
                

                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                    <StudentList />
                </Grid>

                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                    <ProgramsListCopy />
                </Grid>
                
            </Grid>

        </Box>
    );
}
