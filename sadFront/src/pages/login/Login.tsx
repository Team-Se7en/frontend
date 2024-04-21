import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";

import LoginStyles from "./Login.styles";
import Styles from "Styles";
import clsx from "clsx";
import { useState } from "react";

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [emailError, setEmailError] = useState("");

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;

        if (name === "email") {
            let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            if (!emailRegex.test(value)) {
                setEmailError("Invalid Email Format. Please Enter a Valid Email Address.");
            } else {
                setEmailError("");
            }
        }
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(formData);
    };

    const globalClasses = Styles();
    const loginClasses = LoginStyles();

    return (
        <Box className={clsx(loginClasses.authBackground)}>
            <Container component="main" maxWidth="xs" className={clsx(loginClasses.wrapper)}>
                <CssBaseline />
                <Box
                    className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
                >
                    <Avatar className="avatar"></Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        
                    <TextField
                            error={!!emailError}
                            helperText={emailError}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={formData.email}
                            onChange={handleInputChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="login-btn"
                        >
                            Login
                        </Button>
                        <Grid container >
                            <Grid item xs sx={{ paddingBottom: '20px' }}>
                                <Link href="/forgot-pass" variant="body2" >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
