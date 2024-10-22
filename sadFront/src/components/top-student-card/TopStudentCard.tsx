import { Box, Typography } from "@mui/material";
import {
  StyledStudentCard,
  StyledStudentImage,
  StyledWrapper,
} from "./TopStudentCard-styles";
import { TopStudentModel } from "../../models/LandingInfo";
import { getFullName } from "../../lib/global-util";
import Styles from "../../Styles";
import clsx from "clsx";

export interface StudentCardProps {
  student: TopStudentModel;
  rgba: string;
}

export function StudentCard(props: StudentCardProps) {
  const globalClasses = Styles();

  return (
    <StyledWrapper>
      <StyledStudentCard sx={{ backgroundColor: props.rgba }}>
        <StyledStudentImage src="https://pngimg.com/uploads/student/student_PNG62560.png" />
        <Box
          marginTop={"2.5rem"}
          gap={3}
          className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}
        >
          <Typography variant="h3" color={"white"}>
            {getFullName(props.student.first_name, props.student.last_name)}
          </Typography>
          <Typography variant="h4" color={"white"}>
            Rank: {props.student.rank}
          </Typography>
          <Typography variant="h4" color={"white"}>
            Collaborations: {props.student.accepted_request_count}
          </Typography>
        </Box>
      </StyledStudentCard>
    </StyledWrapper>
  );
}
