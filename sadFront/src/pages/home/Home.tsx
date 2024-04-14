import { Button } from "@mui/material";
import { ProfessorRequestCard } from "@components";

import { ProgramsList } from "components/programslist/ProgramsList";

export function Home() {
  return (
    <>
      <Button>Home</Button>
      <ProgramsList></ProgramsList>
      <ProfessorRequestCard></ProfessorRequestCard>
    </>
  );
}
