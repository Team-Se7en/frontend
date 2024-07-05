import { Box, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, MenuItem, Select } from "@mui/material";
import { BasicInfo, Skills, Education, WorkExperience, Project, HardSkill, HardSkills } from "../../../models/CVtypes";
import React, { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Container,
    Grid,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import client from "../../../Http/axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Delete } from "@mui/icons-material";
import CVStyles from "./CV-styles";
import Styles from "../../../Styles";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function EditCV() {
    let currentUser: any

    let hardSkills: HardSkill[] = []

    let [cvDataBasic, setCVDataBasic] = useState<BasicInfo>({
    });

    useEffect(() => {
        getInfo()
    }, [])

    async function getInfo() {
        try {
            currentUser = await client.get("/eduportal/userinfo/");
            // console.log(currentUser.data)
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const basicInfoApiUrl = `/eduportal/${userType}/${UserPK}/CV/`;
            const basicInfoResponse = await client.get(basicInfoApiUrl);
            // console.log(basicInfoResponse)
            cvDataBasic.title = basicInfoResponse.data.title
            cvDataBasic.birth_date = basicInfoResponse.data.birth_date
            cvDataBasic.gender = basicInfoResponse.data.gender
            cvDataBasic.employment_status = basicInfoResponse.data.employment_status
            cvDataBasic.soft_skills = basicInfoResponse.data.soft_skills
            cvDataBasic.about = basicInfoResponse.data.about
            setSelectedSkills(basicInfoResponse.data.soft_skills)
            setCVDataBasic({
                ...cvDataBasic,
            });

            const educationApiUrl = `/eduportal/${userType}/${UserPK}/CV/education`;
            const educationsResponse = await client.get(educationApiUrl);
            educationList = educationsResponse.data
            setEducationList(educationsResponse.data)
            // console.log(educations)

            const hardSkillsApiUrl = `/eduportal/${userType}/${UserPK}/CV/hard-skills`;
            const hardSkillsResponse = await client.get(hardSkillsApiUrl);
            hardSkillList = hardSkillsResponse.data
            setHardSkillList(hardSkillsResponse.data)
            // console.log(hardSkills)

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

    //---------------------------------- BASIC INFO ----------------------------------
    const handleBasicChange = (event: any) => {
        const { name, value } = event.target;
        setCVDataBasic({
            ...cvDataBasic,
            [name]: value,
        });
    };

    const birthdayChange = (newValue: any) => {
        // console.log(dayjs(newValue.$d).format('YYYY-MM-DD'))
        cvDataBasic.birth_date = dayjs(newValue.$d).format('YYYY-MM-DD')
    }

    const handleSave = async () => {
        // console.log(cvDataBasic)
        try {
            const currentUser = await client.get("/eduportal/userinfo/");
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const apiURL = `/eduportal/${userType}/${UserPK}/CV/`
            const respone = client.patch(apiURL,
                {
                    title: cvDataBasic.title,
                    birth_date: cvDataBasic.birth_date,
                    gender: cvDataBasic.gender,
                    employment_status: cvDataBasic.employment_status,
                    about: cvDataBasic.about,
                    soft_skills: selectedSkills
                }
            )
            // console.log(respone)
        } catch (error) {
            console.error('Error:', error);
        }
    };


    let [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const handleSkillClick = (skill: number) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };
    //---------------------------------- EDUCATION ----------------------------------

    let [educationList, setEducationList] = useState<Education[]>([]);
    const [open, setOpen] = useState(false);
    const [education, setEducation] = useState<Education>({
        institute: '',
        degree: '',
        field_of_study: '',
        start_date: "2024-05-17",
        end_date: "2024-05-17",
        grade: 0,
    });

    const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleAddEducation = async () => {
        if (education.institute && education.degree) {

            try {
                currentUser = await client.get("/eduportal/userinfo/");
                const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
                const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
                const API_URL = `/eduportal/${userType}/${UserPK}/CV/education/`
                const response = client.post(API_URL, education);
                // console.log(response)

            } catch (error) {
                console.error('Error:', error);
            }
            setEducationList([...educationList, education]);

            setEducation({
                institute: '',
                degree: '',
                field_of_study: '',
                start_date: "2024-05-17",
                end_date: "2024-05-17",
                grade: 0,
            });
            setOpen(false);
        } else {
            alert('Please fill the fields');
        }
    };

    const handleRemoveEducation = async (index: number) => {
        try {
            currentUser = await client.get("/eduportal/userinfo/");
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const API_URL = `/eduportal/${userType}/${UserPK}/CV/education/${educationList[index].id}/`
            const response = client.delete(API_URL);
            // console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
        const updatedList = [...educationList];
        updatedList.splice(index, 1);
        setEducationList(updatedList);
    };
    //---------------------------------- WORK XP ----------------------------------
    let [workXPList, setWorkXPList] = useState<WorkExperience[]>([]);
    const [openWorkXP, setOpenWorkXP] = useState(false);
    const [workXP, setWorkXP] = useState<WorkExperience>({
        company_name: '',
        company_website: '',
        start_date: "2024-05-17",
        end_date: "2024-05-17",
        job_title: '',
    });

    const handleWorkXPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWorkXP({ ...workXP, [name]: value });
    };

    const handleAddWorkXP = async () => {
        if (workXP.company_name && workXP.company_website) {

            try {
                currentUser = await client.get("/eduportal/userinfo/");
                const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
                const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
                const API_URL = `/eduportal/${userType}/${UserPK}/CV/work-xps/`
                const response = client.post(API_URL, workXP);
                // console.log(response)

            } catch (error) {
                console.error('Error:', error);
            }
            setWorkXPList([...workXPList, workXP]);

            setWorkXP({
                company_name: '',
                company_website: '',
                start_date: "2024-05-17",
                end_date: "2024-05-17",
                job_title: '',
            });
            setOpenWorkXP(false);
        } else {
            alert('Please fill the fields');
        }
    };

    const handleRemoveWorkXP = async (index: number) => {
        try {
            currentUser = await client.get("/eduportal/userinfo/");
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const API_URL = `/eduportal/${userType}/${UserPK}/CV/work-xps/${workXPList[index].id}/`
            const response = client.delete(API_URL);
            // console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
        const updatedList = [...workXPList];
        updatedList.splice(index, 1);
        setWorkXPList(updatedList);
    };

    //---------------------------------- PROJECT ----------------------------------
    let [projectList, setProjectList] = useState<Project[]>([]);
    const [openProject, setOpenProject] = useState(false);
    const [project, setProject] = useState<Project>({
        title: '',
        link: '',
        description: '',
    });

    const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    const handleAddProject = async () => {
        if (project.title && project.description) {

            try {
                currentUser = await client.get("/eduportal/userinfo/");
                const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
                const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
                const API_URL = `/eduportal/${userType}/${UserPK}/CV/projects/`
                const response = client.post(API_URL, project);
                // console.log(response)

            } catch (error) {
                console.error('Error:', error);
            }
            setProjectList([...projectList, project]);

            setProject({
                title: '',
                link: '',
                description: '',
            });
            setOpenProject(false);
        } else {
            alert('Please fill the fields');
        }
    };

    const handleRemoveProject = async (index: number) => {
        try {
            currentUser = await client.get("/eduportal/userinfo/");
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const API_URL = `/eduportal/${userType}/${UserPK}/CV/projects/${projectList[index].id}/`
            const response = client.delete(API_URL);
            // console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
        const updatedList = [...projectList];
        updatedList.splice(index, 1);
        setProjectList(updatedList);
    };


    //---------------------------------- PROJECT ----------------------------------

    let [hardSkillList, setHardSkillList] = useState<HardSkill[]>([]);
    const [openHardSkill, setOpenHardSkill] = useState(false);
    const [hardSkill, setHardSkill] = useState<HardSkill>({
        technology: 1,
        skill_level: 100,
        experience_time: 1,
    });

    const handleHardSkillChange = (e: any) => {
        const { name, value } = e.target;
        setHardSkill({ ...hardSkill, [name]: value });
    };

    const handleAddHardSkill = async () => {
        if (hardSkill.technology && hardSkill.skill_level) {

            try {
                currentUser = await client.get("/eduportal/userinfo/");
                const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
                const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
                const API_URL = `/eduportal/${userType}/${UserPK}/CV/hard-skills/`
                const response = client.post(API_URL, hardSkill);
                // console.log(response)

            } catch (error) {
                console.error('Error:', error);
            }
            setHardSkillList([...hardSkillList, hardSkill]);

            setHardSkill({
                technology: 1,
                skill_level: 100,
                experience_time: 1,
            });
            setOpenHardSkill(false);
        } else {
            alert('Please fill the fields');
        }
    };

    const handleRemoveHardSkill = async (index: number) => {
        try {
            currentUser = await client.get("/eduportal/userinfo/");
            const UserPK = currentUser.data.user_type == "Student" ? currentUser.data.student.id : currentUser.data.professor.id;
            const userType = currentUser.data.user_type == "Student" ? 'students' : 'professors'
            const API_URL = `/eduportal/${userType}/${UserPK}/CV/hard-skills/${hardSkillList[index].id}/`
            const response = client.delete(API_URL);
            // console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
        const updatedList = [...hardSkillList];
        updatedList.splice(index, 1);
        setHardSkillList(updatedList);
    };

    const globalClasses = Styles();
    const cvStyles = CVStyles();

    const navigate = useNavigate();
    const navigateToProfile = async () => {
        const currentUser: any = await client.get("/eduportal/userinfo/");
        // console.log(currentUser)
        if (currentUser.data.user_type == "Student") {
            navigate("/student/editProfile");
        } else {
            navigate("/professor/editProfile");
        }
    }

    return (
        <Box className={clsx(cvStyles.background)} >
            <Container maxWidth="md" className={clsx(cvStyles.editBackground)} >
                <Button
                    variant="text"
                    color="primary"
                    onClick={navigateToProfile}
                    sx={{ margin: '0 0 1rem 1rem' }}>
                    <ArrowBackIcon sx={{ color: 'gray' }} />
                </Button>
                <Typography variant="h2" fontWeight={'bold'} gutterBottom>
                    Edit CV
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            inputProps={{ maxLength: 75 }}
                            value={cvDataBasic.title || ''}
                            onChange={handleBasicChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Birthdate"
                                name="birth_date"
                                value={dayjs(cvDataBasic.birth_date)}
                                onChange={(newValue) => birthdayChange(newValue)}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ marginBottom: '0.5rem' }}>
                            Gender:
                        </Typography>
                        <Select
                            fullWidth
                            // label="Gender"
                            name="gender"
                            value={cvDataBasic.gender || ''}
                            onChange={handleBasicChange}
                        >
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ marginBottom: '0.5rem' }}>
                            Employment Status:
                        </Typography>
                        <Select
                            fullWidth
                            // label="Employment Status"
                            name="employment_status"
                            value={cvDataBasic.employment_status || ''}
                            onChange={handleBasicChange}
                        >
                            <MenuItem value={1}>Employed</MenuItem>
                            <MenuItem value={2}>Unemployed</MenuItem>
                            <MenuItem value={3}>Student</MenuItem>
                            <MenuItem value={4}>Actively Seeking Work</MenuItem>
                            <MenuItem value={5}>Open To Work</MenuItem>
                            <MenuItem value={6}>Not Interested</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            minRows={4}
                            maxRows={8}
                            inputProps={{ maxLength: 75 }}
                            label="About Me"
                            name="about"
                            value={cvDataBasic.about || ''}
                            onChange={handleBasicChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                {Skills.map(skill => (
                                    <Button
                                        key={skill.id}
                                        onClick={() => handleSkillClick(skill.id)}
                                        variant={selectedSkills.includes(skill.id) ? 'contained' : 'outlined'}
                                        color="primary"
                                        style={{ margin: '5px' }}
                                    >
                                        Skill {skill.name}
                                    </Button>
                                ))}
                            </Box>
                        </div>
                    </Grid>
                    {/* Work Experiences */}


                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{ padding: '2rem' }}></Divider>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 1rem 0 1rem' }}>
                    <h2>Education List</h2>
                    <Button variant="contained" sx={{ height: '2.5rem' }} onClick={() => setOpen(true)}>Add Education</Button>
                </Box>
                <List>
                    {educationList.map((education, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`${education.degree} in ${education.field_of_study}`}
                                secondary={
                                    <>
                                        <Typography variant="body2">University: {education.institute}</Typography>
                                        <Typography variant="body2">Date: {education.start_date + ' to ' + education.end_date}</Typography>
                                        <Typography variant="body2">GPA: {education.grade}</Typography>
                                    </>
                                }
                            />                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveEducation(index)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Add Education</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Institute"
                                        name="institute"
                                        value={education.institute}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleEducationChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Degree"
                                        name="degree"
                                        value={education.degree}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleEducationChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Grade"
                                        name="grade"
                                        value={education.grade}
                                        inputProps={{ min: 0, max: 100 }}
                                        onChange={handleEducationChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Field of study"
                                        name="field_of_study"
                                        value={education.field_of_study}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleEducationChange}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <Button onClick={handleAddEducation}>Add</Button>
                </Dialog>

                <Divider sx={{ padding: '2rem' }}></Divider>

                {/* Dialog for adding/editing work experience */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 1rem 0 1rem' }}>
                    <h2>WORK XP List</h2>
                    <Button variant="contained" sx={{ height: '2.5rem' }} onClick={() => setOpenWorkXP(true)}>Add Work XP</Button>
                </Box>
                <List>
                    {workXPList.map((workXP, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={workXP.company_name}
                                secondary={
                                    <>
                                        <Typography variant="body2">Role: {workXP.job_title}</Typography>
                                        <Typography variant="body2">Website: {workXP.company_website}</Typography>
                                        <Typography variant="body2">Start-End Date: {workXP.start_date + ' to ' + workXP.end_date}</Typography>
                                    </>
                                }
                            />                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveWorkXP(index)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Dialog open={openWorkXP} onClose={() => setOpenWorkXP(false)}>
                    <DialogTitle>Add Work XP</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="company name"
                                        name="company_name"
                                        value={workXP.company_name}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleWorkXPChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="company website"
                                        name="company_website"
                                        value={workXP.company_website}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleWorkXPChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="job title"
                                        name="job_title"
                                        value={workXP.job_title}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleWorkXPChange}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <Button onClick={handleAddWorkXP}>Add</Button>
                </Dialog>

                <Divider sx={{ padding: '2rem' }}></Divider>

                {/* Dialog for adding/editing Project */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 1rem 0 1rem' }}>
                    <h2>Project List</h2>
                    <Button variant="contained" sx={{ height: '2.5rem' }} onClick={() => setOpenProject(true)}>Add Project</Button>
                </Box>
                <List>
                    {projectList.map((project, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={project.title}
                                secondary={<>
                                    <Typography variant="body2">Link: {project.link}</Typography>
                                    <Typography variant="body2">Description: {project.description}</Typography>
                                </>}
                            />                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveProject(index)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Dialog open={openProject} onClose={() => setOpenProject(false)}>
                    <DialogTitle>Add Project</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Title"
                                        name="title"
                                        value={project.title}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleProjectChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Description"
                                        name="description"
                                        value={project.description}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleProjectChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Link"
                                        name="link"
                                        value={project.link}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleProjectChange}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <Button onClick={handleAddProject}>Add</Button>
                </Dialog>

                <Divider sx={{ padding: '2rem' }}></Divider>

                {/* Dialog for adding/editing Hard Skills*/}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 1rem 0 1rem' }}>
                    <h2>Hard Skills List</h2>
                    <Button variant="contained" sx={{ height: '2.5rem' }} onClick={() => setOpenHardSkill(true)}>Add Hard Skills</Button>
                </Box>
                <List>
                    {hardSkillList.map((hardskill, index) => (
                        <ListItem key={index}>
                            <ListItem key={index}>
                                <ListItemText primary={HardSkills[hardskill.technology! - 1]} />
                                <Typography>{hardskill.skill_level}%</Typography>
                            </ListItem>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveHardSkill(index)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Dialog open={openHardSkill} onClose={() => setOpenHardSkill(false)}>
                    <DialogTitle>Add Hard Skills</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Select
                                        value={hardSkill.technology}
                                        label="Technology"
                                        name="technology"
                                        onChange={handleHardSkillChange}
                                    >
                                        <MenuItem value={1}>Python</MenuItem>
                                        <MenuItem value={2}>Django</MenuItem>
                                        <MenuItem value={3}>Flask</MenuItem>
                                        <MenuItem value={4}>JavaScript</MenuItem>
                                        <MenuItem value={5}>React</MenuItem>
                                        <MenuItem value={6}>Angular</MenuItem>
                                        <MenuItem value={7}>Vue</MenuItem>
                                        <MenuItem value={8}>Java</MenuItem>
                                        <MenuItem value={9}>Spring</MenuItem>
                                        <MenuItem value={10}>Hibernate</MenuItem>
                                        <MenuItem value={11}>C</MenuItem>
                                        <MenuItem value={12}>Cpp</MenuItem>
                                        <MenuItem value={13}>Csharp</MenuItem>
                                        <MenuItem value={14}>Dotnet</MenuItem>
                                        <MenuItem value={15}>Ruby</MenuItem>
                                        <MenuItem value={16}>Rails</MenuItem>
                                        <MenuItem value={17}>Php</MenuItem>
                                        <MenuItem value={18}>Laravel</MenuItem>
                                        <MenuItem value={19}>Swift</MenuItem>
                                        <MenuItem value={20}>Kotlin</MenuItem>
                                        <MenuItem value={21}>Go</MenuItem>
                                        <MenuItem value={22}>Rust</MenuItem>
                                        <MenuItem value={23}>Scala</MenuItem>
                                        <MenuItem value={24}>Groovy</MenuItem>
                                        <MenuItem value={25}>Typescript</MenuItem>
                                        <MenuItem value={26}>Nodejs</MenuItem>
                                        <MenuItem value={27}>Express</MenuItem>
                                        <MenuItem value={28}>Ruby On Rails</MenuItem>
                                        <MenuItem value={29}>Sql</MenuItem>
                                        <MenuItem value={30}>Nosql</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="skill level"
                                        name="skill_level"
                                        type="number"
                                        value={hardSkill.skill_level}
                                        inputProps={{ maxLength: 75 }}
                                        onChange={handleHardSkillChange}
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Select
                                        fullWidth
                                        label="experience time"
                                        name="experience_time"
                                        value={hardSkill.experience_time || ''}
                                        onChange={handleHardSkillChange}
                                    >
                                        <MenuItem value={1}>Less Than A Year</MenuItem>
                                        <MenuItem value={2}>Between 1 And 5 Years</MenuItem>
                                        <MenuItem value={3}>More Than 5 Years</MenuItem>
                                    </Select>
                                </Grid> */}
                            </Grid>
                        </form>
                    </DialogContent>
                    <Button onClick={handleAddHardSkill}>Add</Button>
                </Dialog>
            </Container>
        </Box>

    );
}