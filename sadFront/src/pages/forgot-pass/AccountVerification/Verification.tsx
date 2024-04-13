import { Avatar, Box, Button, Container, CssBaseline,  Grid , Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import verificationStyles from "./AccountVerification.style";
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';




export function Verification() {
    const [code, setCode] = useState(['', '', '', '']);
    const handleInputChange1 = (index:number, value:string) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
          const newCode = [...code];
          newCode[index] = value;
          setCode(newCode);
        }
      };

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/Newpassword");
    };
    

    const globalClasses = Styles();
    const verificationClasses = verificationStyles();

    return (
        <Box className={clsx(globalClasses.authBackground)}>
        <Container component="main" maxWidth="xs" className={clsx(verificationClasses.wrapper)}>
          <CssBaseline />
          <Box
            className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
          >
            <Avatar className="avatar"></Avatar>
            <Typography component="h1" variant="h5">
              Enter your code
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                {code.map((digit, index) => (
                  <input
                    required
                    key={index}
                    type="text"
                    style={{ width: '50px', height: '50px', fontSize: '1.5em', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
                    value={digit}
                    onChange={(e) => handleInputChange1(index, e.target.value)}
                  />
                ))}
              </Stack>
              <Button
                endIcon={<SendIcon />}
                type="submit"
                fullWidth
                variant="contained"
                className="forgot-btn"
                sx={{ mt: 2 }}
              >
                send
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
