import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";
import { ProfessorCardViewShortInfo, Status } from "@models";
import { useEffect, useState } from "react";

import AccountMenu from "../../../components/accountmenu/AccountMenu";
import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import Styles from "Styles";
import clsx from "clsx";
import Navbar from "components/navbar_foter/navbar/navbar";
import Footer from "components/navbar_foter/foter/foter";
import { ProfessorRecentPositions } from "components/professor-recent-positions/ProfessorRecentPositions";

export function ProfessorHomePage() {
    const globalClasses = Styles();

    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
            <Box>
                <CssBaseline />
                {/* <Navbar /> */}
                <AccountMenu />
                <ProfessorRecentPositions />
                {/* <Footer /> */}

            </Box>
    );
}
