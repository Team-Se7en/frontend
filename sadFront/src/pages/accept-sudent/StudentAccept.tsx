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
    HoverRating() {
      const [value, setValue] = React.useState<number | null>(2);
      const [hover, setHover] = React.useState(-1);},
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
              Student proposal
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ my: 3}}>
              <Grid container spacing={2}>
                {page === 1 && (
                  <Grid pl={4} pt={4}>
                {[0, 1, 2, 3, 4].map((index) => (
                  <Grid item xs={12} key={index}>
                    {index === 0 && (
                      <Typography variant="h6" gutterBottom>
                        First question
                      </Typography>
                    )}
                    {index === 1 && (
                      <Typography variant="h6" gutterBottom>
                        Second question
                      </Typography>
                    )}
                    {index === 2 && (
                      <Typography variant="h6" gutterBottom>
                        Third question
                      </Typography>
                    )}
                    {index === 3 && (
                      <Typography variant="h6" gutterBottom>
                        Fourth question
                      </Typography>
                    )}
                    {index === 4 && (
                      <Typography variant="h6" gutterBottom>
                        Fifth question
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
                      sx={{ fontSize: 35 }}
                      />
                      {formData.ratings[index] !== null && <Box ml={4} >{labels[formData.ratings[index]]}</Box>}
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
                    label="Comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                  />
                </Grid>
)}
              </Grid>
                
              {page === 3 && (
                  <div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>        
                <Typography variant="h4" color="initial">tanks</Typography>
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
