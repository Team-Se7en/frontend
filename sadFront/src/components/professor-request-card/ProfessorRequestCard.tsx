import { Box, Button, Dialog, DialogActions, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { StyledBackgroundImage, StyledCard, StyledCardContent, StyledTag } from "./ProfessorRequestCard-styles";
import { useEffect, useState } from "react";
import { AccessTimeRounded, AttachMoneyRounded, CloseRounded, DeleteRounded, EditRounded, EventRounded, FullscreenExitOutlined, FullscreenRounded, HourglassTopRounded, SchoolRounded } from "@mui/icons-material";
import theme from "Theme";
import Styles from "Styles";
import clsx from "clsx";
import CardModal from "components/modals/card-modal/CardModal";
import DeleteDialog from "components/dialogs/delete-dialog/DeleteDialog";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo, Status } from "@models";
import ProfessorRequestCardDialog from "components/dialogs/professor-request-card-dialog/ProfessorRequestCardDialog";
import { enumToString } from "lib/enum-toString";
import { deletePosition } from "services/position.service";
import { Bounce, toast } from "react-toastify";
import { Spacer } from "components/ui";
import { StatusCircle } from "components/ui/status-circle/StatusCircle";
import { formatTime } from "lib/format-time";

export interface ProfessorRequestCardProps {
    model: ProfessorCardViewShortInfo;
    onDelete?: (id: number) => void;
}

export function ProfessorRequestCard(props: ProfessorRequestCardProps) {
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
                const result = await deletePosition(props.model.id);
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
        props.onDelete?.(props.model.id);
        handleDeleteDialogClose();
    }

    const globalStyles = Styles();

    const fullInfo: ProfessorCardViewFullInfo = {
        description: "description",
        university: {
            name: "IUST",
            description: "Iran University of Science and Technology"
        },
        title: props.model.title,
        capacity: props.model.capacity,
        status: props.model.status,
        start_date: props.model.start_date,
        end_date: props.model.end_date,
        tags: props.model.tags,
        fee: props.model.fee,
        position_start_date: props.model.position_start_date,
        // duration: props.model.duration,
        request_count: 0,
        id: 0,
        position_end_date: props.model.position_end_date,
    }

    return (
        <>
            <StyledCard status={props.model.status} className={clsx(globalStyles.flexColumn)}>
                {/* <StyledBackgroundImage /> */}
                <StyledCardContent className={clsx(globalStyles.flexColumn)}>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween, globalStyles.vCenter)}>
                        <Tooltip title={props.model.title}>
                            <Typography variant="h5" color="iconButton" noWrap>
                                {props.model.title}
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
                            <AccessTimeRounded sx={{ color: theme.palette.accessTime }} />
                            <Typography variant="body1">
                                {`${formatTime(props.model.start_date.toString())} - ${formatTime(props.model.end_date.toString())}`}
                            </Typography>
                        </Box>
                        <Spacer />
                        <Box gap={0.5} className={globalStyles.flexRow}>

                            <EventRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1">
                                {`${formatTime(props.model.position_start_date.toString())} - ${formatTime(props.model.position_end_date.toString())}`}
                            </Typography>
                        </Box>
                        <Spacer />
                        <StatusCircle status={props.model.status} />
                    </Box>

                    <Tooltip title={props.model.university_name}>
                        <Box gap={1} className={globalStyles.flexRow} sx={{ mt: 0.5 }}>
                            <SchoolRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                                {props.model.university_name}
                            </Typography>
                        </Box>
                    </Tooltip>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)} sx={{ mt: 0.5, mb: 0.5 }}>
                        <Box className={globalStyles.flexRow}>
                            <AttachMoneyRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography variant="body1">
                                {props.model.fee}
                            </Typography>
                        </Box>

                        <Typography variant="body1">
                            Needed: {props.model.capacity}
                        </Typography>

                        <Typography variant="body1">
                            Requested: {props.model.request_count}
                        </Typography>
                    </Box>

                    <Box gap={1} className={globalStyles.flexRow}>

                        {/* <Box gap={0.5} className={globalStyles.flexRow}>

                            <HourglassTopRounded sx={{ color: theme.palette.iconButton }} />
                            <Typography>
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
                        </Box> */}
                    </Box>

                    <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                        <Grid item>
                            <Typography sx={{ pt: '4px' }}>
                                Tags:
                            </Typography>
                        </Grid>

                        {
                            props.model.tags.map(tag => (
                                <Grid item key={tag}>
                                    <StyledTag label={tag} variant="outlined"></StyledTag>
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

            <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth='xl' fullScreen={dialogFullscreen}
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
                <ProfessorRequestCardDialog model_id={props.model.id} />
            </Dialog>

            <Modal open={modalOpen} onClose={handleModalClose} sx={{ m: 2, borderRadius: '4px' }}>
                <CardModal model_id={props.model.id} onClose={handleModalClose} />
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog onYesClick={handleDelete} onNoClick={handleDeleteDialogClose} />
            </Dialog>
        </>
    )
}   