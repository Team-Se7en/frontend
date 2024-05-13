import * as React from 'react';

import { Box, Card, CardContent, ThemeProvider, Typography, createTheme } from '@mui/material';

import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { blueGrey } from '@mui/material/colors';

// Create a theme instance
    const theme = createTheme({
    palette: {
    mode: 'light',
    primary: {
    main: '#0F1035'
    },
    background: {
    default: "#0F1035",
    paper: "#0F1035",
    },
    text: {
    primary: '#ffffff',
    secondary: '#b0bec5',
    },
    },

    typography: {
    fontFamily: 'Arial',
    h5: {
    fontWeight: 600,
    },
    body1: {
    fontSize: '1rem',
    width: '400px',
    },
    },
    });

    export default function StudentCard() {
    const student = {
    name: "Ali Alizadeh",
    university: "Iust",
    title: "Computer Science student",
    department:'Cs',
    gpa: 4,
    location: "Tehran, Iran"
    };

    return (
    <ThemeProvider theme={theme}>
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 2, borderRadius: 2 }}>
    <Card raised>
        <CardContent>
        <Typography variant="h5">
            {student.name}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <WorkIcon sx={{ mr: 1 }} /> {student.title}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <SchoolIcon sx={{ mr: 1 }} /> {student.university}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <AssuredWorkloadIcon sx={{ mr: 1 }} /> department: {student.department}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <DescriptionIcon sx={{ mr: 1 }} /> Gpa: {student.gpa}
        </Typography>
        
        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <LocationOnIcon sx={{ mr: 1 }} /> Location: {student.location}
        </Typography>
        
        </CardContent>
    </Card>
    </Box>
    </ThemeProvider>
    );
    }