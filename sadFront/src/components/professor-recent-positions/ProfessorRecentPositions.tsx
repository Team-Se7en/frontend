import { ProfessorCardViewShortInfo } from "@models";
import { Box, Divider } from "@mui/material";
import { ProfessorRequestCard } from "components/professor-request-card";
import { useState, useEffect } from "react";
import { getProfessorRecentPositions } from "services/position.service";

export function ProfessorRecentPositions() {
    const [professorPositions, setProfessorPositions] = useState<ProfessorCardViewShortInfo[]>([]);

    useEffect(() => {
        const fetchRecentPositions = async () => {
            const result = await getProfessorRecentPositions();
            setProfessorPositions(result.data)
        };

        fetchRecentPositions();
    }, []);

    const handlePositionDelete = (id: number) => {
        setProfessorPositions(professorPositions.filter(p => p.id != id));
        console.log(id);
    }

    return (
        <Box
            width={"60%"}
            minWidth={"30rem"}
            maxWidth={"50rem"}
            sx={{ backgroundColor: "#fafafa" }}
        >
            <Divider
                textAlign="left"
                sx={{ fontFamily: "Arial", fontSize: "1rem", color: "#6e6e6e", paddingTop: "20px" }}>
                Recent Positions
            </Divider>
            <Box
                height={"30rem"}
                my={4}
                display="flex"
                flexDirection={"column"}
                alignItems={"center"}
                gap={"0.2rem"}
                p={2}
                padding={"0rem"}
                overflow={"auto"}
            >
                {
                    professorPositions.map(position => (
                        <ProfessorRequestCard key={position.id} model={position} onDelete={handlePositionDelete}/>
                    ))
                }
            </Box>
        </Box>
    )
}