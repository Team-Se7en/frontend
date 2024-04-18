import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import StudentCard from "components/studentcard/StudentCard";

export function StudentList() {
return (
    <Box width={800} sx={{ backgroundColor: "#fafafa" }}>
    <Divider
        textAlign="left"
        sx={{ fontFamily: "roboto", fontSize: "1.2rem", color: "#6e6e6e" }}>
        Recent Requests
    </Divider>
    <Box
        height={800}
        my={4}
        display="flex"
        flexDirection={"column"}
        gap={"1rem"}
        p={2}
        padding={"2rem"}
        overflow={"scroll"}
    >
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>

    </Box>
    </Box>
    
    );
}
