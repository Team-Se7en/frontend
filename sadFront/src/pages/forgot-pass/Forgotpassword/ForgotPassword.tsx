import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import ForgotStyles from "./forgotPassword.styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function Forgot() {
    const [formData, setFormData] = useState({
        email: "",
    });

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
        navigate("/verification");
        
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
                            
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="forgot-btn"
                        >
                            Send password reset email
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