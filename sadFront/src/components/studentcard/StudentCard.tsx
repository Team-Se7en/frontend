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

    export default function StudentCard({page}: any) {

    interface University {
            name?: string,
            country?: string,
            city?: string,
        }
    
    interface Student {
        student_name: string,
        major: string,
        university?: University,
        gpa: number,
}

    const [topStudents, setTopStudents] = useState<Student[]>([]);


    const getTopStudent = async () => {
        try {
            const result = await client.get(`/eduportal/top_students/`,{ params: {
                    "page": page,
                } });
            const values:Student[] = Object.keys(result.data.results).map(function(key){
                return result.data.results[key];
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

        }, [page]);
    return (
    <ThemeProvider theme={theme}>
    <Box
    height={"30rem"}
    my={4}
    display="flex"
    flexDirection={"column"}
    alignItems={"flex-end"}
    gap="1rem"
    p={2}
    padding={"0rem"}
    overflow={"auto"}
    >
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 1, p: 1, borderRadius: 2,width:'100%', pb: 7 }}>
    {topStudents.map((stud)=>(
        <Card raised sx={{ mb: 2 }}>
        <CardContent>
        <Typography variant="h5">
            {stud.student_name}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <WorkIcon sx={{ mr: 1 }} /> {stud.major}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <SchoolIcon sx={{ mr: 1 }} /> {stud.university?.name || 'N/A'}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <AssuredWorkloadIcon sx={{ mr: 1 }} /> department: {stud.major}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <DescriptionIcon sx={{ mr: 1 }} /> Gpa: {stud.gpa}
        </Typography>
        
        <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'secondary' }}>
            <LocationOnIcon sx={{ mr: 1 }} /> Location: {stud.university?.city || 'N/A'}
        </Typography>
        
        </CardContent>
    </Card>

    ))}
    
        </Box>

    </Box>

    </ThemeProvider>
    );
}