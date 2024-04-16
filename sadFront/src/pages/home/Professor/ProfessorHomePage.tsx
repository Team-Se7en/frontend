// import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";

// import HomePageProfessorStyles from "./ProfessorHomePage-styles";
// import ProgramCard from "components/programcard/ProgramCard";
// import Styles from "Styles";
// import clsx from "clsx";

// export function ProfessorHomePage() {

//     const globalClasses = Styles();
//     const ProfessorHomePageClasses = HomePageProfessorStyles();

//     return (
//         <Box className={clsx(ProfessorHomePageClasses)}>
//             <Container component="main" maxWidth="xs" className={clsx(ProfessorHomePageClasses.wrapper)}>
//                 <CssBaseline />
//                 <Box
//                     className={clsx(globalClasses, globalClasses)}
//                 >
//                 <ProgramCard/>
                

//                 </Box>
                
//             </Container>
//         </Box>
//     );
// }

import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";

import HomePageProfessorStyles from "./ProfessorHomePage-styles";
import ProgramCard from "components/programcard/ProgramCard";
import Styles from "Styles";
import clsx from "clsx";

export function ProfessorHomePage() {
    const globalClasses = Styles();
    const ProfessorHomePageClasses = HomePageProfessorStyles();

    return (
        <Box className={clsx(ProfessorHomePageClasses)}>
            <Container component="main" maxWidth="lg" className={clsx(ProfessorHomePageClasses.wrapper)}>
                <CssBaseline />

                <Box className={clsx(globalClasses, globalClasses)}>
                    <ProgramCard />
                    
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Box className={clsx(globalClasses)}>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                Edit Profile
                            </Button>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h6" gutterBottom>
                            Courses
                        </Typography>

                        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                            Publications
                        </Typography>
                        <Link href="#" onClick={() => {/* handle link */}}>Research Paper</Link>
                    </Grid>
                </Grid>
                </Box>
                
            </Container>
        </Box>
    );
}