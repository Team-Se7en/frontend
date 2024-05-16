import { Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";

import { ProfessorCardViewShortInfo } from "../../models/CardInfo";
import { ProfessorPositionsQueryParams } from "../../models/QueryParams";
import { ProfessorRequestCard } from "../professor-request-card/ProfessorRequestCard";
import { getProfessorPositions } from "../../services/position.service";

export interface ProfessorPositionsProps {
    queryParams?: ProfessorPositionsQueryParams;
    modelToAdd?: ProfessorCardViewShortInfo;
    data:ProfessorCardViewShortInfo[];
}

export function ProfessorPositions(props: ProfessorPositionsProps) {
    const [positions, setPositions] = useState<ProfessorCardViewShortInfo[]>([]);

    useEffect(() => {
            setPositions(props.data);
        },[props.queryParams,props.data]);

    const handlePositionDelete = (id: number) => {
        setPositions(positions.filter(p => p.id != id));
    }

    useEffect(() => {
        if (props.modelToAdd) {
            setPositions(positions.concat(props.modelToAdd));
        }
    }, [props.modelToAdd]);

    return (    
        <Box
            width={"60%"}
            minWidth={"30rem"}
            maxWidth={"50rem"}
            sx={{ backgroundColor: "#fff" }}
        >
            <Divider
                textAlign="left"
                sx={{ fontFamily: "Arial", fontSize: "1rem", color: "#6e6e6e", paddingTop: "20px",
            }}>
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