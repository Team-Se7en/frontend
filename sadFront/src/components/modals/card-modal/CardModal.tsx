import { Bounce, toast } from "react-toastify";
import { Box, ButtonGroup, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import { CancelButton, SaveButton, StyledTag, Wrapper } from "./CardModal-styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo } from "../../../models/CardInfo";
import { createPosition, getPositionFullInfoProfessor, updatePosition } from "../../../services/position.service";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Loading } from "../../ui/Loading";
import { Status } from "../../../models/Status";
import Styles from "../../../Styles";
import clsx from "clsx";
import dayjs from "dayjs";
import theme from "../../../Theme";

export interface CardModalProps {
    model_id?: number;
    onClose: () => void;
    onAddUpdate: (updatedModel: ProfessorCardViewShortInfo) => void;
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
                setLoading(false);
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
        else
        {
            setLoading(false);
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
        // university: undefined,
        request_count: 0,
        id: 0,
        capacity: 0,
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setModelData({
            ...model,
            [name]: value,
        });
    };


    const handleSubmit = () => {
        if (props.model_id) {
            updatePosition(props.model_id, model);

            const updatedModel : ProfessorCardViewShortInfo = {
                capacity: model.capacity,
                end_date: model.end_date,
                fee: model.fee,
                id: model.id,
                position_end_date: model.position_end_date,
                position_start_date: model.position_start_date,
                request_count: model.request_count,
                start_date: model.start_date,
                status: model.status,
                tags: model.tags,
                title: model.title,
                university_name: model.university?.name ?? '',
            }

            props.onAddUpdate(updatedModel)
            props.onClose();
        }
        else {
            createPosition(model);
            
            const createdModel : ProfessorCardViewShortInfo = {
                capacity: model.capacity,
                end_date: model.end_date,
                fee: model.fee,
                id: model.id,
                position_end_date: model.position_end_date,
                position_start_date: model.position_start_date,
                request_count: model.request_count,
                start_date: model.start_date,
                status: model.status,
                tags: model.tags,
                title: model.title,
                university_name: model.university?.name ?? '',   
            }

            props.onAddUpdate(createdModel);
            props.onClose();
        }
    };

    const handleTagDelete = (tagToDelete: string) => {
        const updatedTags = model.tags.filter(tag => tag !== tagToDelete);
        setModelData({
            ...model,
            tags: updatedTags,
        })
    };

    const handleTagAdd = (event: any) => {
        if (event.target.value != '' && !model.tags.includes(event.target.value))
            model.tags.push(event.target.value);
        handleInputChange(event);
    };

    const globalStyles = Styles();

    const [loading, setLoading] = useState(true);


    return (
        <Wrapper maxWidth="md" sx={{ mt: 1 }} disableGutters>
            {
                loading
                    ?
                    <Loading />
                    :
                    <>

                        <Box component="form">
                            <Box sx={{
                                p: theme.spacing(5),
                                pt: '4rem',
                                overflow: 'scroll',
                                height: '45rem',
                            }} gap={2} className={clsx(globalStyles.flexColumn, globalStyles.fullyCenter)}>

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

                                <Box className={clsx(globalStyles.flexRow)} width={'100%'} marginTop={2} gap={2}>
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

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="capacity"
                                        label="Capacity"
                                        name="capacity"
                                        autoFocus
                                        type="number"
                                        value={model.capacity}
                                        onChange={handleInputChange}
                                    />
                                </Box>

                                <Box className={clsx(globalStyles.flexRow)} marginTop={2} width={'100%'} gap={2}>
                                    <FormControl fullWidth required>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Application start date"
                                                value={dayjs(model.start_date)}
                                                onChange={handleInputChange}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                    <FormControl fullWidth required>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Application end date"
                                                value={dayjs(model.end_date)}
                                                onChange={handleInputChange}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                </Box>

                                <Box className={clsx(globalStyles.flexRow)} width={'100%'} marginTop={2} gap={2}>

                                    <FormControl fullWidth required>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Position start date"
                                                value={dayjs(model.position_start_date)}
                                                onChange={handleInputChange}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                    <FormControl fullWidth required>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Position end date"
                                                value={dayjs(model.position_end_date)}
                                                onChange={handleInputChange}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                </Box>

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
                                    <Select onChange={handleTagAdd}>

                                        <MenuItem value={"science"}>science</MenuItem>
                                        <MenuItem value={"computer"}>computer</MenuItem>
                                        <MenuItem value={"sports"}>sports</MenuItem>
                                    </Select>
                                    <FormHelperText>Select Tag to Add</FormHelperText>
                                </FormControl>
                            </Box>

                            <ButtonGroup variant="text" fullWidth>
                                <CancelButton color="error" disableRipple onClick={props.onClose}>Cancel</CancelButton>
                                <SaveButton color="success" disableRipple onClick={handleSubmit}>Save</SaveButton>
                            </ButtonGroup>
                        </Box>
                    </>
            }
        </Wrapper >
    );
}