import { Button, ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import { getStatusText, Status } from "../../models/Status";
import { professorAcceptRequest, professorRejectRequest } from "../../services/request.service";
import Styles from "../../Styles";
import clsx from "clsx";
import { toast } from "react-toastify";
import { RequestingStudent } from "../../models/Request";
import theme from "../../Theme";
import { getFullName } from "../../lib/global-util";
import { useState } from "react";
import { Link } from "react-router-dom";


export interface StudentCardProps {
    model: RequestingStudent;
    requestStatusChange?: (status: Status) => void;
}

export function StudentCard(props: StudentCardProps) {
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    const handleRequestAccept = async () => {
        setButtonLoading(true);
        await professorAcceptRequest(props.model.id).then(() => {
            props.model.status = Status.SP;
            props.requestStatusChange?.(Status.PA)
        }).catch(() => {
            toast.error("Problem has occured", {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).finally(() => {
            setButtonLoading(false);
        });
    };

    const handleRequestReject = async () => {
        setButtonLoading(true);
        await professorRejectRequest(props.model.id).then(() => {
            props.model.status = Status.PR;
            props.requestStatusChange?.(Status.PR)
        }).catch(() => {
            toast.error("Problem has occured", {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).finally(() => {
            setButtonLoading(false);
        });
    };

    const globalClasses = Styles();

    return (
        <Card variant="outlined">
            <CardContent className={clsx(globalClasses.flexColumn)}>
                <Link to={"/"} target="_blank">
                    <Typography variant="h5">
                        {getFullName(props.model.student.first_name, props.model.student.last_name)}
                    </Typography>
                </Link>
                <Typography variant="h6" mt={1}>
                    Cover Letter:
                </Typography>
                <Typography variant="body1">
                    {props.model.cover_letter}
                </Typography>
                {
                    !buttonLoading && (props.model.status == Status.PP || props.model.status == Status.SA) ?
                        (
                            <ButtonGroup variant="contained" sx={{ ml: 'auto', mt: '0.5rem' }}>
                                <Button color="error" onClick={handleRequestReject}>
                                    Reject
                                </Button>

                                <Button sx={{ backgroundColor: theme.palette.backgroundColor2 }} onClick={handleRequestAccept}>
                                    Accept
                                </Button>
                            </ButtonGroup>
                        ) :
                        (
                            <Button variant="contained" disabled sx={{ ml: 'auto', mt: '0.5rem' }}> {getStatusText(props.model.status)} </Button>
                        )
                }
            </CardContent>
        </Card>
    )
}