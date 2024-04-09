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

import {StudentSignUpImage} from "@assets";
import { useState } from "react";

export function StudentSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    studentId: "",
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
    <Box
    sx={{
      backgroundImage: `url(${StudentSignUpImage})`,
      backgroundPosition: ' center center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: '100vh',
      width: '100vm',
      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >

    <Container component="main" maxWidth="xs">
      <CssBaseline />


    
      <Box
        sx={{
          background: '#bde0fe',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '0.3rem',
          padding: '0rem 0.5rem 2rem 0.5rem',
          // marginTop: '3rem',
          // marginBottom: '3rem',
          opacity: '0.85',
          height:'80vh',

        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Student Sign Up
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
                label="Student ID"
                name="studentId"
                value={formData.studentId}
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
                  <Link href="/signup/professor" variant="body2">
                    signup as a professor
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
    </Box>

  );
}
