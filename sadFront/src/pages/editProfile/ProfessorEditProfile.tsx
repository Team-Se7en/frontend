import {  Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import Styles from "Styles";
import clsx from "clsx";
import EditProfileStyles from "./EditProfile-styles";
import { useState } from "react";
import { ProfessorProfileImage } from "@assets";

export function ProfessorEditProfile() {
	const [formData, setFormData] = useState({
		firstName: "William",
		lastName: "Amiri",
		email: "WillI@gmail.com",
		password: "qwer1234",
		researchInterests: "",
		department: "management",
		university: "MIP",
	  });
	
	  const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	  };
	
	  const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(formData);
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
						<img src={ProfessorProfileImage} className={clsx(editProfileStyles.profileImage)}></img>
						<Typography fontSize={30}>The Professor</Typography>
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
                                        type="email"
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        label="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Research Interests"
                                        name="researchInterests"
                                        value={formData.researchInterests}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Department"
                                        name="department"
                                        value={formData.department}
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
                                        type="submit"
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