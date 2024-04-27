import { Box, Divider } from "@mui/material";
// import StudentCard from "../studentcard/StudentCard";
// import { SampleCard } from "./SampleData";


export function StudentList() {
return (
    <Box
        width={"60%"}
        minWidth={"30rem"}
        maxWidth={"50rem"}
        sx={{ backgroundColor: "#fafafa" }}
    >
        <Divider
        textAlign="left"
        sx={{ fontFamily: "Arial", fontSize: "1rem", color: "#6e6e6e", paddingTop: "20px" }}
        >
        Recent Requests
        </Divider>
        {/* <Box
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
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        <StudentCard
            status={SampleCard.status}
            start_date={SampleCard.start_date}
            end_date={SampleCard.end_date}
            tags={SampleCard.tags}
            fee={SampleCard.fee}
            position_start_date={SampleCard.position_start_date}
            duration={SampleCard.duration}
            universityName={SampleCard.universityName}
            title={SampleCard.title}
            capacity={SampleCard.capacity}
            professor={SampleCard.professor}
        ></StudentCard>
        </Box> */}
    </Box>
    );
    }
