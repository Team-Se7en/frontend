import { Box, Container, CssBaseline, Tabs, Tab, Grid, TextField, Button, Typography } from "@mui/material";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../Http/axios";
import Styles from "../../Styles";
import EditProfileStyles from "./EditProfile-styles";
import { ProfessorProfileImage } from "../../assets/images";


export function ProfessorEditProfile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        department: "",
        university: "",
        // birthdate: null,
    });

    useEffect(() => {
        showInfo()
    })

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
            user: {
                first_name: formData.firstName,
                last_name: formData.lastName
            },
            university: formData.university,
            department: formData.department,
            birth_date: "2024-04-26"
        }

        try {
            const response = await client.patch('/eduportal/professors/me/', sendingData);
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
    };


    async function showInfo() {

        try {
            const response = await client.get("/eduportal/userinfo/");
            formData.firstName = response.data.first_name
            formData.lastName = response.data.last_name
            formData.department = response.data.professor.department
            formData.university = response.data.professor.university
            // formData.birthdate = response.data.professor.birth_date
            console.log(response.data)

        } catch (error) {
            console.error('Error:', error);
        }
    }


    const [value, setValue] = React.useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    // const navigateToForgetPass = () => {
    //     navigate("/forgot-pass");
    // }
    const navigateToHome = () => {
        navigate("/professorhomepage");
    }
    
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
                        {/* <Typography fontSize={30}>Welcome</Typography> */}
                    </Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Edit Profile" {...a11yProps(0)} />
                                    <Tab label="My Positions" {...a11yProps(1)} />
                                    {/* <Tab label="Reset Email" {...a11yProps(2)} /> */}
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
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
                                        {/* <Grid item xs={12}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Controlled picker"
                                                    value={formData.birthdate}
                                                    onChange={handleInputChange}
                                                />
                                            </LocalizationProvider>
                                        </Grid> */}
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
                                                onClick={navigateToHome}
                                            >
                                                Cancel
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                Item Two
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                            </CustomTabPanel>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}