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
    <CardContent
      className="card-main"
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Box
        className="left-info"
        sx={{ display: "flex", flexDirection: "column", width: 0.8 }}
      >
        <Box
          className="top-info"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Avatar
            className="avatar"
            alt="Sauleh Etemadi"
            src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
            sx={{ height: "8rem", width: "8rem" }}
          />
          <Box
            className="program-info"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h5" component="div">
              NLP/ML PhD Positions
            </Typography>
            <Box
              className="prof-and-uni"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Sauleh Etemadi
              </Typography>
              <Typography variant="body2">Queen's University Canada</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="tags">
          <Typography variant="body2">Tags:</Typography>
        </Box>
      </Box>
      <Box className="deadline-and-button" sx={{ width: 0.2 }}>
        <Box className="deadline">
          <Typography variant="body2">Application Deadline</Typography>
          <Typography variant="body2">June 2024</Typography>
        </Box>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function ProgramCard() {
  return (
    <Box sx={{ minWidth: 600, width: 0.9 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
