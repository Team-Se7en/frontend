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
import { getProfessorPositions } from "services/position.service";
import { useEffect, useState } from "react";

export function ProfessorHomePage() {
    const globalClasses = Styles();

    const [professorPositions, setProfessorPositions] = useState([]);

    useEffect(() => {
        const fetchRecentPositions = async () => {
            const positionsData = await getProfessorPositions({ professorId: 1 });
            setProfessorPositions(positionsData)
        };

        fetchRecentPositions();
    });

    const ProfessorHomePageClasses = HomePageProfessorStyles();

    let model: ProfessorCardViewShortInfo[];
    getProfessorPositions({ professorId: 1 }).then(result => {
        model = result.data;
    }).catch(error => {

    });

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

                {
                    professorPositions.map(position => (
                        <Grid item xs={12} md={4} className={ProfessorHomePageClasses.positions}>
                            <ProfessorRequestCard model={position} />
                        </Grid>
                    ))
                }


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
