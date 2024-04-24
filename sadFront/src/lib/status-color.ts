import { Status } from "@models";
import theme from "Theme";

export function statusColor(status: Status): string {
    switch (status) {
        case Status.open:
            return theme.palette.status.open;
        case Status.pending:
            return theme.palette.status.pending;
        case Status.closed:
        default:
            return theme.palette.status.closed;
    }
}