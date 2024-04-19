import {
  PositionDuration,
  Professor,
  Status,
  StudentCardViewShortInfo,
} from "@models";

const SampleDuration: PositionDuration = {
  year: 2,
  month: 8,
  day: 0,
};

const SampleProfessor: Professor = {
  Name: "Jim pirson",
};

const SampleStartDate: Date = new Date(2024, 5, 18);
const SampleEndDate: Date = new Date(2027, 12, 25);
const SamplePositionStartDate: Date = new Date(2024, 9, 18);

export const SampleCard: StudentCardViewShortInfo = {
  status: Status.open,
  startDate: SampleStartDate,
  endDate: SampleEndDate,
  tags: ["Machine Learning", "NLP", "Artificial Intelligence"],
  fee: 758400000,
  positionStartDate: SamplePositionStartDate,
  duration: SampleDuration,
  universityName: "Standford University",
  title: "NLP/ML PhD Positions",
  studentCapacity: 20,
  professor: SampleProfessor,
};
