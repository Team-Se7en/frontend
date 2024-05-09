import { Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { ProfessorCardViewShortInfo } from "../../models/CardInfo";
import { getProfessorPositions } from "../../services/position.service";
import { ProfessorRequestCard } from "../professor-request-card/ProfessorRequestCard";
import { ProfessorPositionsQueryParams } from "../../models/QueryParams";

export interface ProfessorPositionsProps {
    queryParams?: ProfessorPositionsQueryParams;
}

export function ProfessorPositions(props: ProfessorPositionsProps) {
    const [positions, setPositions] = useState<ProfessorCardViewShortInfo[]>([]);

    useEffect(() => {
        const fetchRecentPositions = async () => {
            const result = await getProfessorPositions(props.queryParams);
            setPositions(result.data)
        };

        fetchRecentPositions();
    }, [props.queryParams]);

    const handlePositionDelete = (id: number) => {
        setPositions(positions.filter(p => p.id != id));
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
                Own Positions
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
                    positions.map(position => (
                        <ProfessorRequestCard key={position.id} model={position} onDelete={handlePositionDelete}/>
                    ))
                }
            </Box>
        </Box>
    )
}