import 'react-toastify/dist/ReactToastify.css';

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

        client.post("/auth/users/activation/",{
            uid,
            token,
        })
        
        .then((response:any) => {

            const redirect = () => {
            window.location.href = "/login";
            console.log(response)
            }

            setTimeout(redirect, 3000);

            toast.success("Verification Complete!", {
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
            
            .catch((error:any) => {
                toast.error(error.response.data, {
                    position: "top-center",
                    autoClose: 4000,
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
            <ToastContainer transition={Bounce} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={StudentSignUpClasses.wrapper}>

                    <Typography component="h1" variant="h5">
                        Please Verify Your Email
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
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
