import { Box, Button, ButtonGroup, Container, CssBaseline, TextareaAutosize, TextField } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import Styles from "Styles";
import { CancelButton, SaveButton, Wrapper } from "./CardModal-styles";
import theme from "Theme";
import { ProfessorCardViewFullInfo, ProfessorCardViewShortInfo } from "@models";

export interface CardModalProps {
    model: ProfessorCardViewFullInfo | null;
}

export default function CardModal(props: CardModalProps) {
    const [model, setModelData] = useState({
        title: props.model?.title ?? "",
        description: props.model?.description ?? "",
    })

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

    const globalStyles = Styles();

    return (
        <></>
        // <Wrapper component="main" maxWidth="xs" sx={{ mt: 1, backgroundColor: 'white' }} disableGutters>

        //     <Box component="form" onSubmit={handleSubmit}>
        //         <Box sx={{ p: theme.spacing(5) }} className={clsx(globalStyles.flexColumn, globalStyles.fullyCenter)}>

        //             <TextField
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 id="title"
        //                 label="Title"
        //                 name="title"
        //                 autoFocus
        //                 value={props.model?.title}
        //                 onChange={handleInputChange}
        //             />

        //             <TextField
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 id="description"
        //                 label="Description"
        //                 name="description"
        //                 autoFocus
        //                 value={props.model?.shortDescription}
        //                 onChange={handleInputChange}
        //             />
        //         </Box>

        //         <ButtonGroup variant="" fullWidth>
        //             <CancelButton color="error" disableRipple type="submit">Cancel</CancelButton>
        //             <SaveButton color="success" disableRipple>Save</SaveButton>
        //         </ButtonGroup>
        //     </Box>
        // </Wrapper>
    );
}