import { Box, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BasicInfo, Skills, Education } from "../../../models/CVtypes";
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
import { Delete, Edit } from "@mui/icons-material";

export function EditCV() {
    let currentUser: any

    let educations: Education[] = []
    let hardSkills: HardSkill[] = []
    let projects: Project[] = []
    let workXPs: WorkExperience[] = []

    let [cvDataBasic, setCVDataBasic] = useState<BasicInfo>({
    });

    const [openExperienceDialog, setOpenExperienceDialog] = useState(false);
    const [editingExperienceIndex, setEditingExperienceIndex] = useState(-1);
    const [newExperience, setNewExperience] = useState({
        companyName: "",
        companyWebsite: "",
        startEndDate: "",
        role: "",
    });

    useEffect(() => {
        getInfo()
    }, [])

    const handleBasicChange = (event: any) => {
        const { name, value } = event.target;
        setCVDataBasic({
            ...cvDataBasic,
            [name]: value,
        });
    };

    const birthdayChange = (newValue: any) => {
        console.log(dayjs(newValue.$d).format('YYYY-MM-DD'))
        cvDataBasic.birth_date = dayjs(newValue.$d).format('YYYY-MM-DD')
    }

    const handleAddExperience = () => {
        setOpenExperienceDialog(true);
    };

    const handleSave = async () => {
        console.log(cvDataBasic)
        try {

            currentUser = await client.get("/auth/users/me/");
            const UserPK = currentUser.data.id;
            const apiURL = `/eduportal/students/${UserPK}/CV/`
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
            console.log(selectedSkills)
            console.log(respone)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // const handleSaveExperience = () => {
    //     if (editingExperienceIndex !== -1) {
    //         const updatedExperiences = [...cvData.workExperiences];
    //         updatedExperiences[editingExperienceIndex] = newExperience;
    //         setCVDataBasic((prevData) => ({
    //             ...prevData,
    //             workExperiences: updatedExperiences,
    //         }));
    //         setEditingExperienceIndex(-1);
    //     } else {
    //         setCVDataBasic((prevData) => ({
    //             ...prevData,
    //             workExperiences: [...prevData.workExperiences, newExperience],
    //         }));
    //     }
    //     setNewExperience({
    //         companyName: "",
    //         companyWebsite: "",
    //         startEndDate: "",
    //         role: "",
    //     });
    //     setOpenExperienceDialog(false);
    // };

    // const handleEditExperience = (index: any) => {
    //     setNewExperience(cvData.workExperiences[index]);
    //     setEditingExperienceIndex(index);
    //     setOpenExperienceDialog(true);
    // };

    async function getInfo() {
        try {
            currentUser = await client.get("/auth/users/me/");
            const UserPK = currentUser.data.id;

            const basicInfoApiUrl = `/eduportal/students/${UserPK}/CV/`;
            const basicInfoResponse = await client.get(basicInfoApiUrl);
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
            console.log(cvDataBasic)

            const educationApiUrl = `/eduportal/students/${UserPK}/CV/education`;
            const educationsResponse = await client.get(educationApiUrl);
            educations = educationsResponse.data
            educationList = educationsResponse.data
            setEducationList(educationsResponse.data)
            console.log(educations)

            const hardSkillsApiUrl = `/eduportal/students/${UserPK}/CV/hard-skills`;
            const hardSkillsResponse = await client.get(hardSkillsApiUrl);
            hardSkills = hardSkillsResponse.data
            // console.log(hardSkills)

            const projectsApiUrl = `/eduportal/students/${UserPK}/CV/projects`;
            const projectsResponse = await client.get(projectsApiUrl);
            projects = projectsResponse.data
            // console.log(projects)

            const workXPsApiUrl = `/eduportal/students/${UserPK}/CV/work-xps`;
            const workXPsResponse = await client.get(workXPsApiUrl);
            workXPs = workXPsResponse.data
            // console.log(workXPs)


        } catch (error) {
            console.error('Error:', error);
        }
    }

    const navigate = useNavigate();
    const navigateToViewCV = () => {
        navigate("/cv/view");
    }

    let [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const handleSkillClick = (skill: number) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

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
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleAddEducation = async () => {
        if (education.institute && education.degree) {
            if (editIndex !== null) {
                const updatedList = [...educationList];
                updatedList[editIndex] = education;
                setEducationList(updatedList);
                setEditIndex(null);
            } else {
                try {
                    currentUser = await client.get("/auth/users/me/");
                    const UserPK = currentUser.data.id;
                    const API_URL = `/eduportal/students/${UserPK}/CV/education/`
                    const response = client.post(API_URL, education);
                    console.log(response)

                } catch (error) {
                    console.error('Error:', error);
                }
                setEducationList([...educationList, education]);
            }
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
            currentUser = await client.get("/auth/users/me/");
            const UserPK = currentUser.data.id;
            const API_URL = `/eduportal/students/${UserPK}/CV/education/${educationList[index].id}/`
            const response = client.delete(API_URL);
            console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
        const updatedList = [...educationList];
        updatedList.splice(index, 1);
        setEducationList(updatedList);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Edit CV
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
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
                    <TextField
                        fullWidth
                        label="Gender"
                        name="gender"
                        value={cvDataBasic.gender || ''}
                        onChange={handleBasicChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Employment Status"
                        name="employment_status"
                        value={cvDataBasic.employment_status || ''}
                        onChange={handleBasicChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        maxRows={8}
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
                {/* <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Work Experiences
                    </Typography>
                    {cvData.workExperiences.map((experience, index) => (
                        <div key={index}>
                            <Typography variant="subtitle1">
                                {experience.companyName} - {experience.startEndDate}
                            </Typography>
                            <IconButton
                                color="primary"
                                onClick={() => handleEditExperience(index)}
                            >
                                <EditIcon />
                            </IconButton>
                        </div>
                    ))}
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={handleAddExperience}
                    >
                        Add Experience
                    </Button>
                </Grid> */}

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Grid>
            </Grid>


            <h2>Main Form</h2>
            <Button variant="contained" onClick={() => setOpen(true)}>Add Education</Button>
            <h3>Education List</h3>
            <List>
                {educationList.map((education, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${education.institute}: ${education.degree}`} />
                        <ListItemSecondaryAction>
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
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Degree"
                                    name="degree"
                                    value={education.degree}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Grade"
                                    name="grade"
                                    value={education.grade}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Field of study"
                                    name="field_of_study"
                                    value={education.field_of_study}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <Button onClick={handleAddEducation}>Add</Button>
            </Dialog>



            {/* Dialog for adding/editing work experience */}
            {/* <Dialog
                open={openExperienceDialog}
                onClose={() => setOpenExperienceDialog(false)}
            >
                <DialogTitle>Add/Edit Work Experience</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Company Name"
                        name="companyName"
                        value={newExperience.companyName}
                        onChange={(e) =>
                            setNewExperience({ ...newExperience, companyName: e.target.value })
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenExperienceDialog(false)}>Cancel</Button>
                    <Button onClick={handleSaveExperience}>Done</Button>
                </DialogActions>
            </Dialog> */}
        </Container>
    );
}



class HardSkill {
    id: number | undefined
    technology: 1 | undefined
    skill_level: 100 | undefined
    experience_time: 1 | undefined
}

class Project {
    id: number | undefined
    title: string | undefined
    link: string | undefined
    description: string | undefined
}

class WorkExperience {
    id: number | undefined
    company_name: string | undefined
    company_website: string | undefined
    start_date: Date | undefined
    end_date: Date | undefined
    job_title: string | undefined
}

