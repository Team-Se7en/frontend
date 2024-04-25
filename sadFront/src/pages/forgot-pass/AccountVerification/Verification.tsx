import { Avatar, Box, Container, CssBaseline, Grid, Typography } from "@mui/material";

import Styles from "Styles";
import clsx from "clsx";
import verificationStyles from "./AccountVerification.style";

export function Verification() {
    const globalClasses = Styles();
    const verificationClasses = verificationStyles();

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
