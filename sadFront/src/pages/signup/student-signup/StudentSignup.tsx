import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography
} from "@mui/material";
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import React, { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Cookies from "js-cookie";
import StudentSignUpStyles from "./StudentSignup-styles";
import client from "../../../Http/axios";

export function StudentSignup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const [emailError, setEmailError] = useState("");
    const [signupError, setsignupError] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    
    const handleInputChange = (event: any) => {
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
            'first_name': formData.firstName,
            'last_name': formData.lastName,
            'is_student': true,
            'email': formData.email,
            'password': formData.password,
            're_password': formData.confirmPassword,
        };
        
        console.log("Request Data:", data);
        
        Cookies.remove("token");
        client.post("/auth/users/", data)
        .then((response:any) => {

            const redirect = () => {
            window.location.href = "/verification";
            
            console.log(response.data);
            }
        
            setTimeout(redirect, 3000);

            toast.success("Sign Up Successful!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        })

        .catch((error:any) =>{
            console.log(error.response.data);
            
        if (error.response && error.response.data) {
            
            if (error.response.data.password && error.response.data.password.length > 0) {
            toast.error(error.response.data.password[0], {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                
                if (error.response.data.password.length > 1) {
                    toast.error(error.response.data.password[1], {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                }

                if (error.response.data.password.length > 2) {
                    toast.error(error.response.data.password[2], {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
    
                }

            }
    
            if (error.response.data.non_field_errors && error.response.data.non_field_errors.length > 0) {
            toast.error(error.response.data.non_field_errors[0], {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
    
            }
    
            if (error.response.data.email && error.response.data.email.length > 0) {
            toast.error(error.response.data.email[0], {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
    
            }

    }
            
        setOpenSnackbar(true);
    });
    
        
        console.log(formData);
    };


    const StudentSignUpClasses = StudentSignUpStyles();

    return (
        <Box className={StudentSignUpClasses.authBackground}>
            <ToastContainer transition={Bounce} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={StudentSignUpClasses.wrapper}>

                    <Typography component="h1" variant="h5">
                        Student Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    error={!!emailError}
                                    helperText={emailError}
                                    autoComplete="email"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="new-password"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
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
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="new-password"
                                    name="confirmPassword"
                                    required
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
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
                            </Grid>
                        </Grid>

                        <Button className={StudentSignUpClasses.button1}
                            type="submit"
                            fullWidth
                        >
                            Sign Up
                        </Button>

                        <Grid container justifyContent="center" paddingTop='5px'>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

