import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { StyledCard, StyledCardContent } from "./StudentPositionCard-styles";

import { Link } from "react-router-dom";
import { StudentCardViewShortInfo } from "../../models/CardInfo";
import { useState } from "react";
import { StudentPositionCardDialog } from "../dialogs/student-position-card-dialog/StudentPositionCardDialog";
import clsx from "clsx";
import Styles from "../../Styles";
import { getPositionDuration } from "../../models/PositionDurations";
import {
  AccessTimeRounded,
  AttachMoneyRounded,
  CloseRounded,
  EventRounded,
  FullscreenExitOutlined,
  FullscreenRounded,
  SchoolRounded,
} from "@mui/icons-material";
import theme from "../../Theme";
import { formatTime } from "../../lib/format-time";
import { StyledTag } from "../professor-position-card/ProfessorPositionCard-styles";
import { Spacer } from "../ui/Spacer";
import { StatusCircle } from "../ui/status-circle/StatusCircle";
import { getFullName } from "../../lib/global-util";

export interface StudentPositionCardProps {
  model: StudentCardViewShortInfo;
}

export default function StudentPositionCard(props: StudentPositionCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogFullscreen, setDialogFullscreen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFullscreen = () => {
    setDialogFullscreen(!dialogFullscreen);
  };

  const globalStyles = Styles();

  return (
    <>
      <StyledCard className={clsx(globalStyles.flexColumn)}>
        <StyledCardContent className={clsx(globalStyles.flexColumn)}>
          <Box
            gap={2}
            className={clsx(globalStyles.flexRow, globalStyles.vCenter)}
          >
            <Avatar className="avatar" alt="Sauleh Etemadi" />

            <Tooltip title={props.model.title}>
              <Typography variant="h5" color="iconButton" noWrap>
                {props.model.title}
              </Typography>
            </Tooltip>
          </Box>

          <Box
            className={clsx(
              globalStyles.flexRow,
              globalStyles.justifyContentBetween,
              globalStyles.vCenter
            )}
            sx={{ mt: 1 }}
          >
            <Box
              gap={1}
              className={clsx(globalStyles.flexRow, globalStyles.vCenter)}
            >
              <Tooltip title={props.model.university_name}>
                <Box gap={2} className={globalStyles.flexRow}>
                  <Link to={"/"} target="_blank">
                    <Typography>
                      {getFullName(
                        props.model.professor.user.first_name,
                        props.model.professor.user.last_name
                      )}
                    </Typography>
                  </Link>

                  <Box gap={1} className={globalStyles.flexRow}>
                    <SchoolRounded sx={{ color: theme.palette.iconButton }} />
                    <Link
                      to={{
                        pathname:
                          "/universitypage/" + props.model.university_id,
                      }}
                      state={props.model.university_id}
                    >
                      <Typography
                        variant="body1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {props.model.university_name}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </Box>

          <Box
            className={clsx(
              globalStyles.flexRow,
              globalStyles.justifyContentBetween,
              globalStyles.vCenter
            )}
            sx={{ mt: 1 }}
          >
            <Box gap={1} className={globalStyles.flexRow}>
              <AccessTimeRounded sx={{ color: theme.palette.iconButton }} />
              <Typography variant="body1">
                {`${formatTime(
                  props.model.start_date.toString()
                )} - ${formatTime(props.model.end_date.toString())}`}
              </Typography>
            </Box>
            <Spacer />
            <Box gap={0.5} className={globalStyles.flexRow}>
              <EventRounded sx={{ color: theme.palette.iconButton }} />
              <Typography variant="body1">
                {`${formatTime(
                  props.model.position_start_date.toString()
                )} - ${formatTime(props.model.position_end_date.toString())}`}
              </Typography>
            </Box>

            <Box
              minWidth={"4.5rem"}
              display={"flex"}
              justifyContent={"flex-end"}
            >
              <StatusCircle status={props.model.status} />
            </Box>
          </Box>

          <Box
            className={clsx(
              globalStyles.flexRow,
              globalStyles.justifyContentBetween
            )}
            sx={{ mt: 1, mb: 0.5 }}
          >
            <Box className={globalStyles.flexRow}>
              <AttachMoneyRounded sx={{ color: theme.palette.iconButton }} />
              <Typography variant="body1">{props.model.fee}</Typography>
            </Box>

            <Typography variant="body1">
              Remaining: {props.model.remaining}
            </Typography>

            <Typography variant="body1" width={"12rem"}>
              Duration:{" "}
              {getPositionDuration(
                props.model.position_start_date,
                props.model.position_end_date
              ).toString()}
            </Typography>
          </Box>

          <Grid
            container
            spacing={1}
            sx={{ overflow: "hidden", height: "2.5rem", mt: "0 !important" }}
          >
            <Grid item>
              <Typography sx={{ pt: "4px" }}>Topics:</Typography>
            </Grid>

            {props.model.tags.map((tag) => (
              <Grid item key={tag}>
                <StyledTag label={tag}></StyledTag>
              </Grid>
            ))}

            <Spacer />
            <Grid sx={{ pt: "4px" }}>
              <Button
                onClick={handleDialogOpen}
                sx={{ color: "darkblue" }}
                className={clsx(globalStyles.justifySelfBottom)}
                variant="text"
                disableRipple
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </StyledCardContent>
      </StyledCard>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md"
        fullScreen={dialogFullscreen}
        PaperProps={{ sx: { backgroundImage: theme.palette.backgroundColor } }}
      >
        <DialogActions>
          <IconButton
            onClick={handleFullscreen}
            sx={{ color: theme.palette.iconButton }}
          >
            {dialogFullscreen ? (
              <FullscreenExitOutlined />
            ) : (
              <FullscreenRounded />
            )}
          </IconButton>
          <IconButton
            onClick={handleDialogClose}
            sx={{ color: theme.palette.iconButton }}
          >
            <CloseRounded />
          </IconButton>
        </DialogActions>
        <StudentPositionCardDialog model_id={props.model.id} />
      </Dialog>
    </>
  );
}
