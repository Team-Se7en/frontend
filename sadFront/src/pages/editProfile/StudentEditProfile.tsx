import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import Styles from "Styles";
import clsx from "clsx";
import EditProfileStyles from "./EditProfile-styles";
import { useState } from "react";
import { StudentProfileImage } from "@assets";
import axios from "axios";

export function StudentEditProfile() {
    const [formData, setFormData] = useState({
        firstName: "Jesse",
        lastName: "Amiri",
        university: "MIP",
        ssn: 2147483647,
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(formData);
        const sendingData = {
            university_name: formData.university,
            user: {
                first_name: formData.firstName,
                last_name: formData.lastName,
            },
            ssn: formData.ssn
        }

        try {
            const response = await axios.patch('https://seven-apply.liara.run/eduportal/student-profile/me/', sendingData);

            if (response.status !== 204) {
                throw new Error('Failed to edit student profile');
            }


        } catch (error) {
            console.error('Error:', error);

        }
    };

    const globalClasses = Styles();
    const editProfileStyles = EditProfileStyles();

    return (
        <Box className={clsx(editProfileStyles.background)}>
            <Container component="main" className={clsx(editProfileStyles.wrapper)}>
                <CssBaseline />
                <Box
                    className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
                >
                    <Box className={clsx(editProfileStyles.uperImage)}>
                        <img src={StudentProfileImage} className={clsx(editProfileStyles.profileImage)}></img>
                        <Typography fontSize={30}>The Student</Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="SSN"
                                    name="ssn"
                                    value={formData.ssn}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="University"
                                    name="university"
                                    value={formData.university}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} className={clsx(editProfileStyles.lowerButtons)}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                                </Button>
                                <Button
                                    type="reset"
                                    variant="contained"
                                    color="warning"
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}