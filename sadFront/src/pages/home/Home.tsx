import { ProfessorRequestCard } from "@components";
import { CardModel, Status } from "@models"
import { ProgramsList } from "components/programslist/ProgramsList";

export function Home() {
  const model: CardModel = {
    title: 'Laboratory Research',
    description: 'Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab.Need a hardworking student for experiments of living being in my lab.Need a hardworking student for experiments of living being in my lab.Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. Need a hardworking student for experiments of living being in my lab. ',
    professorId: '111',
    status: Status.closed,
    tags: ['science', 'lab']
  }
  return (
    <>
      <ProfessorRequestCard model={model}></ProfessorRequestCard>
      <ProgramsList></ProgramsList>
    </>
  );
}
