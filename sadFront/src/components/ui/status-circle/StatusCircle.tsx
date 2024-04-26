import { statusColor } from "@lib";
import { Status } from "@models"
import { Box, Tooltip } from "@mui/material";

export interface StatusCircleProps {
    status: Status;
}

export function StatusCircle(props: StatusCircleProps) {
    return (
        <Tooltip title={props.status} placement="left">
            <Box sx={{ backgroundColor: statusColor(props.status), width: '1rem', height: '1rem', borderRadius: '50%' }}>

            </Box>
        </Tooltip>
    )
}