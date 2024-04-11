import { CardActions, CardContent, Typography } from "@mui/material";
import { StyledCard, StyledCardActions, StyledCardContent } from "./ProfessorRequestCard-styles";
import React from "react";

export function ProfessorRequestCard() {


    return (
            <StyledCard>
                <StyledCardContent>
                    <Typography variant="h4" color="color1">
                        Title: title
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Description: description
                    </Typography>
                </StyledCardContent>

                <StyledCardActions>

                </StyledCardActions>
            </StyledCard>
    )
}   