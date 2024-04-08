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
    <CardContent>
      <Avatar
        className="avatar"
        alt="Xiaodan Zhu"
        src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
      />
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div">
        NLP/ML PhD Positions
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Xiaodan Zhu
      </Typography>
      <Typography variant="body2">Queen's University Canada</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function ProgramCard() {
  return (
    <Box sx={{ minWidth: 800 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
