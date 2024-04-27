import { Box, CssBaseline } from "@mui/material";
import AccountMenu from "components/accountmenu/AccountMenu";

// import Styles from "Styles";

// function showMenu(menu: ProfessorMenus) {
//     switch (menu) {
//         case ProfessorMenus.RecentPositions:
//             return (
//                 <ProfessorRecentPositions />
//             );
//         case ProfessorMenus.Programs:
//             return (
//                 <ProgramsList />
//             );

//         case ProfessorMenus.RecentRequests:
//             return (
//                 <StudentList />
//             )

//         default:
//             return (
//                 <></>
//             )
//     }
// }

export function ProfessorHomePage() {
    // const globalClasses = Styles();

    // const ProfessorHomePageClasses = HomePageProfessorStyles();

    // const [activeMenu, setActiveMenu] = useState(ProfessorMenus.RecentPositions);

    // const handleMenuChange = (menu: ProfessorMenus) => {
    //     setActiveMenu(menu);
    // }

    return (
        <Box>
            <CssBaseline />
            {/* <Navbar /> */}
            <AccountMenu />
            {/* <Box className={globalClasses.fullyCenter}>
                {
                    showMenu(activeMenu)
                }
            </Box> */}
            {/* <Footer /> */}

        </Box>
    );
}
