import { Box, Typography } from "@mui/material";
import { University } from "../../models/University";
import { StyledUniversityCard, StyledUniversityIcon, StyledWrapper } from "./UniversityCard-styles";
import { LandingUniversityModel as ShortUniversityModel } from "../../models/LandingInfo";
import { siteUrl } from "../../Http/axios";
import Styles from "../../Styles";
import clsx from "clsx";
import theme from "../../Theme";


export interface UniversityCardProps {
    university: ShortUniversityModel;
    rgba: string;
}

export function UniversityCard(props: UniversityCardProps) {

    const globalClasses = Styles();

    return (
        <StyledWrapper>
            <StyledUniversityCard sx={{ backgroundColor: props.rgba}}>
                <StyledUniversityIcon src={siteUrl + props.university.icon} />
                <Box marginTop={'2rem'} gap={4.5} className={clsx(globalClasses.flexColumn)}>
                    <Typography variant="h3" textAlign={'center'} color={'white'}>
                        {props.university.name}
                    </Typography>
                    <Typography variant="h4" textAlign={'center'} color={'white'}>
                        Rank: {props.university.rank}
                    </Typography>
                </Box>
            </StyledUniversityCard>
        </StyledWrapper>
    )
}