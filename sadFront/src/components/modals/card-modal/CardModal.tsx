import { Box, Container, CssBaseline, TextField } from "@mui/material";
import clsx from "clsx";
import CardModel from "models/CardModel";
import { useState } from "react";
import Styles from "Styles";

export interface CardModalProps {
    model: CardModel | null;
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
        <Container component="main" maxWidth="xs" sx={{mt: 1, backgroundColor: 'white'}}>
            <CssBaseline />
            <Box component="form" maxWidth="xs" className={clsx(globalStyles.flexColumn, globalStyles.fullyCenter)}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                    value={props.model?.title}
                    onChange={handleInputChange}
                />

            </Box>
        </Container>
    );
}