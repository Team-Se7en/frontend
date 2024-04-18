import { ProfessorRequestCard } from "@components";
import {  ProfessorCardViewShortInfo, Status } from "@models"

export function Home() {
  const model: ProfessorCardViewShortInfo = {
    title: 'Laboratory Research',
    status: Status.closed,
    tags: ['science', 'lab'],
    startDate: new Date(),
    endDate: new Date(),
    universityName: "",
    studentCapacity: 0,
    fee: 0,
    positionStartDate: new Date(),
    duration: {
      year: 1,
      month: 1,
      day: 1
    }
  }
  return (
    <>
      <ProfessorRequestCard model={model}></ProfessorRequestCard>
    </>
  );
}
