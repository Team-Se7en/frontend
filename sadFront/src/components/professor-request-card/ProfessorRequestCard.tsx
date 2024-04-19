import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { StyledBackgroundImage, StyledCard, StyledCardActions, StyledCardContent, StyledDescription, StyledTag } from "./ProfessorRequestCard-styles";
import { useState } from "react";
import { AccessTimeRounded, AttachMoneyRounded, CloseRounded, DeleteRounded, EditRounded, EventRounded, FullscreenExitOutlined, FullscreenRounded, HourglassFullRounded, School, SchoolOutlined, SchoolRounded } from "@mui/icons-material";
import theme from "Theme";
import Styles from "Styles";
import clsx from "clsx";
import CardModal from "components/modals/card-modal/CardModal";
import DeleteDialog from "components/dialogs/delete-dialog/DeleteDialog";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo, Status } from "@models";
import { Spacer } from "@components";
import ProfessorRequestCardDialog from "components/dialogs/professor-request-card-dialog/ProfessorRequestCardDialog";

export interface ProfessorRequestCardProps {
  model: ProfessorCardViewShortInfo;
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

    const globalStyles = Styles();

    const fullInfo: ProfessorCardViewFullInfo = {
        description: "description",
        university: {
            name: "university",
            description: "university description"
        },
        title: props.model.title,
        studentCapacity: props.model.studentCapacity,
        status: props.model.status,
        startDate: props.model.startDate,
        endDate: props.model.endDate,
        tags: props.model.tags,
        fee: props.model.fee,
        positionStartDate: props.model.positionStartDate,
        duration: props.model.duration
    }

    return (
        <>
            <Tooltip title={`position is ${Status[props.model.status]}`}>
                <StyledCard status={props.model.status} className={clsx(globalStyles.flexColumn)}>
                    <StyledBackgroundImage />
                    <StyledCardContent className={clsx(globalStyles.flexColumn)}>

                        <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)}>
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

                        <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)} sx={{ mt: 2 }}>
                            <Box gap={1} className={globalStyles.flexRow}>
                                <AccessTimeRounded sx={{ color: theme.palette.accessTime }} />
                                <Typography variant="body1">
                                    {props.model.startDate.toLocaleDateString('en-US')} - {props.model.endDate.toLocaleDateString('en-US')}
                                </Typography>
                            </Box>
                        </Box>

                        <Tooltip title={props.model.universityName}>
                            <Box gap={1} className={globalStyles.flexRow} sx={{ mt: 0.5 }}>
                                <SchoolRounded sx={{ color: theme.palette.iconButton }} />
                                <Typography variant="body1" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                                    {props.model.universityName}
                                </Typography>
                            </Box>
                        </Tooltip>

                        <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)} sx={{ mt: 0.5, mb: 0.5 }}>
                            <Tooltip title="fee">
                                <Box className={globalStyles.flexRow}>
                                    <AttachMoneyRounded sx={{ color: theme.palette.iconButton }} />
                                    <Typography variant="body1">
                                        {props.model.fee}
                                    </Typography>
                                </Box>
                            </Tooltip>

                            <Typography variant="body1">
                                Needed: {props.model.studentCapacity}
                            </Typography>

                            <Typography variant="body1">
                                Requested: {props.model.requestingStudents}
                            </Typography>
                        </Box>

                        <Box gap={1} className={globalStyles.flexRow}>
                            <Box gap={0.5} className={globalStyles.flexRow}>

                                <EventRounded sx={{ color: theme.palette.iconButton }} />
                                <Typography variant="body1">
                                    {props.model.positionStartDate.toLocaleDateString('en-US')}
                                </Typography>
                            </Box>
                            <Box gap={0.5} className={globalStyles.flexRow}>

                                <HourglassFullRounded sx={{ color: theme.palette.iconButton }} />
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
                            </Box>
                        </Box>

                        <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                            <Grid item>
                                <Typography sx={{ pt: '4px' }}>
                                    Tags:
                                </Typography>
                            </Grid>

                            {
                                props.model.tags.map(tag => (
                                    <Grid item>
                                        <StyledTag label={tag} variant="filled"></StyledTag>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </StyledCardContent>
                    <Button onClick={handleDialogOpen} sx={{ color: 'darkblue' }} className={clsx(globalStyles.justifySelfBottom)} variant="text" disableRipple>More info...</Button>
                </StyledCard>
            </Tooltip>

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
                <ProfessorRequestCardDialog cardId={""} model={props.model} />
            </Dialog>

            <Modal open={modalOpen} onClose={handleModalClose} sx={{ m: 2 }}>
                <CardModal model={fullInfo} />
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog />
            </Dialog>
        </>
    )
}   