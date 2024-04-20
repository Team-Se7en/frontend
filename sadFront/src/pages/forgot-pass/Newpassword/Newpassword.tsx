import{ useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios library
import { Avatar, Box, Button, Container, CssBaseline, Grid, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import clsx from "clsx";
import Styles from "Styles";
import NewpasswordStyles from "./Newpassword.styles";
import { useParams} from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';'react-router-dom';


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
    // const isValidPassword = (password: string): boolean => {
    //     // رمز عبور باید حداقل ۸ کاراکتر داشته باشد
    //     if (password.length < 8) return false;
    
    //     // رمز عبور باید حداقل یک حرف بزرگ و یک حرف کوچک داشته باشد
    //     // if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) return false;
    
    //     // رمز عبور باید حداقل یک عدد داشته باشد
    //     // if (!/\d/.test(password)) return false;

    //     // if (!/[^A-Za-z0-9]/.test(password)) return false;
    
    //     return true;
    // };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        if (formData.createpassword !== formData.repeatpassword) {
            setPasswordError("The passwords do not match");
            return;
        } else {
                //   if ((!isValidPassword(formData.createpassword))){
                //     setPasswordError("Password must contain at least one uppercase letter, one lowercase letter,one special character, one number, and be at least 8 characters long");
                //         return;
                // }else{
                    
    
        try {
            const response = await axios.post('https://seven-apply.liara.run/auth/users/reset_password_confirm/', {
                uid,
                token,
                new_password: formData.createpassword
            });
            console.log('Password reset successful:', response.data);
            window.location.replace("/login");
        } catch (error) {
            console.error('Error resetting password:', error);
            const errorMessages = error.response?.data?.new_password || [];
            setPasswordError(errorMessages.join('\n') || "An error occurred");
        }
    }
    };


    const globalClasses = Styles();
    const newpasswordClasses = NewpasswordStyles();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{}} className={clsx(globalClasses.newpassword)}>
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
