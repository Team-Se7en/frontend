import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

import { toast, ToastContainer, Flip } from "react-toastify";

import StudentSignUpStyles from "./StudentAccept-styles";

import Navbar from "../../components/navbar/navbar/navbar";
import Footer from "../../components/footer/footer/footer";

export function StudentAccept() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    proposal: "",
    Criticism: "",
    AdvantagesandDisadvantages: "",
  });
  // const [signupError, setsignupError] = useState("");
  // const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const lowercasedValue = name === "email" ? value.toLowerCase() : value;

    setFormData({
      ...formData,
      [name]: lowercasedValue,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      is_student: true,
      proposal: formData.proposal,
      Criticism: formData.Criticism,
      AdvantagesandDisadvantages: formData.AdvantagesandDisadvantages,
    };

    console.log("Request Data:", data);
        const redirect = () => {
          window.location.href = "/studenthomepage";
        };

        setTimeout(redirect, 3000);

        toast.success("send Successful!", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };

  const StudentSignUpClasses = StudentSignUpStyles();

  return (
    <>
      <Navbar />
      <Box className={StudentSignUpClasses.Studentaccept}>
        <ToastContainer transition={Flip} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={StudentSignUpClasses.wrapper}>
            <div>
            <Typography style={{display:"flex",justifyContent:'center'}}  component="h1" variant="h5">
              Student proposal
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    autoComplete="proposal"
                    name="proposal"
                    required
                    fullWidth
                    id="proposal"
                    label="proposal"
                    value={formData.proposal}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    autoComplete="Criticism"
                    name="Criticism"
                    required
                    fullWidth
                    id="Criticism"
                    label="Criticism"
                    value={formData.Criticism}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    autoComplete="AdvantagesandDisadvantages"
                    name="AdvantagesandDisadvantages"
                    required
                    fullWidth
                    id="AdvantagesandDisadvantages"
                    label="Advantages and Disadvantages"
                    value={formData.AdvantagesandDisadvantages}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Button
                className={StudentSignUpClasses.button1}
                type="submit"
                
              >
                send
              </Button>

              <Grid container justifyContent="center" paddingTop="5px">
                <Grid item></Grid>
              </Grid>
            </Box>
            </div>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
