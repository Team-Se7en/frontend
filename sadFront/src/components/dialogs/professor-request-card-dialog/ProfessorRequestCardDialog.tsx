import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo, Status } from "@models";
import { Box, Button, Collapse, DialogContent, DialogTitle, Divider, Grid, Typography } from "@mui/material";
import { StyledTag } from "components/professor-request-card/ProfessorRequestCard-styles";
import { formatTime } from "lib/format-time";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { getPositionFullInfoProfessor } from "services/position.service";
import Styles from "Styles";

export interface ProfessorRequestCardDialogProps {
    // cardId: string;
    // model: ProfessorCardViewFullInfo;
    model_id: number;
}

export default function ProfessorRequestCardDialog(props: ProfessorRequestCardDialogProps) {
    useEffect(() => {
        const getModel = async () => {
            try {
                if (!props.model_id) {
                    throw new Error('Invalid Id');
                }
                const result = await getPositionFullInfoProfessor(props.model_id);
                setModelData(result.data);
            } catch (e) {
                toast.success("Couldn't retrieve position info", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }

        if (props.model_id) {
            getModel();
        }
    }, [props.model_id]);

    const [model, setModelData] = useState<ProfessorCardViewFullInfo>({
        title: "",
        description: "",
        status: Status.Open,
        start_date: new Date(),
        end_date: new Date(),
        tags: [],
        fee: 0,
        position_start_date: new Date(),
        position_end_date: new Date(),
        // duration: model?.duration ?? { year: 0, month: 0, day: 0 },
        // university: props.model?.university ?? universities[0],
        university: "",
        request_count: 0,
        id: 0,
        capacity: 0,
    });

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
                {model.title}
            </DialogTitle>

            <DialogContent>
                <Divider orientation="horizontal" variant="middle" sx={{ mb: 1 }}>
                    Position Description
                </Divider>
                <Box>
                    <Typography variant="body1" component="div">
                        {descriptionExpanded ? model.description : `${model.description.slice(0, 200)}`}
                    </Typography>
                    <Collapse in={!descriptionExpanded}>
                        {
                            model.description.length > 100 ?
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
                    Application Acceptance: {`${formatTime(model.start_date.toString())} - ${formatTime(model.end_date.toString())}`}
                </Typography>

                <Typography variant="body1">
                    Fee: $ {model.fee}
                </Typography>

                <Typography variant="body1">
                    Needed: {model.capacity}
                </Typography>

                <Typography variant="body1">
                    Requested: {model.request_count}
                </Typography>

                <Typography variant="body1">
                    Position Duration: {`${formatTime(model.position_start_date.toString())} - ${formatTime(model.position_end_date.toString())}`}
                </Typography>


                <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                    <Grid item>
                        <Typography sx={{ pt: '4px' }}>
                            Tags:
                        </Typography>
                    </Grid>

                    {
                        model.tags.map(tag => (
                            <Grid item>
                                <StyledTag label={tag} variant="outlined"></StyledTag>
                            </Grid>
                        ))
                    }

                </Grid>

                <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                    {model.university}
                </Divider>
                <Box>
                    {/* <Typography variant="body1" component="div">
                        {universityExpanded ? model.university?.description ?? '' : `${model.university?.description.slice(0, 200) ?? ''}`}
                    </Typography>
                    <Collapse in={!universityExpanded}>
                        {
                            (model.university?.description.length ?? 0) > 100 ?
                                <Button fullWidth onClick={handleUniversityExpandClick} size="medium" variant="text" disableRipple>
                                    {universityExpanded ? 'Show less' : 'Show more'}
                                </Button>
                                : <></>
                        }
                    </Collapse> */}
                </Box>

                <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                    Applications
                </Divider>
            </DialogContent>
        </Box>
    )
}