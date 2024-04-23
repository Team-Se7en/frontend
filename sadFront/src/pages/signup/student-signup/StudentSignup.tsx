import { Bounce, ToastContainer, toast } from 'react-toastify';
import {
Box,
Button,
Container,
CssBaseline,
Grid,
Link,
TextField,
Typography,
} from "@mui/material";
import React, { useState } from "react";

import Cookies from "js-cookie";
import StudentSignUpStyles from "./StudentSignup-styles";
import client from "../../../Http/axios";

// import { useNavigate } from "react-router-dom";

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

    // const navigate = useNavigate();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        // navigate("/signup/verification");
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

        window.location.href = "/signup/verification";

        console.log(response.data);

        })

        .catch((error:any) =>{
            console.error("SignUp failed:", error);
            setsignupError("Invalid email or password. Please try again.");
            console.log(error.response.data);
            
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                
            setOpenSnackbar(true);
    });
        
        console.log(formData);
    };


    const StudentSignUpClasses = StudentSignUpStyles();

    return (
        <Box className={StudentSignUpClasses.authBackground}>
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
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
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
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
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

