import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
  Button,
  Rating,
  Pagination,
} from "@mui/material";
import { useState } from "react";

import { toast, ToastContainer, Flip } from "react-toastify";

import StudentSignUpStyles from "./StudentAccept-styles";

import Navbar from "../../components/navbar/navbar/navbar";
import Footer from "../../components/footer/footer/footer";
import React from "react";

const labels : {[index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export function StudentAccept() {
  const [formData, setFormData] = useState({
    ratings: [0, 0, 0, 0, 0, 0], // initialize all ratings with 0
    comment: "",
     getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    },
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const lowercasedValue = name === "email" ? value.toLowerCase() : value;

    setFormData({
      ...formData,
      [name]: lowercasedValue,
    });
  };

  const handleRatingChange = (newValue, index) => {
    const updatedRatings = [...formData.ratings];
    updatedRatings[index] = newValue;
    setFormData({
      ...formData,
      ratings: updatedRatings,
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ratings: formData.ratings,
      comment: formData.comment,
    };

    console.log("Request Data:", data);
    const redirect = () => {
      window.location.href = "/studenthomepage";
    };

    setTimeout(redirect, 3000);

    toast.success("Send Successful!", {
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
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Navbar showAuth={true} />
      <Box className={StudentSignUpClasses.Studentaccept}>
        <ToastContainer transition={Flip} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box  sx={{ display: 'flex', flexDirection:'column'}} className={StudentSignUpClasses.wrapper}>
            <Typography
              style={{ display: "flex", justifyContent: "center" }}
              component="h1"
              variant="h5"
            >
              Share your experience
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ my: 3}}>
              <Grid container spacing={2}>
                {page === 1 && (
                  <Grid pl={4} pt={4}>
                {[0, 1, 2, 3, 4].map((index) => (
                  <Grid item xs={12} key={index}>
                    {index === 0 && (
                      <Typography style={{marginTop:'1px'}} variant="h6" gutterBottom>
                        How complete and useful were the explanations and details written about this position?
                      </Typography>
                    )}
                    {index === 1 && (
                      <Typography style={{marginTop:'1px'}} variant="h6" gutterBottom>
                        How satisfied were you with the communication process with the professor?
                      </Typography>
                    )}
                    {index === 2 && (
                      <Typography style={{marginTop:'1px'}} variant="h6" gutterBottom>
                        How much were you satisfied with the professor's response speed?
                      </Typography>
                    )}
                    {index === 3 && (
                      <Typography style={{marginTop:'1px'}} variant="h6" gutterBottom>
                        How much do you offer for this position?
                      </Typography>
                    )}
                    {index === 4 && (
                      <Typography style={{marginTop:'1px'}} variant="h6" gutterBottom>
                        How easy did our site make your work?
                      </Typography>
                    )}
                  <div style={{display:'flex'}}>
                    <Rating
                      name={`rating-${index}`}
                      precision={0.5}
                      value={formData.ratings[index]}
                      onChange={(event, newValue) =>
                        
                        handleRatingChange(newValue, index)
                        
                      }
                      sx={{ fontSize: 35,marginTop:'3px' }}
                      />
                      {formData.ratings[index] !== null && <Box ml={4} mt={1} >{labels[formData.ratings[index]]}</Box>}
                      </div>
                      
                
                
                  </Grid>
                ))}
                </Grid>
                )}
                {page === 2 && (

                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    autoComplete="comment"
                    name="comment"
                    fullWidth
                    id="comment"
                    label="Share any criticism or suggestion you have about your application process with us"
                    value={formData.comment}
                    onChange={handleInputChange}
                  />
                </Grid>
)}
              </Grid> 
              {page === 3 && (
                  <div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>        
                <Typography variant="h4" color="initial">Thank you for giving us your time :)</Typography>
                </div>          
              <Button className={StudentSignUpClasses.button1} type="submit">
                Send
              </Button>
              </div>  
              )}
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Pagination style={{marginTop:'20px'}}  count={3} color="primary" page={page} onChange={handleChange} />
                </div>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
