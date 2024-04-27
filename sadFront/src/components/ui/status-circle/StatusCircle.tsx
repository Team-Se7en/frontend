import { Tooltip, Box } from "@mui/material";
import { statusColor } from "../../../lib/status-color";
import { Status } from "../../../models/Status";


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