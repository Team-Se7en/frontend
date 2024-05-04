import { Avatar, Box, CardActions, Chip, Grid, Icon, Stack, Typography } from "@mui/material";

import AnalyticsIcon from '@mui/icons-material/Analytics';
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

return (
    <Box sx={{ width: '100%', display: 'flex', padding: 1 ,}}>
        
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
            <Avatar sx={{ marginLeft: 2, width: 56, height: 56 }}></Avatar>

            <Typography sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', marginLeft: 2,}}>
                <Icon><InfoIcon /></Icon>
                <Box component="span" sx={{ ml: 0.5 }}>Name:</Box>
                {name}
            </Typography>


            <Typography sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row',marginLeft: 2,}}>
                <Icon><AnalyticsIcon /></Icon>
                <Box component="span" sx={{ ml: 0.5 }}>Status:</Box>
                {status}  
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
            <Typography sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row',marginLeft: 2,}}>
            <Icon><WorkIcon /></Icon>
            <Box component="span" sx={{ ml: 0.5 }}>Field:</Box>
            {field}
            </Typography>

            <Typography sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', marginLeft: 2,}}>
            <Icon><SchoolIcon /></Icon>
            <Box component="span" sx={{ ml: 0.5 }}>University:</Box>
            {university}
            </Typography>

            <Typography sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', marginLeft: 2, }}>
            <Icon><EventNoteIcon /></Icon>
            <Box component="span" sx={{ ml: 0.5 }}>Position:</Box>
            {positionTitle}
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
            <Box>
                <Typography>
                <Icon><DateRangeIcon /></Icon>
                <Box component="span" sx={{ ml: 0.5 }}>Request Date:</Box>
                {requestDate}
                </Typography>
            </Box>
            
            <Box>
                <Typography>
                <Icon><AttachMoneyIcon /></Icon>
                <Box component="span" sx={{ ml: 0.5 }}>Fee:</Box>
                {fee}
                </Typography>
            </Box>

            <Box>
                <Typography>
                <Icon><DateRangeIcon /></Icon>
                <Box component="span" sx={{ ml: 0.5 }}>Start Date:</Box>
                {startDate}
                </Typography>
            </Box>
            
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

            <Typography>
            <Icon><InfoIcon /></Icon>
            <Box component="span" sx={{ ml: 0.5 }}>Cover Letter:</Box>
                {coverLetter}
                </Typography>

            </Sheet>

        </CardContent>
        </Card>
    </Box>

    );
}
export default StudentCard;
