import { Avatar, Box, Button, Container, CssBaseline, Grid, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import NewpasswordStyles from "./Newpassword.styles";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function Newpassword() {
    const [formData, setFormData] = useState({
        createpassword: "",
        repeatpassword: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
    
        if (formData.createpassword !== formData.repeatpassword) {
            setPasswordError("The passwords do not match");
            return;
        } else {
            setPasswordError("");
        }

        console.log(formData);
        navigate("/login");
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
                    create password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="createpassword"
                            type={showPassword ? 'text' : 'password'}
                            label="New password"
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
                            label="Repeat password"
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
                            submit
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
