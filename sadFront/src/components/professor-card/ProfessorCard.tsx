import { Box, Typography } from "@mui/material";
import { StyledProfessorCard, StyledProfessorImage, StyledWrapper } from "./ProfessorCard-styles";
import clsx from "clsx";
import { getFullName } from "../../lib/global-util";
import { TopProfessorModel } from "../../models/LandingInfo";
import Styles from "../../Styles";


export interface ProfessorCardProps {
    professor: TopProfessorModel,
    rgba: string,
}

export function ProfessorCard(props: ProfessorCardProps) {

    const globalClasses = Styles();
    
    return (
        <StyledWrapper>
            <StyledProfessorCard sx={{ backgroundColor: props.rgba }}>
                <StyledProfessorImage src="https://media.licdn.com/dms/image/C5603AQFRQMoLVOmP7w/profile-displayphoto-shrink_100_100/0/1624999976467?e=1721260800&v=beta&t=rWvEmn81zadwHSowf4ryqT6S5rOyr9qvEkW9rHVgNXM" />
                <Box marginTop={'2.5rem'} gap={3} className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)}>
                    <Typography variant="h3" color={'white'} >
                        {getFullName(props.professor.first_name, props.professor.last_name)}
                    </Typography>
                    <Typography variant="h4" color={'white'}>
                        Rank: {props.professor.rank}
                    </Typography>
                    <Typography variant="h4" color={'white'}>
                        Collaborations: {props.professor.accepted_request_count}
                    </Typography>
                </Box>
            </StyledProfessorCard>
        </StyledWrapper>
    )
}