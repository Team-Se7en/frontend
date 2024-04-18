// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   TextField,
//   Typography,
// } from "@mui/material";

// import {StudentSignUpImage} from "@assets";
// import { useState } from "react";

// export function StudentSignup() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     studentId: "",
//   });

//   const handleInputChange = (event: any) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <Box
//     sx={{
//       backgroundImage: `url(${StudentSignUpImage})`,
//       backgroundPosition: ' center center',
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       height: '100vh',
//       width: '100vm',
      
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >

//     <Container component="main" maxWidth="xs">
//       <CssBaseline />


    
//       <Box
//         sx={{
//           background: '#bde0fe',
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: '0.3rem',
//           padding: '0rem 0.5rem 2rem 0.5rem',
//           // marginTop: '3rem',
//           // marginBottom: '3rem',
//           opacity: '0.85',
//           height:'80vh',

//         }}
//       >
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <Typography variant="h4" align="center" gutterBottom>
//             Student Sign Up
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="First Name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="email"
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="password"
//                 label="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Student ID"
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Sign Up
//               </Button>

//               <Grid container>
//                 <Grid item xs>
//                   <Link href="/signup/professor" variant="body2">
//                     signup as a professor
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/login" variant="body2">
//                     Already have an account? Login
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>

//     </Container>
//     </Box>

//   );
// }





// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { ProfessorSignUpImage } from "@assets";
// import { useState } from "react";

// export function ProfessorSignup() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event: any) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   const ProfessorSignUpClasses = ProfessorSignUpStyles();

//   return (
//     <Box  className={ProfessorSignUpClasses.authBackground}>

    
//     <Container component="main" maxWidth="xs">

//       <CssBaseline />
    
//       <Box className={ProfessorSignUpClasses.professorform1}>

//         <Box className={ProfessorSignUpClasses.professorform2}
//         component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <Typography variant="h4" align="center" gutterBottom>
//             Professor Sign Up
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="First Name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="email"
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="password"
//                 label="Create Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="password"
//                 label="Confirm Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Sign Up
//               </Button>

//               <Grid container>
//                 <Grid item xs>
//                   <Link href="/signup/student" variant="body2">
//                     signup as a student
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/login" variant="body2">
//                     Already have an account? Login
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>

//     </Container>

//     </Box>

//   );
// }



//2222222222222222
// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// // Import any assets or stylesheets if needed

// export function ProfessorSignup() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "", // Add state for confirmation password
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Perform form submission or validation here
//   };

//   return (
//     <Box>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
//           <Typography component="h1" variant="h5">
//             Professor Sign Up
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="fname"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="lname"
//                   name="lastName"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="email"
//                   name="email"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="new-password"
//                   name="password"
//                   required
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="new-password"
//                   name="confirmPassword"
//                   required
//                   fullWidth
//                   id="confirmPassword"
//                   label="Confirm Password"
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }


//33333333333333333

// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// import { ProfessorSignUpImage } from "@assets";
// import ProfessorSignUpStyles from "./ProfessorSignUp-styles";

// export function ProfessorSignup() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };
  
//   const globalClasses = Styles();
//   const ProfessorSignUpClasses = ProfessorSignUpStyles();


//   return (
//     <Box
//     className={ProfessorSignUpClasses.authBackground}>

//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Professor Sign Up
//         </Typography>
//         <Box className="professorsignupform"
//           component="form"
//           onSubmit={handleSubmit}
//           noValidate
//           sx={{ mt: 3 }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//             </Grid>
            
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="lname"
//                 name="lastName"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </Grid>
            
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="email"
//                 name="email"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </Grid>
            
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="new-password"
//                 name="password"
//                 required
//                 fullWidth
//                 id="password"
//                 label="Password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//             </Grid>
            
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="new-password"
//                 name="confirmPassword"
//                 required
//                 fullWidth
//                 id="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//           </Grid>
          
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//             className="professor-signup-button"
//           >
//             Sign Up
//           </Button>
          
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>

//   </Box>

//   );
// }



//444444444444444

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
import React, { useState } from "react";

import {StudentSignUpImage} from "@assets";
import StudentSignUpStyles from "./StudentSignup-styles";

export function StudentSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const StudentSignUpClasses = StudentSignUpStyles();

  return (
    <Box className={StudentSignUpClasses.authBackground}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={StudentSignUpClasses.wrapper}>

          <Typography component="h1" variant="h5">
            Student Sign Up
          </Typography>
          <Box
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="confirmPassword"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Button className={StudentSignUpClasses.button1}
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>

            <Grid container justifyContent="center" paddingTop='5px'>
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
