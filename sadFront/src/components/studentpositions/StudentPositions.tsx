import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import ProgramCard from "../programcard/ProgramCard";
import { StudentCardViewFullInfo } from "../../models/CardInfo";
import { StudentPositionsQueryParams } from "../../models/QueryParams";
import { getStudentPositions } from "../../services/sposition.service";

export interface StudentPositionsProps {
    queryParams?: StudentPositionsQueryParams;
}

export function StudentPositions(props: StudentPositionsProps) {
    const [positions, setPositions] = useState<StudentCardViewFullInfo[]>([]);

    useEffect(() => {
        const fetchRecentPositions = async () => {
            const result = await getStudentPositions(props.queryParams);
            setPositions(result.data)
        };

        fetchRecentPositions();
    }, [props.queryParams]);



    // useEffect(() => {
    //     if (props.modelToAdd) {
    //         setPositions(positions.concat(props.modelToAdd));
    //     }
    // }, [props.modelToAdd]);

    if (!positions) return null;
    return (
        <Box
        width="90%"
        maxWidth={"55rem"}
        minWidth={"20rem"}
        sx={{ backgroundColor: "#fff" }}
        >
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
            {positions.map((program, index) => (
            <ProgramCard
                key={index}
                professor={program.professor}
                id={program.id}
                status={program.status}
                title={program.title}
                tags={program.tags}
                fee={program.fee}
                position_start_date={program.position_start_date}
                position_end_date={program.position_end_date}
                // updated_at={program.updated_at}
                start_date={program.start_date}
                end_date={program.end_date}
                // created_at={program.created_at}
                description=""
                capacity={0}
                university_name={program.university_name}
                university_id={program.university_id}
            />
            ))}
        </Box>
        </Box>
    );
}