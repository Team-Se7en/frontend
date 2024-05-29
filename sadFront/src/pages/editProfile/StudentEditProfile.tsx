import { Box, Container, CssBaseline, Tabs, Tab, Grid, TextField, Button, Typography } from "@mui/material";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../Http/axios";
import Styles from "../../Styles";
import EditProfileStyles from "./EditProfile-styles";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { StudentProfileImage } from "../../assets/images";
import CloseIcon from '@mui/icons-material/Close';


export function StudentEditProfile() {
    const [formData, setFormData] = useState({
        firstName: "student",
        lastName: "num1",
        university: "Queen's University",
        profile_image: "",
        ssn: 13544578211,
    });
    const [EmailResetformData, emailResetFormData] = useState({
        password: "",
        email: "",
    });

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState<string | null>();
  
    const handleUploadImage = async (imageString) => {
        console.log('preview', imageString)
        try {
            const res = await client.patch("https://seven-apply.liara.run/eduportal/student-profile/me/" , {
                profile_image: imageString
            })
            if (res.status === 200) {
                // بعد از موفقیت در ذخیره تصویر، حالت (state) را به‌روز کنید
                setFormData({
                    ...formData,
                    profile_image: imageString
                });
            console.log('Upload Image Successful',res);
            }
        } catch (error) {
            console.error('Upload Image Error:', error);
        }
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      console.log(selectedFile);
      reader.onloadend = () => {
        // console.log(typeof(reader.result));
        setPreview(reader.result as string);
        console.log('preview', preview)
        handleUploadImage(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
    };

    useEffect(() => {
        showInfo()
    }, [])

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const sendingData = {
            university_name: formData.university,
            user: {
                first_name: formData.firstName,
                last_name: formData.lastName,
            },
            ssn: formData.ssn
        }
        console.log(sendingData);
        
        try {
            const response = client.patch('/eduportal/student-profile/me/', sendingData);
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleSubmitEmail = async (event: any) => {
        event.preventDefault();
        console.log(EmailResetformData);
        const sendingData = {
            current_password: EmailResetformData.password,
            new_email: EmailResetformData.email
        }

        try {
            const response = await client.post('/auth/users/set_email/', sendingData);
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
    };

    async function showInfo() {

        try {
            const currentUser = await client.get("/auth/users/me/");
            const response = await client.get("/eduportal/userinfo/");
            setFormData({ ...formData })
            formData.firstName = response.data.first_name
            formData.lastName = response.data.last_name
            formData.profile_image= response.data.profile_image
            formData.ssn = response.data.student.ssn
            // formData.university = response.data.student.university_name
            console.log(response)
            setPreview(response.data.profile_image);
            console.log('User Info Loaded', response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const [value, setValue] = React.useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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

    const navigate = useNavigate();
    const navigateToForgetPass = () => {
        navigate("/forgot-pass");
    }
    const navigateToHome = () => {
        navigate("/studenthomepage");
    }
    const navigateToViewCV = () => {
        navigate("/cv/view");
    }
    const navigateToEditCV = () => {
        navigate("/cv/edit");
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
                        <div>
                            <img className={clsx(editProfileStyles.profileImage)} src={preview || formData.profile_image || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="Profile"></img>
                        </div>
                        <div style={{ marginBottom: '110px', marginLeft: '-152px' }}>
                            <Button
                              component="label"
                            >
                                <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleFileChange}
                                />
                                <PhotoCameraIcon ></PhotoCameraIcon>
                            </Button>
                        </div>
                        {/* <Typography fontSize={30}>Welcome</Typography> */}
                        <div style={{marginLeft:'30px',marginBottom:'110px'}}>
                            <Button onClick={handleRemoveImage}>
                            
                        <CloseIcon></CloseIcon>
                        </Button>
                        </div>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box >
                            <Box >
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Edit Profile" {...a11yProps(0)} />
                                    <Tab label="CV" {...a11yProps(1)} />
                                    {/* <Tab label="Reset Email" {...a11yProps(2)} /> */}
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Box component="form" onSubmit={handleSubmit} onReset={showInfo} sx={{ pt: 1, overflowX: "hidden" }}>
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
                                        <Grid item xs={6}>
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
                                        <Button sx={{ margin: 2 }}
                                            variant="contained"
                                            color="primary"
                                            onClick={navigateToForgetPass}
                                        >
                                            Reset Password
                                        </Button>
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
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <Button sx={{ height: '5rem', width: '50%', marginBottom: '3rem' }}
                                        variant="contained"
                                        color="primary"
                                        onClick={navigateToViewCV}>
                                        see CV
                                    </Button>
                                    <Button sx={{ height: '5rem', width: '50%', marginBottom: '3rem' }}
                                        variant="contained"
                                        color="primary"
                                        onClick={navigateToEditCV}>
                                        Edit CV
                                    </Button>
                                </Box>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <Box component="form" onSubmit={handleSubmitEmail} sx={{ mt: 1, overflowX: "hidden" }}>
                                    <TextField
                                        error={!!emailError}
                                        helperText={emailError}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoFocus
                                        value={EmailResetformData.email}
                                        onChange={handleInputChangeEmail}
                                    />
                                </Box>
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