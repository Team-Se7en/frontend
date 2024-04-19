import { Box, ButtonGroup, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import { CancelButton, SaveButton, StyledTag, Wrapper } from "./CardModal-styles";
import theme from "Theme";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo, Status } from "@models";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export interface CardModalProps {
    model: ProfessorCardViewFullInfo | null;
}

export default function CardModal(props: CardModalProps) {
    const [model, setModelData] = useState({
        title: props.model?.title ?? "",
        description: props.model?.description ?? "",
        status: props.model?.status ?? Status.open,
        startDate: props.model?.startDate ?? Date.now(),
        endDate: props.model?.endDate ?? Date.now(),
        tags: props.model?.tags ?? [],
        fee: props.model?.fee ?? 0,
        positionStartDate: props.model?.positionStartDate ?? Date.now(),
        duration: props.model?.duration ?? { year: 0, month: 0, day: 0 },
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
        console.log(tagToDelete);
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
                <Box sx={{ p: theme.spacing(5) }} className={clsx(globalStyles.flexColumn, globalStyles.fullyCenter)}>

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

                    <FormControl fullWidth sx={{ mt: 2 }}>
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
                        />
                    </FormControl>

                    {/* <LocalizationProvider>
                            <DatePicker
                                label="Controlled picker"
                                value={model.positionStartDate}
                                onChange={handleInputChange}
                            />
                    </LocalizationProvider> */}

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
                        sx={{ mt: 4 }}
                    />

                    <Typography variant="h6" textAlign="left" sx={{ width: '100%', mt: 2 }} marginBottom={1}>
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