import { Card } from "@mui/material";
import { Professor } from "../../models/Professor";
import { StyledProfessorCard } from "./ProfessorCard-styles";


export interface ProfessorCardProps {
    professor: Professor,
}

export function ProfessorCard(props: ProfessorCardProps) {
    return (
        <>
        <StyledProfessorCard>

        </StyledProfessorCard>
        </>
    )
}