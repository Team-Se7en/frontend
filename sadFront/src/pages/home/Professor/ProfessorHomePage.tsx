import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import ProgramCard from "components/programcard/ProgramCard";
import { ProgramsList } from "components/programslist/ProgramsList";
import Styles from "Styles";
import clsx from "clsx";

export function ProfessorHomePage() {
    const globalClasses = Styles();
    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <Box className={clsx(ProfessorHomePageClasses.paperContainer)}>
            {/* <Container component="main" maxWidth="lg" className={clsx(ProfessorHomePageClasses.wrapper)}> */}
                {/* </Container> */}

                <CssBaseline />

                
                <ProgramCard  />
                {/* <ProgramsList /> */}
                
        </Box>
    );
}
