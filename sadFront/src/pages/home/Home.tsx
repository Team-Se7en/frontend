import { Button } from "@mui/material";
import { ProfessorRequestCard } from "@components";
import { useNavigate } from "react-router-dom";
import { ProgramsList } from "components/programslist/ProgramsList";

export function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  } 
  
  return (
    <>
      <Button onClick={handleSubmit}>Home</Button>
      <ProgramsList></ProgramsList>
      <ProfessorRequestCard></ProfessorRequestCard>
    </>
  );
}
