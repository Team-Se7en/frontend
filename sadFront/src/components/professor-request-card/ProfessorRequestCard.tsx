import { Box, Button, CardActions, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Modal, Typography } from "@mui/material";
import { StyledCard, StyledCardActions, StyledCardContent } from "./ProfessorRequestCard-styles";
import { useState } from "react";
import { CloseRounded, Delete, DeleteRounded, Edit, EditRounded, FullscreenExitOutlined, FullscreenRounded } from "@mui/icons-material";
import theme from "Theme";
import Styles from "Styles";
import clsx from "clsx";
import Status from "models/Status";
import CardModal from "components/modals/card-modal/CardModal";
import DeleteDialog from "components/dialogs/delete-dialog/DeleteDialog";

function CardStatus(status: Status, requestedCount: number) {
    switch (status) {
        case Status.open:
            return
            <CardActions>

            </CardActions>;
        case Status.pending:
            return <></>;
        case Status.closed:
            return <></>;
        default:
            throw new Error('Unknown status: ' + status);
    }
}

export function ProfessorRequestCard() {
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
                <StyledCardContent>
                    <Box className={clsx(globalStyles.flexRow, globalStyles.justifyContentBetween)}>
                        <Typography variant="h4" color="iconButton">
                            Title: title
                        </Typography>
                        <Box>
                            <IconButton onClick={handleModalOpen}>
                                <EditRounded sx={{ color: theme.palette.iconButton }} />
                            </IconButton>
                            <IconButton onClick={handleDeleteDialogOpen}>
                                <DeleteRounded sx={{ color: theme.palette.iconButton }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 1, height: 'calc(100% - 5.25rem)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Description: ddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddddddd
                    </Typography>

                    <Grid container spacing={1} sx={{ overflow: 'hidden', height: '2.5rem', mt: '0 !important' }}>
                        <Grid item>
                            <Typography sx={{ pt: '4px' }}>
                                Tags:
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>

                        <Grid item>
                            <Chip label="science" variant="outlined"></Chip>
                        </Grid>
                    </Grid>
                </StyledCardContent>

                <StyledCardActions onClick={handleDialogOpen}>
                    <Typography color={"white"}>
                        Status: {Status[Status.open]}
                    </Typography>

                    <Typography color={"white"} sx={{ml: '2rem !important'}}>
                        Requesting Students: {20}
                    </Typography>

                    {/* <Button variant="outlined">
                        More Info...
                    </Button> */}
                </StyledCardActions>

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
                <CardModal model={null} />
            </Modal>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} fullWidth maxWidth='sm'>
                <DeleteDialog />
            </Dialog>
        </>
    )
}   