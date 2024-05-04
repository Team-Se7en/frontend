import * as React from 'react';

import { Avatar, Box, CardActions, Chip, Grid, Icon, Stack, Typography } from "@mui/material";

import AspectRatio from '@mui/joy/AspectRatio';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import InfoIcon from '@mui/icons-material/Info';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SchoolIcon from '@mui/icons-material/School';
import Sheet from '@mui/joy/Sheet';
import TextField from '@material-ui/core/TextField';
import WorkIcon from '@mui/icons-material/Work';

interface StudentCardProps {
    name: string;
    university: string;
    status: string;
    field: string;
    positionTitle: string;
    requestDate: string;
    fee: string;
    startDate: string;
    coverLetter: string;
}


const StudentCard: React.FC<StudentCardProps> = ({
    name,
    university,
    status,
    field,
    positionTitle,
    requestDate,
    fee,
    startDate,
    coverLetter,

}) => {
    const getStatusIcon = (status:any) => {
        switch (status) {
            case 'Accepted':
                return <CheckCircleIcon color="success" />;
            case 'Rejected':
                return <RemoveCircleIcon color="disabled" />;
            case 'Pending':
                return <HourglassEmptyIcon color="action" />;
            default:
                return <InfoIcon />;
        }
    };
return (
    <Box sx={{ width: '100%', display: 'flex', padding: 2 }}>
        
        <Card
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap',
            overflow: 'auto',
        }}
        >

        <Avatar sx={{ marginLeft: 2, width: 56, height: 56 }}></Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 2, flexGrow: 1 }}>

            <Typography sx={{ display: 'flex', flexDirection: 'row', marginLeft: 2, flexGrow: 1 }}>
            <Icon><InfoIcon /></Icon>
            Name:{name}
            </Typography>

            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',marginLeft: 2, flexGrow: 1 }}>
            {getStatusIcon(status)}
            Status: {status}                        
            </Typography>
            
            </Box>

            <CardContent>
                
            <Sheet
            sx={{
                backgroundColor:'#DCF2F1',
                borderRadius: 'sm',
                p: 2,
                my: 2,
                display: 'flex',
                gap: 25,
            }}
            >
            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',marginLeft: 2, flexGrow: 1 }}>
            <Icon><WorkIcon /></Icon>

            Field:{field}
            </Typography>

            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',marginLeft: 2, flexGrow: 1 }}>
            <Icon><SchoolIcon /></Icon>
            University:{university}
            </Typography>

            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',marginLeft: 2, flexGrow: 1 }}>
            <Icon><EventNoteIcon /></Icon>
            Position: {positionTitle}
            </Typography>
            
            
            </Sheet>
            
            <Sheet
            sx={{
                backgroundColor:'#DCF2F1',
                borderRadius: 'sm',
                p: 2,
                my: 2,
                display: 'flex',
                gap: 25,
            }}
            >
            <div>
                <Typography>
                <Icon><DateRangeIcon /></Icon>
                RequestDate:
                </Typography>
                <Typography fontWeight="lg">{requestDate}</Typography>
            </div>
            <div>
                <Typography>
                <Icon><AttachMoneyIcon /></Icon>
                Fee:
                </Typography>
                <Typography>{fee}</Typography>
            </div>

            <div>
                <Typography>
                <Icon><DateRangeIcon /></Icon>
                StartDate:
                </Typography>
                <Typography>{startDate}</Typography>
            </div>
            </Sheet>

            <Typography>
            <Icon><InfoIcon /></Icon>
                Cover Letter:
                {coverLetter}
                </Typography>
                <Typography>{fee}</Typography>

        </CardContent>
        </Card>
    </Box>


    );
}
export default StudentCard;
