import { Box } from "@mui/material";
import { University } from "../../models/University";
import { StyledUniversityIcon } from "./UniversityCard-styles";


export interface UniversityCardProps {
    university: University;
}

export function UniversityCard(props: UniversityCardProps) {
    return (
        <>
            <StyledUniversityIcon src={props.university.icon}>

            </StyledUniversityIcon>
        </>
    )
}