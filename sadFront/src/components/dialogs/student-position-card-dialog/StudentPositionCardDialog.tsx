import { DialogTitle, DialogContent, Divider, Box, Collapse, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { formatTime } from "../../../lib/format-time";
import { StyledTag } from "../../professor-position-card/ProfessorPositionCard-styles";
import { StyledShowButton } from "../professor-position-card-dialog/ProfessorPositionCardDialog-styles";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { applyToPosition, getPositionFullInfo } from "../../../services/position.service";
import { StudentCardViewFullInfo } from "../../../models/CardInfo";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../ui/Loading";
import { KeyboardArrowRight } from "@mui/icons-material";
import { RequestModel } from "../../../models/Request";
import { StyledApplyButton } from "./StudentPositionCardDialog-styles";
import { isApplyDisabled, Status } from "../../../models/Status";
import { UserType } from "../../../models/UserType";
import { statusColor } from "../../../lib/status-color";


export interface StudentPositionCardDialogProps {
    model_id: number;
}

export function StudentPositionCardDialog(props: StudentPositionCardDialogProps) {
    const croppedLength = 200;

    const isSmallScreen = useMediaQuery("(max-width:800px)");

    const navigate = useNavigate();
    const [model, setModelData] = useState<StudentCardViewFullInfo>();
    const [loading, setLoading] = useState(true);

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const handleDescriptionExpandClick = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };

    const [universityExpanded, setUniversityExpanded] = useState(false);
    const handleUniversityExpandClick = () => {
        setUniversityExpanded(!universityExpanded);
    };

    useEffect(() => {
        const getModel = async () => {
            try {
                if (!props.model_id) {
                    throw new Error('Invalid Id');
                }
                const result = await getPositionFullInfo(props.model_id);
                setModelData(result.data);
                setLoading(false);
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

    const handleApply = async () => {
        if (!model) return;

        const requestModel: RequestModel = {
            position_id: model.id,
            cover_letter: 'test',
        }
        try {
            await applyToPosition(requestModel);
            setModelData(_model => {
                return _model ? {
                    ..._model,
                    status: Status.PP,
                }
                    :
                    _model;
            });
            toast.success('Request sent successfully');
        } catch (error) {
            toast.error('Failed to apply to position');
        }
    }

    if (loading) {
        return <Loading />;
    }

    if (!model) {
        navigate("/404");
        return;
    }

    return (
        <>
            <DialogTitle variant="h4">
                {model.title}
            </DialogTitle>

            <DialogContent sx={{ pb: '4rem'}}>
                <Box
                    id="name-and-button"
                    sx={{ display: "flex" }}
                    alignItems={"center"}
                >
                    <Typography variant="h6">
                        {model.professor.user.first_name +
                            " " +
                            model.professor.user.last_name}
                    </Typography>
                    <KeyboardArrowRight />
                    <Button size="small" sx={{ height: "2rem" }}>
                        {isSmallScreen ? (
                            <p>PROFILE</p>
                        ) : (
                            <p>VIEW FULL PROFILE</p>
                        )}
                    </Button>
                </Box>

                <Divider orientation="horizontal" variant="middle" sx={{ mb: 1 }}>
                    Position Description
                </Divider>
                <Box>
                    {
                        model.description.length > croppedLength
                            ?
                            <>
                                <Collapse in={descriptionExpanded} collapsedSize={'3rem'}>
                                    <Typography variant="body1" component="div">
                                        {model.description}
                                    </Typography>
                                </Collapse>
                                <StyledShowButton fullWidth onClick={handleDescriptionExpandClick} size="medium" variant="text" disableRipple>
                                    {descriptionExpanded ? 'Show less' : 'Show more'}
                                </StyledShowButton>
                            </>
                            :
                            <Typography variant="body1" component="div">
                                {model.description}
                            </Typography>
                    }
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

                {/* <Typography variant="body1">
                    Requested: {model.request_count}
                </Typography> */}

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
                        model.tags.map((tag, index) => (
                            <Grid item key={index}>
                                <StyledTag label={tag}></StyledTag>
                            </Grid>
                        ))
                    }

                </Grid>

                {
                    model.university ?
                        <>
                            <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                                {model.university?.name}
                            </Divider>
                            <Box>
                                {
                                    model.university?.description.length ?? 0 > croppedLength
                                        ?
                                        <>
                                            <Collapse in={universityExpanded} collapsedSize={'3rem'}>
                                                <Typography variant="body1" component="div">
                                                    {model.university?.description}
                                                </Typography>
                                            </Collapse>
                                            <StyledShowButton fullWidth onClick={handleUniversityExpandClick} size="medium" variant="text" disableRipple>
                                                {universityExpanded ? 'Show less' : 'Show more'}
                                            </StyledShowButton>
                                        </>
                                        :
                                        <Typography variant="body1" component="div">
                                            {model.university?.description}
                                        </Typography>
                                }
                            </Box>
                         </>
                        :
                        <></>
                }

                <StyledApplyButton variant="contained" sx={{ backgroundColor: statusColor(model.status)}} disabled={isApplyDisabled(model.status, UserType.Student)} onClick={handleApply}>
                    {model.status}
                </StyledApplyButton>
            </DialogContent>
        </>
    )
}