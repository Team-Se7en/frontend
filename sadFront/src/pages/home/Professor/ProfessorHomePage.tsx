import { Avatar, Box, Button, CssBaseline, Grid } from "@mui/material";
import { ProfessorCardViewShortInfo } from "@models";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ProgramsListCopy } from "components/programslistcopy/ProgramsListCopy";
import { Stack } from '@mui/material';
import { StudentList } from "components/studentlist";
import Styles from "Styles";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getProfessorRecentPositions } from "services/position.service";
import { useEffect, useState } from "react";
import { ProfessorRequestCard } from "@components";
import { ProfessorRecentPositions } from "components/professor-recent-positions/ProfessorRecentPositions";

export function ProfessorHomePage() {
    const globalClasses = Styles();

    const [professorPositions, setProfessorPositions] = useState<ProfessorCardViewShortInfo[]>([]);

    useEffect(() => {
        const fetchRecentPositions = async () => {
            const result = await getProfessorRecentPositions();
            setProfessorPositions(result.data)
        };

        fetchRecentPositions();
    }, []);

    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <>
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

                    <Button className={ProfessorHomePageClasses.addprogrambutton} type="submit">
                        Add Program
                    </Button>

                </Stack>

                <Stack className={ProfessorHomePageClasses.socialicons} direction="row" spacing={2} style={{ marginLeft: 'auto' }}>
                    <YouTubeIcon style={{ color: '#FF0000', fontSize: 50 }} />
                    <LinkedInIcon style={{ color: '#0077b5', fontSize: 50 }} />
                    <TwitterIcon style={{ color: '#1DA1F2', fontSize: 50 }} />
                </Stack>

            </Box>


            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions} sx={{ flexDirection: 'column'}}>
                    <ProfessorRecentPositions />
                </Grid>


                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                    <StudentList />
                </Grid>

                <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                    <ProgramsListCopy />
                </Grid>

            </Grid>

        </Box>
        {/* <Modal></Modal> */}
        </>
    );
}
