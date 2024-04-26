import { Box, ButtonGroup, FormControl, FormHelperText, Grid, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Styles from "Styles";
import { CancelButton, SaveButton, StyledTag, Wrapper } from "./CardModal-styles";
import theme from "Theme";
import { ProfessorCardViewFullInfo, Status, University } from "@models";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { Bounce, toast } from "react-toastify";
import { getPositionFullInfoProfessor } from "services/position.service";

export interface CardModalProps {
    model_id?: number;
}

export default function CardModal(props: CardModalProps) {
    useEffect(() => {
        const getModel = async () => {
            try {
                if (!props.model_id) {
                    throw new Error('Invalid Id');
                }
                const result = await getPositionFullInfoProfessor(props.model_id);
                setModelData(result.data);
            } catch (e) {
                toast.success("Couldn't retrieve position info", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }

        if (props.model_id) {
            getModel();
        }
    }, [props.model_id]);


    const [model, setModelData] = useState<ProfessorCardViewFullInfo>({
        title: "",
        description: "",
        status: Status.Open,
        start_date: new Date(),
        end_date: new Date(),
        tags: [],
        fee: 0,
        position_start_date: new Date(),
        position_end_date: new Date(),
        // duration: model?.duration ?? { year: 0, month: 0, day: 0 },
        // university: props.model?.university ?? universities[0],
        university: undefined,
        requestingStudents: 0,

    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setModelData({
            ...model,
            [name]: value,
        });
    };


    const handleSubmit = () => {
        console.log(model);
    };

    const handleTagDelete = (tagToDelete: string) => {
        const updatedTags = model.tags.filter(tag => tag !== tagToDelete);
        setModelData({
            ...model,
            tags: updatedTags,
        })
    };

    const [tagToAdd, setTagToAdd] = useState('');
    const handleTagAdd = (event: any) => {
        if (event.target.value != '' && !model.tags.includes(event.target.value))
            model.tags.push(event.target.value);
        handleInputChange(event);
    };

    const globalStyles = Styles();

    return (
        <Wrapper maxWidth="xs" sx={{ mt: 1 }} disableGutters>

            <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ p: theme.spacing(5), pt: '8rem', overflowY: 'scroll', height: '34rem' }} gap={2} className={clsx(globalStyles.flexColumn, globalStyles.fullyCenter)}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        autoFocus
                        value={model.title}
                        onChange={handleInputChange}
                    />

                    <FormControl fullWidth>
                        <Typography variant="h6" textAlign="left" marginBottom={1}>
                            Description
                        </Typography>
                        <TextareaAutosize
                            value={model.description}
                            id="description"
                            name="description"
                            placeholder="Description"
                            autoFocus
                            onChange={handleInputChange}
                            minRows={2}
                            required
                        />
                    </FormControl>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fee"
                        label="Fee"
                        name="fee"
                        autoFocus
                        type="number"
                        value={model.fee}
                        onChange={handleInputChange}
                    />

                    {/* <InputLabel>Add Tag</InputLabel> */}
                    {/* <Select value={model.university} label="University" fullWidth required>
                        {
                            universities.map(university => (
                                <MenuItem value={university} onClick={() => handleUniversityChange(university)}>{university.name}</MenuItem>
                            ))
                        }
                    </Select> */}

                    <FormControl fullWidth required sx={{ mt: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Application start date"
                                value={model.startDate}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth required>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Application end date"
                                value={dayjs(model.endDate)}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth required sx={{ mt: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Position start date"
                                value={model.position_start_date}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth required>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Position end date"
                                value={model.position_end_date}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    {/* <FormControl fullWidth required sx={{ mt: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Position start date"
                                value={model.positionStartDate}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl> */}

                    {/* <FormControl fullWidth required>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Position end date"
                                value={model.positionEndDate}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl> */}


                    {/* <Typography variant="h6" textAlign="left" sx={{ width: '100%' }}>
                        Duration
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                label="Year"
                                value={model.duration.year}
                                variant="outlined"
                                fullWidth
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Month"
                                value={model.duration.month}
                                variant="outlined"
                                fullWidth
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Day"
                                value={model.duration.day}
                                variant="outlined"
                                fullWidth
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid> */}

                    <Grid container spacing={1} mt={2}>
                        <Grid item>
                            <Typography sx={{ pt: '4px' }}>
                                Tags:
                            </Typography>
                        </Grid>

                        {
                            model.tags.map(tag => (
                                <Grid item key={tag}>
                                    <StyledTag label={tag} variant="outlined" onDelete={() => handleTagDelete(tag)}></StyledTag>
                                </Grid>
                            ))
                        }

                    </Grid>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        {/* <InputLabel>Add Tag</InputLabel> */}
                        <Select value={tagToAdd} onChange={handleTagAdd}>

                            <MenuItem value={"science"}>science</MenuItem>
                            <MenuItem value={"computer"}>computer</MenuItem>
                            <MenuItem value={"sports"}>sports</MenuItem>
                        </Select>
                        <FormHelperText>Select Tag to Add</FormHelperText>
                    </FormControl>
                </Box>

                <ButtonGroup variant="text" fullWidth>
                    <CancelButton color="error" disableRipple type="submit">Cancel</CancelButton>
                    <SaveButton color="success" disableRipple>Save</SaveButton>
                </ButtonGroup>
            </Box>
        </Wrapper>
    );
}