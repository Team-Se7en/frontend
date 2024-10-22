import { Box, DialogTitle, DialogContent, Divider, Typography, Collapse, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { formatTime } from "../../../lib/format-time";
import { ProfessorCardViewFullInfo } from "../../../models/CardInfo";
import { getPositionFullInfo } from "../../../services/position.service";
import { StyledTag } from "../../professor-position-card/ProfessorPositionCard-styles";
import { StyledShowButton } from "./ProfessorPositionCardDialog-styles";
import { Loading } from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { StudentCard } from "../../student-card/StudentCard";
import { Status } from "../../../models/Status";
import clsx from "clsx";
import Styles from "../../../Styles";

export interface ProfessorRequestCardDialogProps {
    // cardId: string;
    // model: ProfessorCardViewFullInfo;
    model_id: number;
}

export default function ProfessorRequestCardDialog(props: ProfessorRequestCardDialogProps) {
    const navigate = useNavigate();


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

    const [model, setModelData] = useState<ProfessorCardViewFullInfo>();

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const handleDescriptionExpandClick = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };

    const [universityExpanded, setUniversityExpanded] = useState(false);
    const handleUniversityExpandClick = () => {
        setUniversityExpanded(!universityExpanded);
    };

    // const globalStyles = Styles();
    const croppedLength = 200;

    const [loading, setLoading] = useState(true);

    const handleRequestStatusChange = (status: Status) => {
        console.log(status);
    }

    const globalClasses = Styles();

    if (loading) {
        return <Loading />;
    }

    if (!model) {
        navigate("/404");
        return;
    }

    return (
        <Box>
            {
                loading
                    ?
                    <Loading />
                    :
                    <>
                        <DialogTitle variant="h4">
                            {model.title}
                        </DialogTitle>

                        <DialogContent>
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

                            <Divider orientation="horizontal" variant="middle" sx={{ mt: 1, mb: 1 }}>
                                Applications
                            </Divider>

                            <Box gap={2} className={clsx(globalClasses.flexColumn)}>
                                {
                                    model.requests.map((student, index) => (
                                        <StudentCard key={index} model={student} requestStatusChange={handleRequestStatusChange}/>
                                    ))
                                }
                            </Box>
                        </DialogContent>
                    </>
            }
        </Box>
    )
}