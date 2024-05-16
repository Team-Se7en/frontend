import { Box, Card, CardContent, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import client from '../../Http/axios';

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
    
    interface Student {
        "student_name": string,
        "major": string,
        "university": {
            "name"?: string,
            "country"?: string,
            "city"?: string,
        },
        "gpa": number,
}

    const [topStudents, setTopStudents] = useState<Student[]>([]);


    const getTopStudent = async () => {
        try {
            const result = await client.get(`/eduportal/top_students/`);
            const values:Student[] = Object.keys(result.data).map(function(key){
                return result.data[key];
            });
            setTopStudents([...values]);
            console.log(topStudents);
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    useEffect(() => {

        getTopStudent();

    }, []);


    return (
    <ThemeProvider theme={theme}>
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 2, borderRadius: 2 }}>
    {topStudents.map((stud)=>(
        <Card raised>
        <CardContent>
        <Typography variant="h5">
            {stud.student_name}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <WorkIcon sx={{ mr: 1 }} /> {stud.major}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <SchoolIcon sx={{ mr: 1 }} /> {stud.university.name}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <AssuredWorkloadIcon sx={{ mr: 1 }} /> department: {stud.major}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <DescriptionIcon sx={{ mr: 1 }} /> Gpa: {stud.gpa}
        </Typography>
        
        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <LocationOnIcon sx={{ mr: 1 }} /> Location: {stud.university.country}
        </Typography>
        
        </CardContent>
    </Card>

    ))}
    
        </Box>
    </ThemeProvider>
    );
}