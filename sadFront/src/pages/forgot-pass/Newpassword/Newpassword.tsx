import 'react-toastify/dist/ReactToastify.css';

import { Avatar, Box, Button, Container, CssBaseline, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import{ useEffect, useState } from 'react';

import NewpasswordStyles from "./Newpassword.styles";
import Styles from "Styles";
import axios from 'axios';
import clsx from "clsx";
import { useParams } from "react-router-dom";

export function Newpassword() {
    const [formData, setFormData] = useState({
        createpassword: "",
        repeatpassword: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { uid, token } = useParams(); 

    useEffect(() => {
        console.log('uid:', uid);
        console.log('token:', token);
    }, [uid, token]);
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        if (formData.createpassword !== formData.repeatpassword) {
            toast.error("The two password fields didn't match", {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            return;
        } else {
            setPasswordError("");
        }
    
        try {
            const response = await axios.post('https://seven-apply.liara.run/auth/users/reset_password_confirm/', {
                uid,
                token,
                new_password: formData.createpassword
                
            });
            const redirect = () => {
            window.location.replace("/login")
            }
            
            setTimeout(redirect, 3000);

            toast.success("Password Reset Successful", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        console.log('Password reset successful:', response.data);
        } catch (error) {
            console.error('Error resetting password:', error);

        }
    };


    const globalClasses = Styles();
    const newpasswordClasses = NewpasswordStyles();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{}} className={clsx(globalClasses.newpassword)}>
            <ToastContainer transition={Flip} />
            <Container component="main" maxWidth="xs" className={clsx(newpasswordClasses.wrapper)}>
                <CssBaseline />
                <Box
                    className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
                >
                    <Avatar className="avatar"></Avatar>
                    <Typography component="h1" variant="h5">
                    Create Password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="createpassword"
                            type={showPassword ? 'text' : 'password'}
                            label="New Password"
                            value={formData.createpassword}
                            onChange={(e) => setFormData({ ...formData, createpassword: e.target.value })}
                            error={passwordError !== ""}
                            helperText={passwordError}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleShowPassword}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="repeatpassword"
                            type={showPassword ? 'text' : 'password'}
                            label="Repeat Password"
                            value={formData.repeatpassword}
                            onChange={(e) => setFormData({ ...formData, repeatpassword: e.target.value })}
                            error={passwordError !== ""}
                            helperText={passwordError}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleShowPassword}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="newpassword-btn"
                        >
                            Submit
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Newpassword;
