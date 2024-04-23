import { Bounce, ToastContainer, toast } from 'react-toastify';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import{ useEffect, useState } from 'react';

import Cookies from "js-cookie";
import StudentSignUpStyles from "./student-signup/StudentSignup-styles";
import axios from "axios";
import client from "../../Http/axios";
import { useParams } from "react-router-dom";

export function SignupVerification() {

    const { uid, token } = useParams(); 

    useEffect(() => {
        console.log('uid:', uid);
        console.log('token:', token);
    }, [uid, token]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // window.location.replace("/login");

        client.post("/auth/users/activation/",{
            uid,
            token,
        })
        .then((response:any) => {
            console.log(response)

            window.location.href = "/login";

            }).catch((error:any) => {
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

            })
        
    };

    const StudentSignUpClasses = StudentSignUpStyles();

    return (
        <Box className={StudentSignUpClasses.authBackground}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={StudentSignUpClasses.wrapper}>

                    <Typography component="h1" variant="h5">
                        Email Verification
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >

                        <Button className={StudentSignUpClasses.button1}
                            type="submit"
                            fullWidth
                        >
                            Verify
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
