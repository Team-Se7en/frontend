import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import LoginStyles from "./Login.styles";

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    const globalClasses = Styles();
    const loginClasses = LoginStyles();

    return (
        <Box className={clsx(globalClasses.authBackground)}>
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot-pass" variant="body2">
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
