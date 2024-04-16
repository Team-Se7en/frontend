import { Box, Button, CardActions, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { StyledBackground, StyledBackgroundImage, StyledCard, StyledCardActions, StyledCardContent, StyledDescription, StyledTag } from "./ProfessorRequestCard-styles";
import { useState } from "react";
import { CloseRounded, Delete, DeleteRounded, Description, Edit, EditRounded, FullscreenExitOutlined, FullscreenRounded } from "@mui/icons-material";
import theme from "Theme";
import Styles from "Styles";
import clsx from "clsx";
import CardModal from "components/modals/card-modal/CardModal";
import DeleteDialog from "components/dialogs/delete-dialog/DeleteDialog";
import { Status, CardModel } from "@models";
import { Spacer } from "@components";
import { StatusCard } from "components/ui/StatusCard";

export interface ProfessorRequestCardProps {
    model: CardModel,
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

    return (
        <>
            <StyledCard>
                <StyledBackgroundImage />
                <StyledCardContent className={clsx(globalStyles.flexColumn)}>

                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)}>
                        <Tooltip title={props.model.title}>
                            <Typography variant="h4" color="iconButton" noWrap>
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
                    <Tooltip title="description">
                        <StyledDescription variant="body1">
                            {props.model.description}
                        </StyledDescription>
                    </Tooltip>

                    <Spacer />

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
                </StyledCardContent>

                <Tooltip title="Click for more info">

                    <StyledCardActions onClick={handleDialogOpen} status={props.model.status}>
                        <Typography color={"white"}>
                            Status: {Status[props.model.status]}
                        </Typography>

                        <Typography color={"white"} sx={{ ml: '2rem !important' }}>
                            Requesting Students: {20}
                        </Typography>

                        {/* <Button variant="outlined">
                        More Info...
                    </Button> */}
                    </StyledCardActions>
                </Tooltip>
            </StyledCard>
            <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth='xl' fullScreen={dialogFullscreen}
                PaperProps={{ sx: { backgroundImage: 'linear-gradient(to bottom right, #70d1f4, #b0e7ff)' } }}>
                <DialogActions>
                    <IconButton onClick={handleFullscreen} sx={{ color: theme.palette.iconButton }}>
                        {dialogFullscreen ? <FullscreenExitOutlined /> : <FullscreenRounded />}
                    </IconButton>
                    <IconButton onClick={handleDialogClose} sx={{ color: theme.palette.iconButton }}>
                        <CloseRounded />
                    </IconButton>
                </DialogActions>
                <DialogTitle>

                </DialogTitle>

                <DialogContent>

                </DialogContent>
            </Dialog>

            <Modal open={modalOpen} onClose={handleModalClose}>
                <CardModal model={props.model} />
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog />
            </Dialog>
        </>
    )
}   