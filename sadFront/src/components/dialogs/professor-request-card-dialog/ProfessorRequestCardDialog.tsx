import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo } from "@models";
import { Box, Button, Collapse, DialogContent, DialogTitle, Divider, Grid, Typography } from "@mui/material";
import { StyledTag } from "components/professor-request-card/ProfessorRequestCard-styles";
import { useState } from "react";
import Styles from "Styles";

export interface ProfessorRequestCardDialogProps {
    cardId: string;
    model: ProfessorCardViewFullInfo;
}

export default function ProfessorRequestCardDialog(props: ProfessorRequestCardDialogProps) {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const handleDescriptionExpandClick = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };

    const [universityExpanded, setUniversityExpanded] = useState(false);
    const handleUniversityExpandClick = () => {
        setUniversityExpanded(!universityExpanded);
    };

    const globalStyles = Styles();

    return (
        <Box>
            <DialogTitle>
                {props.model.title}
            </DialogTitle>

            <DialogContent>
                <Divider orientation="horizontal" variant="middle" sx={{ mb: 1 }}>
                    Position Description
                </Divider>
                <Box>
                    <Typography variant="body1" component="div">
                        {descriptionExpanded ? props.model.description : `${props.model.description.slice(0, 200)}`}
                    </Typography>
                    <Collapse in={!descriptionExpanded}>
                        {
                            props.model.description.length > 100 ?
                                <Button fullWidth onClick={handleDescriptionExpandClick} size="medium" variant="text" disableRipple>
                                    {descriptionExpanded ? 'Show less' : 'Show more'}
                                </Button>
                                : <></>
                        }
                    </Collapse>
                </Box>

                <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                    Program Info
                </Divider>

                <Typography variant="body1">
                    {props.model.start_date.toLocaleDateString('en-US')} - {props.model.end_date.toLocaleDateString('en-US')}
                </Typography>

                <Typography variant="body1">
                    Fee: $ {props.model.fee}
                </Typography>

                <Typography variant="body1">
                    Needed: {props.model.capacity}
                </Typography>

                <Typography variant="body1">
                    Requested: {props.model.requestingStudents}
                </Typography>

                <Typography variant="body1">
                    Start Date: {props.model.position_start_date.toLocaleDateString('en-US')},
                </Typography>

                <Typography variant="body1">
                    Duration: 
                    {
                        props.model.duration.year ? ` ${props.model.duration.year}y,` : ''
                    }
                    {
                        props.model.duration.month ? ` ${props.model.duration.month}m,` : ''
                    }
                    {
                        props.model.duration.day ? ` ${props.model.duration.day}d` : ''
                    }
                </Typography>

                <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                    <Grid item>
                        <Typography sx={{ pt: '4px' }}>
                            Tags:
                        </Typography>
                    </Grid>

                    {
                        props.model.tags.map(tag => (
                            <Grid item>
                                <StyledTag label={tag} variant="outlined"></StyledTag>
                            </Grid>
                        ))
                    }

                </Grid>

                <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                    {props.model.university.name}
                </Divider>
                <Box>
                    <Typography variant="body1" component="div">
                        {universityExpanded ? props.model.university.description : `${props.model.university.description.slice(0, 200)}`}
                    </Typography>
                    <Collapse in={!universityExpanded}>
                        {
                            props.model.university.description.length > 100 ?
                                <Button fullWidth onClick={handleUniversityExpandClick} size="medium" variant="text" disableRipple>
                                    {universityExpanded ? 'Show less' : 'Show more'}
                                </Button>
                                : <></>
                        }
                    </Collapse>
                </Box>

                <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                    Applications
                </Divider>
            </DialogContent>
        </Box>
    )
}