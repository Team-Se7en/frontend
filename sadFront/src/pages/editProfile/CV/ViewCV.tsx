import { Avatar, Box, Button, Divider, Grid, Icon, List, ListItem, ListItemText, Paper, Typography, colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CVStyles from "./CV-styles";
import clsx from "clsx";
import Styles from "../../../Styles";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import client from "../../../Http/axios";
import { BasicInfo, Education, HardSkill, HardSkills, Project, WorkExperience } from "../../../models/CVtypes";
import { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const softSkillsItem = [
        'Communication', 'Teamwork', 'ProblemSolving',
    ]

    let [cvDataBasic, setCVDataBasic] = useState<BasicInfo>({ soft_skills: [] });
    let [educationList, setEducationList] = useState<Education[]>([]);
    let [workXPList, setWorkXPList] = useState<WorkExperience[]>([]);
    let [projectList, setProjectList] = useState<Project[]>([]);
    let [hardSkillList, setHardSkillList] = useState<HardSkill[]>([]);
    let [currentUserInfo, setcurrentUserInfo] = useState<any>({});


    const globalClasses = Styles();
    const cvStyles = CVStyles();

    const navigate = useNavigate();
    const navigateToEditCV = () => {
        navigate("/cv/edit");
    }
    const navigateToProfile = async () => {
        const currentUser: any = await client.get("/eduportal/userinfo/");
        // console.log(currentUser)
        if (currentUser.data.user_type == "Student") {
            navigate("/student/editProfile");
        } else {
            navigate("/professor/editProfile");
        }
    }

    useEffect(() => {
        getInfo()
    }, [])

    async function getInfo() {
        try {
            const currentUser = await client.get("/eduportal/userinfo/");
            // console.log(currentUser)
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            setcurrentUserInfo(currentUser.data)
            // console.log(currentUserInfo)

            const basicInfoApiUrl = `/eduportal/${userType}/${UserPK}/CV/`;
            const basicInfoResponse = await client.get(basicInfoApiUrl);
            cvDataBasic.title = basicInfoResponse.data.title
            cvDataBasic.birth_date = basicInfoResponse.data.birth_date
            cvDataBasic.gender = basicInfoResponse.data.gender
            cvDataBasic.employment_status = basicInfoResponse.data.employment_status
            cvDataBasic.soft_skills = basicInfoResponse.data.soft_skills
            cvDataBasic.about = basicInfoResponse.data.about
            // setSelectedSkills(basicInfoResponse.data.soft_skills)
            setCVDataBasic({
                ...cvDataBasic,
            });
            // console.log(cvDataBasic)

            const educationApiUrl = `/eduportal/${userType}/${UserPK}/CV/education`;
            const educationsResponse = await client.get(educationApiUrl);
            educationList = educationsResponse.data
            setEducationList(educationsResponse.data)
            // console.log(educationList)

            const hardSkillsApiUrl = `/eduportal/${userType}/${UserPK}/CV/hard-skills`;
            const hardSkillsResponse = await client.get(hardSkillsApiUrl);
            hardSkillList = hardSkillsResponse.data
            setHardSkillList(hardSkillsResponse.data)
            // console.log(hardSkillList)

            const projectsApiUrl = `/eduportal/${userType}/${UserPK}/CV/projects`;
            const projectsResponse = await client.get(projectsApiUrl);
            projectList = projectsResponse.data
            setProjectList(projectsResponse.data)
            // console.log(projectList)

            const workXPsApiUrl = `/eduportal/${userType}/${UserPK}/CV/work-xps`;
            const workXPsResponse = await client.get(workXPsApiUrl);
            workXPList = workXPsResponse.data
            setWorkXPList(workXPsResponse.data)
            // console.log(workXPList)


        } catch (error) {
            console.error('Error:', error);
        }
    }

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [showDownloadButton, setShowDownloadButton] = useState(true);

    useEffect(() => {
        if (!showDownloadButton) {
            toPDF();
        }
        setShowDownloadButton(true)
    }, [showDownloadButton]);

    const showEmploymentStatus = (id: any) => {
        switch (id) {
            case 1:
                return "Employed"
                break;
            case 2:
                return "Unemployed"
                break;
            case 3:
                return "Student"
                break;
            case 4:
                return "Actively Seeking Work"
                break;
            case 5:
                return "Open To Work"
                break;
            case 6:
                return "Not Interested"
                break;
            default:
                break;
        }
    }
    
    return (
        <Box className={clsx(cvStyles.background)}>
            <Grid ref={targetRef} container sx={{ width: '75%', bgcolor: 'white', height: 'fit-content' }}>

                <Grid item container rowSpacing={2} sx={{ width: '35%', bgcolor: '#2b364a', padding: '1rem', justifyContent: 'center' }}>

                    <Grid item xs={12} sx={{ display: "flex" }}>
                        {showDownloadButton && <Box sx={{ paddingTop: '1rem' }}>
                            <Button
                                variant="text"
                                color="primary"
                                onClick={navigateToProfile}>
                                <ArrowBackIcon sx={{ color: 'white' }} />
                            </Button>
                        </Box>}
                        <AccountBoxIcon sx={{ color: 'white', height: '12rem', width: '12rem', borderRadius: '25%' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="body1" sx={{ fontFamily: 'sans-serif' }}>Email: {currentUserInfo.email}</Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Helvetica' }}>University: {CVdata.university}</Typography>
                            <Typography variant="body1">Birthdate: {cvDataBasic.birth_date}</Typography>
                            <Typography variant="body1">Gender: {cvDataBasic.gender ? 'male' : 'female'}</Typography>
                            <Typography variant="body1">Job: {showEmploymentStatus(cvDataBasic.employment_status)}</Typography>
                            <Typography variant="body1">About Me: {cvDataBasic.about}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="h5" fontWeight={'600'}>
                                Technical Skills</Typography>
                            <List>
                                {hardSkillList.map((skill, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={HardSkills[skill.technology! - 1]} />
                                        <Typography>{skill.skill_level}%</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ padding: '1rem' }} elevation={3}>
                            <Typography variant="h5" fontWeight={'600'}>Soft Skills</Typography>
                            <List>
                                {cvDataBasic.soft_skills!.map((skill, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={softSkillsItem[skill - 1]} />
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

                    {showDownloadButton && <Box sx={{ padding: '2rem' }}>
                        <Button sx={{ margin: '1rem' }}
                            variant="contained"
                            color="primary"
                            onClick={navigateToEditCV}>
                            Edit CV
                        </Button>
                        <Button sx={{ margin: '1rem' }}
                            variant="contained"
                            color="primary"
                            onClick={() => { setShowDownloadButton(false) }}>
                            Download CV
                        </Button>
                    </Box>}
                </Grid>
                <Grid item container spacing={2} sx={{ width: '60%', height: 'fit-content', marginInlineStart: '4%' }}>
                    <Grid item xs={12} sx={{ margin: '4rem 0 1rem' }}>
                        <Typography variant="h2" fontWeight={'bold'} color={'#2b364a'} sx={{ fontFamily: 'Arial' }}>{currentUserInfo.first_name + ' ' + currentUserInfo.last_name}</Typography>
                        <Divider sx={{ marginTop: '3rem' }}></Divider>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '1rem' }}>
                        <Typography variant="h5" fontWeight={'600'}> <LabelImportantIcon /> Work Experiences</Typography>
                        <List>
                            {workXPList.map((experience, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={experience.company_name}
                                        secondary={
                                            <>
                                                <Typography variant="body2">Role: {experience.job_title}</Typography>
                                                <Typography variant="body2">Website: {experience.company_website}</Typography>
                                                <Typography variant="body2">Start-End Date: {experience.start_date + ' to ' + experience.end_date}</Typography>
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
                            {educationList.map((record, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={`${record.degree} in ${record.field_of_study}`}
                                        secondary={
                                            <>
                                                <Typography variant="body2">University: {record.institute}</Typography>
                                                <Typography variant="body2">Date: {record.start_date + ' to ' + record.end_date}</Typography>
                                                <Typography variant="body2">GPA: {record.grade}</Typography>
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
                            {projectList.map((project, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={project.title}
                                        secondary={<>
                                            <Typography variant="body2">Link: {project.link}</Typography>
                                            <Typography variant="body2">Description: {project.description}</Typography>
                                        </>}
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