import { Status } from "@models";
import { CardActions, CardActionsProps } from "@mui/material";


export interface StatusCardProps extends CardActionsProps {
    status: Status;
}

export function StatusCard(props: StatusCardProps) {
    let backgroundImage;
    switch (props.status) {
        case Status.Pending:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, blue) !important';
            break;

        case Status.Open:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, #50C878) !important';
            break;

        case Status.Closed:
            backgroundImage = 'linear-gradient(to bottom right, #14213d, #FF0000) !important';
            break;

        case Status.Accepted:
            
            break;

        case Status.Rejected:

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