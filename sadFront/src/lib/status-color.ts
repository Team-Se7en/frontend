import { Status } from "../models/Status";
import theme from "../Theme";

export function statusColor(status: Status): string {
    switch (status) {
        case Status.Open:
            return theme.palette.status.open;
        case Status.Pending:
            return theme.palette.status.pending;
        case Status.Closed:
            return theme.palette.status.closed;
        case Status.Accepted:
            return theme.palette.status.accepted;
        case Status.NotActive:
            return theme.palette.status.notActive;
        case Status.Rejected:
            return theme.palette.status.rejected;
        default:
            return 'black !important';
    }
}