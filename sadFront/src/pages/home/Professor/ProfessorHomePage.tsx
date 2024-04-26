import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";
import { ProfessorCardViewShortInfo, Status } from "@models";
import { useEffect, useState } from "react";

import AccountMenu from "../../../components/accountmenu/AccountMenu";
import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import Styles from "Styles";
import clsx from "clsx";

export function ProfessorHomePage() {
    const globalClasses = Styles();

    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <>
        <Box>
            <CssBaseline />
            <AccountMenu/>
            
        </Box>

    );
}
