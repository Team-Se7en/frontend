import { Avatar, Box, Button, Divider, Grid, Icon, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CVStyles from "./CV-styles";
import clsx from "clsx";
import Styles from "../../../Styles";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export function ViewCV() {
    const CVdata = {
        name: "Bruce Wayne",
        email: "email@g.com",
        university: "university",
        birthdate: "birthdate",
        gender: "male",
        job: "teacher",
        aboutme: "aboutme",
        workExperiences: [
            {
                companyName: "company 1",
                companyWbsite: "company@gmail.com",
                startEndDate: "2011 to 2013",
                role: "administrator"
            }
        ],
        EducationalRecords: [
            {
                grade: "grade",
                field: "math",
                university: "university",
                date: "2011",
                GPA: "17.2"
            }
        ],
        technicalSkills: [
            "Computer Science",
            "BATMAN"
        ],
        softSkills: [
            "happy",
            "hardwork"
        ],
        languages: [
            "English"
        ],
        projects: [
            {
                title: "title 1",
                linkAdress: "lnk1.com"
            }
        ]
    }
    const globalClasses = Styles();
    const cvStyles = CVStyles();

    const navigate = useNavigate();
    const navigateToEditCV = () => {
        navigate("/cv/edit");
    }
    return (
        <Box className={clsx(cvStyles.background)}>
            <Grid container sx={{ width: '75%', bgcolor: 'white', height: 'fit-content' }}>

                <Grid item container rowSpacing={2} sx={{ width: '35%', bgcolor: 'rgb(84, 71, 179)', padding: '1rem', justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <AccountBoxIcon sx={{ color: 'white', height: '12rem', width: '12rem', borderRadius: '25%' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="body1" sx={{ fontFamily: 'sans-serif' }}>Email: {CVdata.email}</Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Helvetica' }}>University: {CVdata.university}</Typography>
                            <Typography variant="body1">Birthdate: {CVdata.birthdate}</Typography>
                            <Typography variant="body1">Gender: {CVdata.gender}</Typography>
                            <Typography variant="body1">Job: {CVdata.job}</Typography>
                            <Typography variant="body1">About Me: {CVdata.aboutme}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="h5" fontWeight={'600'}>
                                Technical Skills</Typography>
                            <List>
                                {CVdata.technicalSkills.map((skill, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={skill} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="h5" fontWeight={'600'}>Soft Skills</Typography>
                            <List>
                                {CVdata.softSkills.map((skill, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={skill} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="h5" fontWeight={'600'}>Languages</Typography>
                            <List>
                                {CVdata.languages.map((language, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={language} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    <Box sx={{ padding: '2rem' }}>
                        <Button sx={{ height: '3rem', width: '7rem' }}
                            variant="contained"
                            color="primary"
                            onClick={navigateToEditCV}>
                            Edit CV
                        </Button>
                    </Box>
                </Grid>
                <Grid item container spacing={2} sx={{ width: '60%', height: 'fit-content', marginInlineStart: '4%' }}>
                    <Grid item xs={12} sx={{ margin: '4rem 0 1rem' }}>
                        <Typography variant="h2" fontWeight={'bold'} color={'rgb(84, 71, 179)'} sx={{ fontFamily: 'Arial' }}>{CVdata.name}</Typography>
                        <Divider sx={{ marginTop: '3rem' }}></Divider>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '1rem' }}>
                        <Typography variant="h5" fontWeight={'600'}> <LabelImportantIcon /> Work Experiences</Typography>
                        <List>
                            {CVdata.workExperiences.map((experience, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={experience.companyName}
                                        secondary={
                                            <>
                                                <Typography variant="body2">Role: {experience.role}</Typography>
                                                <Typography variant="body2">Website: {experience.companyWbsite}</Typography>
                                                <Typography variant="body2">Start-End Date: {experience.startEndDate}</Typography>
                                            </>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '1rem' }}>
                        <Typography variant="h5" fontWeight={'600'}> <LabelImportantIcon /> Educational Records</Typography>
                        <List>
                            {CVdata.EducationalRecords.map((record, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={`${record.grade} in ${record.field}`}
                                        secondary={
                                            <>
                                                <Typography variant="body2">University: {record.university}</Typography>
                                                <Typography variant="body2">Date: {record.date}</Typography>
                                                <Typography variant="body2">GPA: {record.GPA}</Typography>
                                            </>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '1rem' }}>
                        <Typography variant="h5" fontWeight={'600'}><LabelImportantIcon /> Projects</Typography>
                        <List>
                            {CVdata.projects.map((project, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={project.title}
                                        secondary={`Link: ${project.linkAdress}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}