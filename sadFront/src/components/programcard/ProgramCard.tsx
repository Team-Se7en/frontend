import { Box, Avatar, Typography, Icon, Stack, Chip } from "@mui/material";
import { ConvDate } from "../../lib/DateConvertor";
import { StudentCardViewFullInfo } from "../../models/CardInfo";
import ProgramModal from "../modals/program-modal/ProgramModal";
import {
  StyledProgramCard,
  StyledCardContent,
  ProgramInfo,
  ProfAndUni,
  BottemInfo,
  DeaedLineAndButton,
  Deadline,
  StyledCardActions,
} from "./ProgramCard-styles";
import { Link } from "react-router-dom";

const handleClick = () => {
  console.info("You clicked a topic.");
};

export default function ProgramCard(props: StudentCardViewFullInfo) {
  return (
    <Box minWidth={"24rem"} width={"90%"} margin={"0.5rem"}>
      <StyledProgramCard variant="outlined">
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
                src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1720051200&v=beta&t=4tA4xwft_oIReUo_P2E6Zcwb7oi598pywErYUhjwZkA"
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
                  {props.title}
                </Typography>
                <ProfAndUni>
                  <Typography color="text.secondary" fontSize={"1rem"}>
                    {props.professor.user.first_name +
                      " " +
                      props.professor.user.last_name}
                  </Typography>
                  <Link
                    to={{ pathname: "/universitypage" }}
                    state={props.university_id}
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
                        {props.university_name}
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
                    {ConvDate(props.position_start_date, "year and month")}
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
                    {props.fee} Rials
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
                  {props.tags.map((tag, index) => (
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
                  {ConvDate(props.position_end_date, "year and month")}
                </Typography>
              </Deadline>
              <StyledCardActions>
                <ProgramModal
                  professor={props.professor}
                  description={props.description}
                  capacity={props.capacity}
                  id={props.id}
                  title={props.title}
                  status={props.status}
                  position_start_date={props.position_start_date}
                  position_end_date={props.position_end_date}
                  fee={props.fee}
                  start_date={props.start_date}
                  tags={props.tags}
                  updated_at={props.updated_at}
                  end_date={props.end_date}
                  created_at={props.created_at}
                  university_name={props.university_name}
                  university_id={props.university_id}
                ></ProgramModal>
              </StyledCardActions>
            </DeaedLineAndButton>
          </BottemInfo>
        </StyledCardContent>
      </StyledProgramCard>
    </Box>
  );
}
