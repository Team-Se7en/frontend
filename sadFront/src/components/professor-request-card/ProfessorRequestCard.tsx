import { EditRounded, DeleteRounded, AccessTimeRounded, EventRounded, SchoolRounded, AttachMoneyRounded, FullscreenExitOutlined, FullscreenRounded, CloseRounded } from "@mui/icons-material";
import { Box, Tooltip, Typography, IconButton, Grid, Button, Dialog, DialogActions, Modal } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { formatTime } from "../../lib/format-time";
import { ProfessorCardViewShortInfo } from "../../models/CardInfo";
import { deletePosition } from "../../services/position.service";
import Styles from "../../Styles";
import theme from "../../Theme";
import DeleteDialog from "../dialogs/delete-dialog/DeleteDialog";
import ProfessorRequestCardDialog from "../dialogs/professor-request-card-dialog/ProfessorRequestCardDialog";
import CardModal from "../modals/card-modal/CardModal";
import { Spacer } from "../ui/Spacer";
import { StatusCircle } from "../ui/status-circle/StatusCircle";
import { StyledCard, StyledCardContent, StyledTag } from "./ProfessorRequestCard-styles";


export interface ProfessorRequestCardProps {
    model: ProfessorCardViewShortInfo;
    onDelete?: (id: number) => void;
}

export function ProfessorRequestCard(props: ProfessorRequestCardProps) {
    const [model, setModel] = useState<ProfessorCardViewShortInfo>(props.model);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogFullscreen, setDialogFullscreen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleDeleteDialogOpen = () => {
        setDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    };

    const handleFullscreen = () => {
        setDialogFullscreen(!dialogFullscreen);
    };

    const handleDelete = () => {
        const _deletePosition = async () => {
            try {
                const result = await deletePosition(model.id);
                return result.data;
            } catch (error) {
                toast.success("Delete Failed", {
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
        };

        _deletePosition();
        props.onDelete?.(model.id);
        handleDeleteDialogClose();
    }

    const globalStyles = Styles();

    // const fullInfo: ProfessorCardViewFullInfo = {
    //     description: "description",
    //     university: {
    //         name: "IUST",
    //         description: "Iran University of Science and Technology"
    //     },
    //     title: model.title,
    //     capacity: model.capacity,
    //     status: model.status,
    //     start_date: model.start_date,
    //     end_date: model.end_date,
    //     tags: model.tags,
    //     fee: model.fee,
    //     position_start_date: model.position_start_date,
    //     // duration: model.duration,
    //     request_count: 0,
    //     id: 0,
    //     position_end_date: model.position_end_date,
    // }

    const handleUpdate = (updatedModel: ProfessorCardViewShortInfo) => {
        setModel(updatedModel);
    }

    return (
        <>
            <StyledCard className={clsx(globalStyles.flexColumn)}>
                {/* <StyledBackgroundImage /> */}
                <StyledCardContent className={clsx(globalStyles.flexColumn)}>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween, globalStyles.vCenter)}>
                        <Tooltip title={model.title}>
                            <Typography variant="h5" color="iconButton" noWrap>
                                {model.title}
                            </Typography>
                        </Tooltip>
                        <Box sx={{ minWidth: 'fit-content' }}>
                            <Tooltip title="Edit">
                                <IconButton onClick={handleModalOpen}>
                                    <EditRounded sx={{ color: theme.palette.iconButton }} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                                <IconButton onClick={handleDeleteDialogOpen}>
                                    <DeleteRounded sx={{ color: theme.palette.iconButton }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween, globalStyles.vCenter)} sx={{ mt: 2 }}>
                        <Box gap={1} className={globalStyles.flexRow}>
                            <AccessTimeRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1">
                                {`${formatTime(model.start_date.toString())} - ${formatTime(model.end_date.toString())}`}
                            </Typography>
                        </Box>
                        <Spacer />
                        <Box gap={0.5} className={globalStyles.flexRow}>

                            <EventRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1">
                                {`${formatTime(model.position_start_date.toString())} - ${formatTime(model.position_end_date.toString())}`}
                            </Typography>
                        </Box>
                        <Spacer />
                        <StatusCircle status={model.status} />
                    </Box>

                    <Tooltip title={model.university_name}>
                        <Box gap={1} className={globalStyles.flexRow} sx={{ mt: 0.5 }}>
                            <SchoolRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                                {model.university_name}
                            </Typography>
                        </Box>
                    </Tooltip>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)} sx={{ mt: 0.5, mb: 0.5 }}>
                        <Box className={globalStyles.flexRow}>
                            <AttachMoneyRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1">
                                {model.fee}
                            </Typography>
                        </Box>

                        <Typography variant="body1">
                            Needed: {model.capacity}
                        </Typography>

                        <Typography variant="body1">
                            Requested: {model.request_count}
                        </Typography>
                    </Box>

                    <Box gap={1} className={globalStyles.flexRow}>

                        {/* <Box gap={0.5} className={globalStyles.flexRow}>

                            <HourglassTopRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography>
                                {
                                    model.duration.year ? ` ${model.duration.year}y,` : ''
                                }
                                {
                                    model.duration.month ? ` ${model.duration.month}m,` : ''
                                }
                                {
                                    model.duration.day ? ` ${model.duration.day}d` : ''
                                }
                            </Typography>
                        </Box> */}
                    </Box>

                    <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                        <Grid item>
                            <Typography sx={{ pt: '4px' }}>
                                Tags:
                            </Typography>
                        </Grid>

                        {
                            model.tags.map(tag => (
                                <Grid item key={tag}>
                                    <StyledTag label={tag}></StyledTag>
                                </Grid>
                            ))
                        }

                        <Spacer />
                        <Grid sx={{ pt: '4px' }}>
                            <Button onClick={handleDialogOpen} sx={{ color: 'darkblue' }} className={clsx(globalStyles.justifySelfBottom)} variant="text" disableRipple>Learn More</Button>
                        </Grid>

                    </Grid>
                </StyledCardContent>
            </StyledCard>

            <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth='md' fullScreen={dialogFullscreen}
                PaperProps={{ sx: { backgroundImage: theme.palette.backgroundColor } }}>
                <DialogActions>
                    <Tooltip title="Edit">
                        <IconButton onClick={handleModalOpen}>
                            <EditRounded sx={{ color: theme.palette.iconButton }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton onClick={handleDeleteDialogOpen}>
                            <DeleteRounded sx={{ color: theme.palette.iconButton }} />
                        </IconButton>
                    </Tooltip>
                    <IconButton onClick={handleFullscreen} sx={{ color: theme.palette.iconButton }}>
                        {dialogFullscreen ? <FullscreenExitOutlined /> : <FullscreenRounded />}
                    </IconButton>
                    <IconButton onClick={handleDialogClose} sx={{ color: theme.palette.iconButton }}>
                        <CloseRounded />
                    </IconButton>
                </DialogActions>
                <ProfessorRequestCardDialog model_id={model.id} />
            </Dialog>

            <Modal open={modalOpen} onClose={handleModalClose} sx={{ m: 2, borderRadius: '4px', height: '90%' }}>
                <CardModal model_id={model.id} onClose={handleModalClose} onAddUpdate={handleUpdate}/>
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog onYesClick={handleDelete} onNoClick={handleDeleteDialogClose} />
            </Dialog>
        </>
    )
}   