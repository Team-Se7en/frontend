import { AccessTimeRounded, AttachMoneyRounded, CloseRounded, DeleteRounded, EditRounded, EventRounded, FullscreenExitOutlined, FullscreenRounded, SchoolRounded } from "@mui/icons-material";
import { Bounce, toast } from "react-toastify";
import { Box, Button, Dialog, DialogActions, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { StyledCard, StyledCardContent, StyledTag } from "./ProfessorRequestCard-styles";

import CardModal from "../modals/card-modal/CardModal";
import DeleteDialog from "../dialogs/delete-dialog/DeleteDialog";
import { ProfessorCardViewShortInfo } from "../../models/CardInfo";
import ProfessorRequestCardDialog from "../dialogs/professor-request-card-dialog/ProfessorRequestCardDialog";
import { Spacer } from "../ui/Spacer";
import { StatusCircle } from "../ui/status-circle/StatusCircle";
import Styles from "../../Styles";
import clsx from "clsx";
import { deletePosition } from "../../services/position.service";
import { formatTime } from "../../lib/format-time";
import theme from "../../Theme";
import { useState } from "react";

export interface ProfessorRequestCardProps {
    model: ProfessorCardViewShortInfo;
    onDelete?: (id: number) => void;
    disable?: boolean;
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
                                <IconButton disabled={props.disable} onClick={handleModalOpen}>
                                    <EditRounded sx={{ color: theme.palette.iconButton }} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                                <IconButton disabled={props.disable} onClick={handleDeleteDialogOpen}>
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
                        <Box minWidth={'4.5rem'} display={'flex'} justifyContent={'flex-end'}>
                            <StatusCircle status={model.status} />
                        </Box>
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
                            Requested: {props.disable ? '?' : model.request_count}
                        </Typography>
                    </Box>

                    {/* <Box gap={1} className={globalStyles.flexRow}>

                        <Box gap={0.5} className={globalStyles.flexRow}>

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
                        </Box>
                    </Box> */}

                    <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                        <Grid item>
                            <Typography sx={{ pt: '4px' }}>
                                Topics:
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
                            <Button disabled={props.disable} onClick={handleDialogOpen} sx={{ color: 'darkblue' }} className={clsx(globalStyles.justifySelfBottom)} variant="text" disableRipple>Learn More</Button>
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
                <CardModal model_id={model.id} onClose={handleModalClose} onAddUpdate={handleUpdate} />
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog onYesClick={handleDelete} onNoClick={handleDeleteDialogClose} />
            </Dialog>
        </>
    )
}   