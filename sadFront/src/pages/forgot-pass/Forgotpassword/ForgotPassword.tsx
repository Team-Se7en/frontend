import { Box, Container, CssBaseline, Avatar, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../../Styles";
import ForgotStyles from "./forgotPassword.styles";


const isValidEmail = (email:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

export function Forgot() {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [passwordError,setPasswordError] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isValidEmail(formData.email)) {
            setPasswordError('Invalid email format');
            return;
        }else{
               navigate("/verification");
        }
        
        try {
            const response = await axios.post('https://seven-apply.liara.run/auth/users/reset_password/', formData);

            if (response.status !== 204) {
                throw new Error('Failed to reset password');
            }

            
        } catch (error) {
            console.error('Error:', error);
            
        }
    };

    const globalClasses = Styles();
    const forgotClasses = ForgotStyles();

    return (
        <Box  className={clsx(globalClasses.forgotBackground)}>
            <Container component="main" maxWidth="xs" className={clsx(forgotClasses.wrapper)}>
                <CssBaseline />
                <Box
                    className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
                >
                    <Avatar className="avatar"></Avatar>
                    <Typography component="h1" variant="h5">
                        Reset your password
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
                            error={passwordError !== ""}
                            helperText={passwordError}
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="forgot-btn"
                        >

                         reset password 
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