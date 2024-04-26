import { Status } from "@models";
import theme from "Theme";

export function statusColor(status: Status): string {
    switch (status) {
        case Status.Open:
            return theme.palette.status.open;
        case Status.Pending:
            return theme.palette.status.pending;
        case Status.Closed:
        default:
            return theme.palette.status.closed;
    }
}