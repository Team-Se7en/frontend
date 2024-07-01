import { Box, Container, Typography } from "@mui/material";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Styles from "../../Styles";
import SignupStyles from "./Signup-styles";

export function Signup() {
  const globalStyles = Styles();
  const signupStyles = SignupStyles();
  return (
    // <Container maxWidth="sm">
    //   <CssBaseline />
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Typography variant="h4" align="center" gutterBottom>
    //       Signup as a ...
    //     </Typography>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       component={Link}
    //       to="/signup/student"
    //       sx={{
    //         height: 180,
    //         width: 180,
    //         margin: 2,
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <PersonIcon fontSize="large"></PersonIcon>
    //       <Typography>Student</Typography>
    //     </Button>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       component={Link}
    //       to="/signup/professor"
    //       sx={{
    //         height: 180,
    //         width: 180,
    //         margin: 2,
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <PersonIcon fontSize="large"></PersonIcon>
    //       <Typography>Professor</Typography>
    //     </Button>
    //   </Box>
    // </Container>
    <>
      <Box className={clsx(signupStyles.wrapper, globalStyles.displayFlex)} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Container component={Link} to="/signup/professor" maxWidth={false} disableGutters className={clsx("signupImage professorImage")}>
          <Typography className="signupText">
            Signup as Professor
          </Typography>
        </Container>
        <Container component={Link} to="/signup/student" maxWidth={false} disableGutters className={clsx("signupImage studentImage")}>
          <Typography className="signupText">
            Signup as Student
          </Typography>
        </Container>
      </Box>

    </>
  );
}

export default Signup;
