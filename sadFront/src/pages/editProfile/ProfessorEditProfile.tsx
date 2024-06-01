import { Box, Container, CssBaseline, Tabs, Tab, Grid, TextField, Button, Typography, Paper, List, ListItem, ListItemText, InputAdornment, IconButton, Select, MenuItem, CircularProgress } from "@mui/material";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../Http/axios";
import Styles from "../../Styles";
import EditProfileStyles from "./EditProfile-styles";
import { ProfessorProfileImage } from "../../assets/images";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Spacer } from "../../components/ui/Spacer";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import { EditCV, ViewCV } from "../../assets/icons";


export function ProfessorEditProfile() {

    const [loading, setLoading] = useState(false);
    const [formChanged, setFormChanged] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "string",
        last_name: "string",
        // university: 1,
        department: "string",
        birth_date: "2024-05-30",
        major: 1,
    });

    const [universities, setUniversities] = useState<{ name: string; id: number }[]>([]);
    const [myRequests, setMyRequests] = useState<{
        date_applied: any
        id: number
        position: number
        status: string
    }[]>([]);

    const [EmailResetformData, emailResetFormData] = useState({
        password: "",
        email: "",
    });

    const [passwordResetformData, PasswordResetFormData] = useState({
        new_password: "",
        re_new_password: "",
        current_password: ""
    });

    useEffect(() => {
        showInfo()
    }, [])

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormChanged(true)
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const sendingData = {
            user: {
                first_name: formData.first_name,
                last_name: formData.last_name,
            },
            university: selectedUniversity,
            department: formData.department
        }
        console.log(sendingData);

        try {
            const response = client.patch('/eduportal/professors/me/', sendingData);
            console.log(response)
            toast.success("Information Updated successfully!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setFormChanged(false)
        } catch (error) {
            console.error('Error:', error);
            toast.error("Something went wrong. Please try again.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    const handleSubmitEmail = async (event: any) => {
        event.preventDefault();
        const sendingData = {
            current_password: EmailResetformData.password,
            new_email: EmailResetformData.email
        }
        try {
            const response = await client.post('/auth/users/set_email/', sendingData);
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
            toast.error("Something went wrong. Please try again.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    const handlePasswordSubmit = async (event: any) => {
        event.preventDefault();
        const sendingData =
        {
            new_password: passwordResetformData.new_password,
            re_new_password: passwordResetformData.re_new_password,
            current_password: passwordResetformData.current_password
        }
        console.log(sendingData)
        try {
            const response = await client.post('/auth/users/set_password/', sendingData);
            if (response.status < 210 && response.status >= 200) {
                toast.success("Password updated successfully!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
            toast.error("Something went wrong. Please try again.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    async function showInfo() {

        try {
            setLoading(true);
            // const currentUser = await client.get("/auth/users/me/");
            const response = await client.get("/eduportal/userinfo/");
            console.log(response)
            setFormData({ ...formData })
            formData.first_name = response.data.first_name
            formData.last_name = response.data.last_name
            formData.department = response.data.professor.department
            setSelectedUniversity(response.data.professor.university)
            selectedUniversity = response.data.professor.university

            const universitiesRes = await client.get("/eduportal/universities/");
            setUniversities(universitiesRes.data)
            console.log(universities)
            setLoading(false);

            // const myRequestsResponse = await client.get("/eduportal/requests/");
            // setMyRequests(myRequestsResponse.data)
            // console.log(myRequests)

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const [emailError, setEmailError] = useState("");
    const handleInputChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const lowercasedValue = name === "email" ? value.toLowerCase() : value;

        if (lowercasedValue.trim() === "") {
            if (name === "email") {
                setEmailError("");
            }
        } else {
            if (name === "email") {
                const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                if (!emailRegex.test(lowercasedValue)) {
                    setEmailError("Invalid Email Format. Please Enter a Valid Email Address.");
                } else {
                    setEmailError("");
                }
            }
        }

        emailResetFormData({
            ...EmailResetformData,
            [name]: lowercasedValue,
        });
    };

    const handleInputChangeResetPass = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        PasswordResetFormData({
            ...passwordResetformData,
            [name]: value,
        });
    };

    let [selectedUniversity, setSelectedUniversity] = useState<number | null>(null);
    const handleUniChange = (event: any) => {
        setSelectedUniversity(event.target.value as number);
        setFormChanged(true)
    };

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/professorhomepage");
    }
    const navigateToViewCV = () => {
        navigate("/cv/view");
    }
    const navigateToEditCV = () => {
        navigate("/cv/edit");
    }

    // const globalClasses = Styles();
    const editProfileStyles = EditProfileStyles();

    return (
        <Box className={clsx(editProfileStyles.background)}>
            <ToastContainer transition={Flip} />
            <Container component="main" className={clsx(editProfileStyles.wrapper)}>
                <CssBaseline />
                <Box sx={{ display: 'flex', height: '100%' }}>
                    <Box sx={{ backgroundColor: '#176B87', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box className={clsx(editProfileStyles.uperImage)}>
                            <div>
                                <img className={clsx(editProfileStyles.profileImage)} src={ProfessorProfileImage}></img>
                            </div>
                            {/* <div style={{ marginBottom: '110px', marginLeft: '-152px' }}>
                            <Button>
                                <PhotoCameraIcon ></PhotoCameraIcon>
                            </Button>
                        </div> */}
                            {/* <Typography fontSize={30}>Welcome</Typography> */}
                        </Box>
                        <Tabs value={tabValue} onChange={handleTabChange} orientation="vertical" sx={{ minWidth: '12rem' }}>
                            <Tab label="Edit Profile" {...a11yProps(0)} />
                            <Tab label="CV" {...a11yProps(1)} />
                            <Tab label="Reset Email" {...a11yProps(2)} />
                            <Tab label="Reset Password" {...a11yProps(3)} />
                            <Tab label="My Requests" {...a11yProps(4)} />
                        </Tabs>
                        <Spacer />
                        <Button
                            type="reset"
                            variant="contained"
                            color="warning"
                            onClick={navigateToHome}
                            sx={{ bgcolor: '#64CCC5' }}
                        >
                            Home
                        </Button>
                    </Box>

                    <CustomTabPanel value={tabValue} index={0} >
                        {loading ? <CircularProgress size={24} color="inherit" /> : <></>}
                        <Box component="form" onSubmit={handleSubmit} onReset={showInfo} sx={{ pt: 2, height: '100%', display: 'flex', flexDirection: 'column' }} style={{ display: loading ? 'none' : undefined }}>
                            <Grid container spacing={4} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} container>
                                    <Grid item >
                                        <Typography fontSize={25} fontWeight={600} p={'0.5rem 1rem'}>
                                            University:
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Select
                                            value={selectedUniversity}
                                            onChange={handleUniChange}
                                            disabled={loading}
                                            sx={{
                                                display: loading ? 'none' : undefined
                                            }}
                                        >
                                            {universities.map((uni) => (
                                                <MenuItem key={uni.id} value={uni.id}>
                                                    {uni.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Spacer />
                            <Grid item xs={12} className={clsx(editProfileStyles.lowerButtons)}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ height: '3rem' }}
                                    disabled={!formChanged}
                                >
                                    Update Information
                                </Button>

                            </Grid>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1} >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', height: '100%' }}>
                            <Button sx={{ padding: '3rem', display: 'flex', flexDirection: 'column', borderRadius: '1rem' }}
                                variant="text"
                                onClick={navigateToViewCV}>
                                <img src={ViewCV} alt="view cv" style={{ height: '10rem' }} />
                                <Typography mt={4} fontWeight={550} fontSize={20}>View CV</Typography>
                            </Button>
                            <Button sx={{ padding: '3rem', display: 'flex', flexDirection: 'column', borderRadius: '1rem' }}
                                variant="text"
                                onClick={navigateToEditCV}>
                                <img src={EditCV} alt="edit cv" style={{ height: '10rem', marginInlineStart: '1rem' }} />
                                <Typography mt={4} fontWeight={550} fontSize={20}>Edit CV</Typography>
                            </Button>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={2}>
                        <Box component="form" onSubmit={handleSubmitEmail} sx={{ mt: 1, overflowX: "hidden" }}>
                            <TextField
                                error={!!emailError}
                                helperText={emailError}
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                value={EmailResetformData.email}
                                onChange={handleInputChangeEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={EmailResetformData.password}
                                onChange={handleInputChangeEmail}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Button type="submit">submit</Button>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={3}>
                        <Box component="form" onSubmit={handlePasswordSubmit} sx={{ mt: 1, overflowX: "hidden" }}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="current_password"
                                label="Current Password"
                                type="password"
                                value={passwordResetformData.current_password}
                                onChange={handleInputChangeResetPass}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="new_password"
                                label="New Password"
                                type="password"
                                value={passwordResetformData.new_password}
                                onChange={handleInputChangeResetPass}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="re_new_password"
                                label="Repeat New Password"
                                type="password"
                                value={passwordResetformData.re_new_password}
                                onChange={handleInputChangeResetPass}
                            />
                            <Button type="submit">submit</Button>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">Application List</Typography>
                            <List>
                                {myRequests.map((item) => (
                                    <ListItem key={item.id}>
                                        <ListItemText
                                            primary={`Position ${item.position}`}
                                            secondary={`Status: ${item.status} | Applied on: ${new Date(item.date_applied).toLocaleDateString()}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </CustomTabPanel>
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
            style={{ height: '100%', width: '100%' }}
        >
            {value === index && (
                <Box sx={{ p: 3, height: '100%', width: '100%' }}>
                    {children}
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