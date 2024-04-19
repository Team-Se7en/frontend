import { ProfessorRequestCard } from "@components";
import { ProfessorCardViewShortInfo, Status } from "@models";
import { ProgramsList } from "components/programslist/ProgramsList";

export function Home() {
  const model: ProfessorCardViewShortInfo = {
    title: 'Laboratory Research',
    status: Status.open,
    tags: ['science', 'lab'],
    startDate: new Date(),
    endDate: new Date(),
    universityName: "Iran University of Science and Technology",
    studentCapacity: 12,
    fee: 1.99,
    positionStartDate: new Date(),
    duration: {
      year: 1,
      month: 2,
      day: 4
    },
    requestingStudents: 4,
  }
  return (
    <>
      <ProfessorRequestCard model={model}></ProfessorRequestCard>
    </>
  );
}
