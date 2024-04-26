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
import { ProgramsList } from "components/programslist/ProgramsList";
import { StudentList } from "components/studentlist";
import { ProfessorMenus } from "models/ProfessorMenus";

function showMenu(menu: ProfessorMenus) {
    switch (menu) {
        case ProfessorMenus.RecentPositions:
            return (
                <ProfessorRecentPositions />
            );
        case ProfessorMenus.Programs:
            return (
                <ProgramsList />
            );

        case ProfessorMenus.RecentRequests:
            return (
                <StudentList />
            )

        default:
            return (
                <></>
            )
    }
}

export function ProfessorHomePage() {
    const globalClasses = Styles();

    const ProfessorHomePageClasses = HomePageProfessorStyles();

    const [activeMenu, setActiveMenu] = useState(ProfessorMenus.RecentPositions);

    const handleMenuChange = (menu: ProfessorMenus) => {
        setActiveMenu(menu);
    }

    return (
        <Box>
            <CssBaseline />
            {/* <Navbar /> */}
            <AccountMenu menuChange={handleMenuChange} />
            <Box className={globalClasses.fullyCenter}>
                {
                    showMenu(activeMenu)
                }
            </Box>
            {/* <Footer /> */}

        </Box>
    );
}
