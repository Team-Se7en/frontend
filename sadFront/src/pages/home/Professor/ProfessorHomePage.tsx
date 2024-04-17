import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import ProgramCard from "components/programcard/ProgramCard";
import { ProgramsList } from "components/programslist/ProgramsList";
import StudentCard from "components/studentcard/StudentCard";
import { StudentList } from "components/studentlist";
import Styles from "Styles";
import clsx from "clsx";

export function ProfessorHomePage() {
    const globalClasses = Styles();
    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <Box className={ProfessorHomePageClasses.paperContainer}>
                <Avatar
                className={ProfessorHomePageClasses.avatar}>
                </Avatar>

                <Grid 
                className={ProfessorHomePageClasses.positions1}><ProgramsList />
                </Grid>

                <Grid 
                className={ProfessorHomePageClasses.positions2}><StudentList />
                </Grid>
                

                
        </Box>
    );
}
