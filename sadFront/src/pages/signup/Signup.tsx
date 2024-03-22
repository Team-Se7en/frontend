import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

export function Signup() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Signup as a ...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/signup/student"
          sx={{
            height: 180,
            width: 180,
            margin: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PersonIcon fontSize="large"></PersonIcon>
          <Typography>Student</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/signup/professor"
          sx={{
            height: 180,
            width: 180,
            margin: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PersonIcon fontSize="large"></PersonIcon>
          <Typography>Professor</Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;
