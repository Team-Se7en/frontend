import { Avatar, Box, Container, CssBaseline,  Grid , Typography } from "@mui/material";
import clsx from "clsx";
import Styles from "Styles";
import verificationStyles from "./AccountVerification.style";






export function Verification() {
    const globalClasses = Styles();
    const verificationClasses = verificationStyles();

    return (
        <Box className={clsx(globalClasses.verification)}>
        <Container component="main" maxWidth="sm" className={clsx(verificationClasses.wrapper)}>
          <CssBaseline />
          <Box
            className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
          >
            <Avatar className="avatar"></Avatar>
            <Typography component="h1" variant="h5">
            A link was sent to your email and you can confirm it
            </Typography>
            <Typography>Thank you for choosing our site :)</Typography>
           
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
