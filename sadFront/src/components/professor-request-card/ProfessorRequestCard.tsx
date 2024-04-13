import { Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { StyledCard, StyledCardActions, StyledCardContent } from "./ProfessorRequestCard-styles";
import { useState } from "react";
import { CloseRounded, FullscreenExitOutlined, FullscreenRounded } from "@mui/icons-material";
import theme from "Theme";

export function ProfessorRequestCard() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogFullscreen, setDialogFullscreen] = useState(false);

    const handleOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleFullscreen = () => {
        setDialogFullscreen(!dialogFullscreen);
    };

    return (
        <>
            <StyledCard onClick={handleOpen}>
                <StyledCardContent>
                    <Typography variant="h4" color="iconButton">
                        Title: title
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Description: description
                    </Typography>
                </StyledCardContent>

                <StyledCardActions>

                </StyledCardActions>

            </StyledCard>
            <Dialog open={dialogOpen} onClose={handleClose} fullWidth maxWidth='xl' fullScreen={dialogFullscreen}
            PaperProps={{sx: {backgroundImage: 'linear-gradient(to bottom right, #70d1f4, #b0e7ff)'}}}>
                <DialogActions>
                    <IconButton onClick={handleFullscreen} sx={{color:  theme.palette.iconButton}}>
                        {dialogFullscreen ? <FullscreenExitOutlined /> : <FullscreenRounded />}
                    </IconButton>
                    <IconButton onClick={handleClose} sx={{color:  theme.palette.iconButton}}>
                        <CloseRounded />
                    </IconButton>
                </DialogActions>
                <DialogTitle>

                </DialogTitle>

                <DialogContent>

                </DialogContent>
            </Dialog>
        </>
    )
}   