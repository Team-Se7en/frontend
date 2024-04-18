import { Status } from "@models";
import { CardActions, CardActionsProps } from "@mui/material";


export interface StatusCardProps extends CardActionsProps {
    status: Status;
}

export function StatusCard(props: StatusCardProps) {
    let backgroundImage;
    switch (props.status) {
        case Status.pending:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, blue) !important';
            break;

        case Status.open:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, #50C878) !important';
            break;

        case Status.closed:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, #FF0000) !important';
            break;

        default:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, blue) !important';
            break;
    }

    return (
        <CardActions sx={{
            height: '2.25rem', '&:hover': {
                cursor: 'pointer',
            },
            backgroundImage: { backgroundImage }
        }}>

        </CardActions>
    )
}