import { Box, Container, CssBaseline, Avatar, Typography, Grid } from "@mui/material";
import clsx from "clsx";
import Styles from "../../../Styles";
import VerificationStyles from "./AccountVerification.style";


export function Verification() {
    const globalClasses = Styles();
    const verificationClasses = VerificationStyles();

    return (
        <Box className={clsx(globalClasses.verification)}>
            <Container component="main" maxWidth="sm" className={clsx(verificationClasses.wrapper)}>
          <CssBaseline />
          <Box
            style={{ height: '350px' }}
            className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
          >
            <Avatar className="avatar"></Avatar>
            <Typography component="h1" variant="h5">
            Please Check Your Email
            </Typography>
            <Typography>Thanks :)</Typography>
          
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
        </Container>
      </Box>
    );
  }
