import 'react-toastify/dist/ReactToastify.css';

import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import LoginStyles from "./Login.styles";
import Styles from "Styles";
import client from "../../Http/axios";
import clsx from "clsx";

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [emailError, setEmailError] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const rememberMeValue = Cookies.get('rememberMe') === 'true';
        console.log("Remember Me Value:", rememberMeValue);
        setRememberMe(rememberMeValue);
        
        if (rememberMeValue) {
            const savedEmail = Cookies.get('email');
            const savedPassword = Cookies.get('password');
            console.log("Saved Email:", savedEmail);
            
            if (savedEmail) {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    email: savedEmail,
                    password: savedPassword || "",
                }));
            }
        }
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const lowercasedValue = name === "email" ? value.toLowerCase() : value;

        if (lowercasedValue.trim() === "") {
            if (name === "email") {
                setEmailError("");
            }
        } else {
            if (name === "email") {
                let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                if (!emailRegex.test(lowercasedValue)) {
                    setEmailError("Invalid Email Format. Please Enter a Valid Email Address.");
                } else {
                    setEmailError("");
                }
            }
        }
        
        setFormData({
            ...formData,
            [name]: lowercasedValue,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let data = {
            email:formData.email,
            password: formData.password,
        };
        
        console.log("Request Data:", data);

        client.post("/auth/jwt/create/", data)
        .then((response:any) => {
            const token = response.data.access;
            Cookies.set('token', token, { expires: 7 });

            if (rememberMe) {
                Cookies.set('email', formData.email, { expires: 7 });
                Cookies.set('rememberMe', 'true', { expires: 7 });
            } else {
                Cookies.remove('email');
                Cookies.remove('rememberMe');
            }

            client.get("/auth/users").then((response:any) => {
                const redirect = () => {
                if (response.data[0].is_student){
                    window.location.href = "/studenthomepage";
                    
                } else{
                    window.location.href = "/professorhomepage";
                }

            };
            
            setTimeout(redirect, 3000);

            });

            
            toast.success("Login Successful!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }); 
            
        }).catch((error:any) =>{
            toast.error(error.response.data.detail, {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                
            setOpenSnackbar(true);
        });
        
    };

    const globalClasses = Styles();
    const loginClasses = LoginStyles();

    return (
        <Box className={clsx(loginClasses.authBackground)}>
            <ToastContainer transition={Flip} />
            <Container component="main" maxWidth="xs" className={clsx(loginClasses.wrapper)}>
                <CssBaseline />
                
                <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}>
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
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            )
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} color="primary" />}
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
