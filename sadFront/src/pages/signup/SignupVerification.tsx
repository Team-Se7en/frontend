// import {
//     Box,
//     Button,
//     Container,
//     CssBaseline,
//     Grid,
//     TextField,
//     Typography,
// } from "@mui/material";

// import StudentSignUpStyles from "./student-signup/StudentSignup-styles";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export function SignupVerfication() {
//     const [formData, setFormData] = useState({
//         uid: "",
//         token: "",
//     });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         navigate("/login");

//         console.log(formData);

//         try {
//             const response = await axios.post('https://seven-apply.liara.run/auth/users/activation/', formData);

//             if (response.status !== 204) {
//                 throw new Error('Failed to verify');
//             }
//             console.log(response);

//         } catch (error) {
//             console.error('Error:', error);

//         }
//     };

//     const StudentSignUpClasses = StudentSignUpStyles();

//     return (
//         <Box className={StudentSignUpClasses.authBackground}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box className={StudentSignUpClasses.wrapper}>

//                     <Typography component="h1" variant="h5">
//                         Email Verification
//                     </Typography>
//                     <Box
//                         component="form"
//                         onSubmit={handleSubmit}
//                         sx={{ mt: 3 }}
//                     >
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} >
//                                 <TextField
//                                     name="uid"
//                                     required
//                                     fullWidth
//                                     id="uid"
//                                     label="UID"
//                                     autoFocus
//                                     value={formData.uid}
//                                     onChange={handleInputChange}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} >
//                                 <TextField
//                                     name="token"
//                                     required
//                                     fullWidth
//                                     id="token"
//                                     label="Token"
//                                     value={formData.token}
//                                     onChange={handleInputChange}
//                                 />
//                             </Grid>
//                         </Grid>

//                         <Button className={StudentSignUpClasses.button1}
//                             type="submit"
//                             fullWidth
//                         >
//                             Verify
//                         </Button>
//                     </Box>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }



//2222222222222

import { Bounce, ToastContainer, toast } from 'react-toastify';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import{ useEffect, useState } from 'react';

import Cookies from "js-cookie";
import StudentSignUpStyles from "./student-signup/StudentSignup-styles";
import axios from "axios";
import client from "../../Http/axios";
import { useParams } from "react-router-dom";

export function SignupVerfication() {

    const { uid, token } = useParams(); 

    useEffect(() => {
        console.log('uid:', uid);
        console.log('token:', token);
    }, [uid, token]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // window.location.replace("/login");

        client.post("/auth/users/activation/",{
            uid,
            token,
        })
        .then((response:any) => {
            console.log(response)

            window.location.href = "/login";

            }).catch((error:any) => {
                toast.error(error.response.data, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });

            })
        
    };

    const StudentSignUpClasses = StudentSignUpStyles();

    return (
        <Box className={StudentSignUpClasses.authBackground}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={StudentSignUpClasses.wrapper}>

                    <Typography component="h1" variant="h5">
                        Email Verification
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >

                        <Button className={StudentSignUpClasses.button1}
                            type="submit"
                            fullWidth
                        >
                            Verify
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
