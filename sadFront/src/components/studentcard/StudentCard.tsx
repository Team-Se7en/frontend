import * as React from "react";

import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { StyledCardActions } from "./StudentCard-styles";
import { StyledCardContent } from "./StudentCard-styles";
import { StyledStudentCard } from "./StudentCard-styles";
import Typography from "@mui/material/Typography";

const handleClick = () => {
console.info("You clicked a topic.");
};

    const card = (
    <React.Fragment>
    <StyledCardContent>
        <Box
        className="left-info"
        sx={{
            display: "flex",
            flexDirection: "column",
            width: 0.8,
            gap: "1rem",
        }}
        >
        <Box
            className="top-info"
            sx={{ display: "flex", flexDirection: "row" }}
            gap={"1rem"}
        >
            <Avatar
            className="avatar"
            alt="Sauleh Etemadi"
            // src = ""
            sx={{
                height: "6rem",
                width: "6rem",
                margin: "0.5rem",
                marginBottom: 0,
            }}
            />
            <Box
            className="program-info"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.5rem",
            }}
            >
            <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
            >
                Computer Engineering Major
            </Typography>
            <Box
                className="prof-and-uni"
                sx={{ display: "flex", flexDirection: "row", gap: "3rem" }}
            >
                <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                fontSize={"1.1rem"}
                >
                Jim Pirson
                </Typography>
                <Box
                className="icon-uni"
                display={"flex"}
                flexDirection={"row"}
                gap={"0.2rem"}
                >
                <Icon>school</Icon>
                <Typography variant="body2">
                    Standford
                </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
        <Box
            className="topics"
            display={"flex"}
            flexDirection={"row"}
            gap={"0.5rem"}
        >
            <Typography variant="body2" fontSize={"0.9rem"}>
            Interested Field:
            </Typography>
            <Stack direction="row" spacing={1}>
            <Chip label="Security" size="small" onClick={handleClick} />
            <Chip label="Hardware" size="small" onClick={handleClick} />
            <Chip
                label="Ai"
                size="small"
                onClick={handleClick}
            />
            </Stack>
        </Box>
        </Box>
        <Box
        className="deadline-and-button"
        sx={{ width: 0.2 }}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"1rem"}
        gap={"3rem"}
        justifyContent={"flex-end"}
        textAlign={"center"}
        alignItems={"center"}
        >
        <Box className="deadline">
            <Typography variant="body2" fontSize={"0.7rem"}>
            Application time
            </Typography>
            <Typography variant="body2" fontWeight={"bold"} fontSize={"1rem"}>
            4/17/2024
            </Typography>
        </Box>
        <StyledCardActions>
            <Button size="large">Learn More</Button>
        </StyledCardActions>
        </Box>
    </StyledCardContent>
    </React.Fragment>
    );

    export default function StudentCard() {
    return (
    <Box sx={{ width: "45rem" }}>
        <StyledStudentCard variant="outlined">{card}</StyledStudentCard>
    </Box>
    );
    }
