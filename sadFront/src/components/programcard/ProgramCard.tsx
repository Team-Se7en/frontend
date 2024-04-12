import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent className="card-main">
      <Box className="left-info">
        <Box className="top-info">
          <Avatar
            className="avatar"
            alt="Sauleh Etemadi"
            src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
          />
          <Box className="program-info">
            <Typography variant="h5" component="div">
              NLP/ML PhD Positions
            </Typography>
            <Box className="prof-and-uni">
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Sauleh Etemadi
              </Typography>
              <Typography variant="body2">Queen's University Canada</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="tags"></Box>
      </Box>
      <Box className="deadline-and-button">
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function ProgramCard() {
  return (
    <Box sx={{ minWidth: 800 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
