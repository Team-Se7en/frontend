import { Avatar, Box, Button, Chip, Dialog, Icon, Stack, Typography } from "@mui/material";
import {
  BottemInfo,
  Deadline,
  DeaedLineAndButton,
  ProfAndUni,
  ProgramInfo,
  StyledCardActions,
  StyledCardContent,
  StyledStudentPositionCard,
} from "./StudentPositionCard-styles";

import { ConvDate } from "../../lib/DateConvertor";
import { Link } from "react-router-dom";
import { StudentCardViewShortInfo } from "../../models/CardInfo";
import { useState } from "react";
import { StudentPositionCardDialog } from "../dialogs/student-position-card-dialog/StudentPositionCardDialog";
import clsx from "clsx";
import Styles from "../../Styles";

const handleClick = () => {
  console.info("You clicked a topic.");
};

export interface StudentPositionCardProps {
  model: StudentCardViewShortInfo;
}

export default function StudentPositionCard(props: StudentPositionCardProps) {

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  }

  const globalStyles = Styles();

  return (
    <>
      <Box minWidth={"24rem"} width={"90%"} margin={"0.5rem"}>
        <StyledStudentPositionCard variant="outlined">
          <StyledCardContent>
            <Box
              className="top-info"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}
              width={{ xs: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
            >
              <Box
                className="prof-info"
                sx={{ display: "flex", flexDirection: "row" }}
                gap={"1rem"}
              >
                <Avatar
                  className="avatar"
                  alt="Sauleh Etemadi"
                  src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM"
                  sx={{
                    minHeight: "5rem",
                    minWidth: "5rem",
                    margin: "0.5rem",
                    marginBottom: 0,
                  }}
                />
                <ProgramInfo>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    fontSize={"1.4rem"}
                  >
                    {props.model.title}
                  </Typography>
                  <ProfAndUni>
                    <Typography color="text.secondary" fontSize={"1rem"}>
                      {props.model.professor.user.first_name +
                        " " +
                        props.model.professor.user.last_name}
                    </Typography>
                    <Link
                      to={{ pathname: "/universitypage" }}
                      state={props.model.university_id}
                    >
                      <Box
                        className="icon-uni"
                        display={"flex"}
                        flexDirection={"row"}
                        gap={"0.2rem"}
                      >
                        <Icon sx={{ fontSize: "1.2rem" }}>school</Icon>
                        <Typography
                          variant="body2"
                          fontSize={"0.8rem"}
                          color={"black"}
                        >
                          {props.model.university_name}
                        </Typography>
                      </Box>
                    </Link>
                  </ProfAndUni>
                </ProgramInfo>
              </Box>
            </Box>
            <BottemInfo>
              <Box
                className="left-details"
                display={"flex"}
                flexDirection={"column"}
                gap={"0.8rem"}
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "80%",
                  xl: "80%",
                }}
              >
                <Box
                  className="info"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  marginBottom={"0.5rem"}
                  marginTop={"0.4rem"}
                >
                  <Box
                    className="start-date"
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Typography variant="body2" fontSize={"0.7rem"}>
                      Starts at
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    >
                      {ConvDate(props.model.position_start_date, "year and month")}
                    </Typography>
                  </Box>
                  <Box
                    className="duration"
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Typography variant="body2" fontSize={"0.7rem"}>
                      Duration:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    >
                      2 years
                    </Typography>
                  </Box>
                  <Box className="fee" display={"flex"} flexDirection={"column"}>
                    <Typography variant="body2" fontSize={"0.7rem"}>
                      Fee:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    >
                      {props.model.fee} Rials
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="topics"
                  flexDirection={"row"}
                  gap={"0.5rem"}
                  alignItems={"center"}
                  //overflow={"auto"}
                  display={{
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  }}
                >
                  <Typography variant="body2" fontSize={"0.9rem"}>
                    Topics:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {props.model.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        onClick={handleClick}
                      //variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
              <DeaedLineAndButton>
                <Deadline>
                  <Typography variant="body2" fontSize={"0.7rem"}>
                    Application Deadline:
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={"bold"}
                    fontSize={"0.8rem"}
                  >
                    {ConvDate(props.model.position_end_date, "year and month")}
                  </Typography>
                </Deadline>
                <StyledCardActions>
                  <Button onClick={handleDialogOpen} sx={{ color: 'darkblue' }} className={clsx(globalStyles.justifySelfBottom)} variant="text" disableRipple>Learn More</Button>
                </StyledCardActions>
              </DeaedLineAndButton>
            </BottemInfo>
          </StyledCardContent>
        </StyledStudentPositionCard>
      </Box>
      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth='sm'>
        <StudentPositionCardDialog model_id={props.model.id} />
      </Dialog>
    </>
  );
}
