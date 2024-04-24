import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Icon from "@mui/material/Icon";
import { StyledProgramCard } from "./ProgramCard-styles";
import { StyledCardContent } from "./ProgramCard-styles";
import { StyledCardActions } from "./ProgramCard-styles";
import { DeaedLineAndButton } from "./ProgramCard-styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProgramModal from "./../modals/program-modal/ProgramModal";
import { ProfAndUni } from "./ProgramCard-styles";
import { Deadline } from "./ProgramCard-styles";
import { ProgramInfo } from "./ProgramCard-styles";
import { StudentCardViewShortInfo } from "@models";
import ProgramModal from "./../modals/program-modal/ProgramModal";

const handleClick = () => {
  console.info("You clicked a topic.");
};

export default function ProgramCard(props: StudentCardViewShortInfo) {
  return (
    <Box minWidth={"28rem"} width={"90%"} margin={"0.5rem"}>
      <StyledProgramCard variant="outlined">
        <StyledCardContent>
          <Box
            className="left-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            width={{ xs: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
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
                    {props.professor.first_name +
                      " " +
                      props.professor.last_name}
                  </Typography>
                  <Box
                    className="icon-uni"
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"0.2rem"}
                  >
                    <Icon sx={{ fontSize: "1.2rem" }}>school</Icon>
                    <Typography variant="body2" fontSize={"0.8rem"}>
                      {props.professor.university}
                    </Typography>
                  </Box>
                </ProfAndUni>
              </ProgramInfo>
            </Box>
            <Box
              className="topics"
              display={"flex"}
              flexDirection={"row"}
              gap={"0.5rem"}
              alignItems={"center"}
              //overflow={"auto"}
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
                {props.deadline.toString()}
              </Typography>
            </Deadline>
            <StyledCardActions>
              <ProgramModal></ProgramModal>
              <ProgramModal></ProgramModal>
            </StyledCardActions>
          </DeaedLineAndButton>
        </StyledCardContent>
      </StyledProgramCard>
    </Box>
  );
}
