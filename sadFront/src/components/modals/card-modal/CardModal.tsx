import { Box, ButtonGroup, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import { CancelButton, SaveButton, StyledTag, Wrapper } from "./CardModal-styles";
import theme from "Theme";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo, Status, University } from "@models";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";

export interface CardModalProps {
    model: ProfessorCardViewFullInfo | null;
}

export default function CardModal(props: CardModalProps) {

    const isNew: boolean = props.model == null;

    const universities: University[] = [{ name: 'IUST', description: 'Iran University of Science and Technology' }, { name: 'Tehran', description: 'Good University' }];


    const [model, setModelData] = useState({
        title: props.model?.title ?? "",
        description: props.model?.description ?? "",
        status: props.model?.status ?? Status.open,
        startDate: dayjs(props.model?.startDate.toLocaleDateString('en-US')) ?? dayjs(new Date().toLocaleDateString('en-US')),
        endDate: dayjs(props.model?.endDate.toLocaleDateString('en-US')) ?? dayjs(new Date().toLocaleDateString('en-US')),
        tags: props.model?.tags ?? [],
        fee: props.model?.fee ?? 0,
        positionStartDate: props.model?.positionStartDate ?? Date.now(),
        duration: props.model?.duration ?? { year: 0, month: 0, day: 0 },
        university: props.model?.university ?? universities[0],
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

    const handleUniversityChange = (_university: University) => {
        setModelData({
            ...model,
            university: _university,
        })
        console.log(model.university);
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
                                value={model.endDate}
                                onChange={handleInputChange}
                            />
                        </LocalizationProvider>
                    </FormControl>


                    <Typography variant="h6" textAlign="left" sx={{ width: '100%' }}>
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
                    </Grid>

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