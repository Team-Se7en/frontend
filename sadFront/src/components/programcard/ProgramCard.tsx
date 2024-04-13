import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Icon from "@mui/material/Icon";

const card = (
  <React.Fragment>
    <CardContent
      className="card-main"
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1.5rem",
      }}
    >
      <Box
        className="left-info"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 0.8,
          gap: "1rem",
        }}
      >
        <Box
          className="top-info"
          sx={{ display: "flex", flexDirection: "row" }}
          gap={"1rem"}
        >
          <Avatar
            className="avatar"
            alt="Sauleh Etemadi"
            src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1718236800&v=beta&t=_ROkXK-gfaD5ANq-FbDDW13wiIOwX6u9-2fAw_qYKeA"
            sx={{
              height: "6rem",
              width: "6rem",
              margin: "0.5rem",
              marginBottom: 0,
            }}
          />
          <Box
            className="program-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              NLP/ML PhD Positions
            </Typography>
            <Box
              className="prof-and-uni"
              sx={{ display: "flex", flexDirection: "row", gap: "3rem" }}
            >
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                fontSize={"1.1rem"}
              >
                Sauleh Etemadi
              </Typography>
              <Box
                className="icon-uni"
                display={"flex"}
                flexDirection={"row"}
                gap={"0.2rem"}
              >
                <Icon>school</Icon>
                <Typography variant="body2">
                  Queen's University Canada
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="topics">
          <Typography variant="body2" fontSize={"0.9rem"}>
            Topics:
          </Typography>
        </Box>
      </Box>
      <Box
        className="deadline-and-button"
        sx={{ width: 0.2 }}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"1rem"}
        gap={"3rem"}
        justifyContent={"flex-end"}
        textAlign={"center"}
        alignItems={"center"}
      >
        <Box className="deadline">
          <Typography variant="body2" fontSize={"0.7rem"}>
            Application Deadline
          </Typography>
          <Typography variant="body2" fontWeight={"bold"} fontSize={"1rem"}>
            June 2024
          </Typography>
        </Box>
        <CardActions sx={{ padding: "0" }}>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function ProgramCard() {
  return (
    <Box sx={{ width: "45rem" }}>
      <Card variant="outlined" sx={{ borderRadius: "1rem", padding: "0" }}>
        {card}
      </Card>
    </Box>
  );
}
