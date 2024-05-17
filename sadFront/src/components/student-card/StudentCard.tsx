import { Box, Typography } from "@mui/material";
import { siteUrl } from "../../Http/axios";
import { Student } from "../../models/Student";
import { StyledStudentCard, StyledStudentImage, StyledWrapper } from "./StudentCard-styles";
import { TopStudentModel } from "../../models/LandingInfo";
import { getFullName } from "../../lib/global-util";
import Styles from "../../Styles";
import clsx from "clsx";
import theme from "../../Theme";


export interface StudentCardProps {
    student: TopStudentModel;
    rgba: string;
}

export function StudentCard(props: StudentCardProps) {

    const globalClasses = Styles();

    return (
        <StyledWrapper>
            <StyledStudentCard sx={{ backgroundColor: props.rgba }}>
                <StyledStudentImage src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1720051200&v=beta&t=4tA4xwft_oIReUo_P2E6Zcwb7oi598pywErYUhjwZkA" />
                <Box marginTop={'2.5rem'} gap={3} className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}>
                    <Typography variant="h3" color={'white'} >
                        {getFullName(props.student.first_name, props.student.last_name)}
                    </Typography>
                    <Typography variant="h4" color={'white'}>
                        Rank: {props.student.rank}
                    </Typography>
                    <Typography variant="h4" color={'white'}>
                        Collaborations: {props.student.accepted_request_count}
                    </Typography>
                </Box>
            </StyledStudentCard>
        </StyledWrapper>
    )
}