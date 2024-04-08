import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

export function ProfessorSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    researchInterests: "",
    department: "",
    university: "",
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

  return (
    <Container component="main" maxWidth="xs">

      <CssBaseline />

      <Box
        sx={{
          background: '#bde0fe',
          backgroundSize: '500px 400px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '1rem',
          padding: '1rem 0.5rem 2rem 0.5rem',
          marginTop: '3rem',
          marginBottom: '3rem',
          opacity: '0.8'

        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Professor Sign Up
          </Typography>
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
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign Up
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="/signup/student" variant="body2">
                    signup as a student
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}












// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   Paper,
//   TextField,
//   Typography,
// } from '@mui/material';
// import {
//   FormTextField,
//   StyledContainer,
//   StyledPaper,
//   buttonThemeColor
// } from './signProfessorStyles';
// import React, { useState } from 'react';

// export function ProfessorSignup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     researchInterests: '',
//     department: '',
//     university: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     console.log(formData);
//   };

//   return (
//     <StyledContainer component="main" maxWidth="sm" >
//       <CssBaseline />
//       <StyledPaper elevation={6}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Professor Sign Up
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <FormTextField
//                 autoComplete="fname"
//                 name="firstName"
//                 required
//                 fullWidth
//                 label="First Name"
//                 autoFocus
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormTextField
//                 autoComplete="lname"
//                 name="lastName"
//                 required
//                 fullWidth
//                 label="Last Name"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormTextField
//                 required
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormTextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 autoComplete="current-password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormTextField
//                 required
//                 fullWidth
//                 name="researchInterests"
//                 label="Research Interests"
//                 value={formData.researchInterests}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormTextField
//                 required
//                 fullWidth
//                 name="department"
//                 label="Department"
//                 value={formData.department}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormTextField
//                 required
//                 fullWidth
//                 name="university"
//                 label="University"
//                 value={formData.university}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//             </Grid>
//             <Grid container justifyContent="space-around">
//               <Grid item xs={5.5} >
//                 <Link href="/signup/student" variant="body2">
//                   Signup as a student
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Login
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </StyledPaper>

//       </StyledContainer>
//   );
// }
