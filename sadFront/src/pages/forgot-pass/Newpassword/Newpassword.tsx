import{ useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios library
import { Avatar, Box, Button, Container, CssBaseline, Grid, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import clsx from "clsx";
import Styles from "Styles";
import NewpasswordStyles from "./Newpassword.styles";
import { useParams, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function Newpassword() {
    const [formData, setFormData] = useState({
        createpassword: "",
        repeatpassword: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { uid, token } = useParams(); // Get parameters from the URL
    const navigate = useNavigate(); // For navigation between routes

    useEffect(() => {
        // Perform operations with uid and token
        console.log('uid:', uid);
        console.log('token:', token);
    }, [uid, token]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        navigate("/login");

        // Check if passwords match
        if (formData.createpassword !== formData.repeatpassword) {
            setPasswordError("The passwords do not match");
            return;
        } else {
            setPasswordError("");
        }

        try {
            // Send request to API to reset password
            const response = await axios.post('https://seven-apply.liara.run/auth/users/reset_password_confirm/', {
                uid,
                token,
                new_password: formData.createpassword
            });

            console.log('Password reset successful:', response.data);
             // Redirect to login page after successful password reset
        } catch (error) {
            console.error('Error resetting password:', error);
            // Handle error condition
        }
    };

    const globalClasses = Styles();
    const newpasswordClasses = NewpasswordStyles();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box className={clsx(globalClasses.newpassword)}>
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
