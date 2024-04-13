import Status from "./Status";

interface CardModel {
    professorId: string;
    title: string;
    description: string;
    status: Status;
}

export default CardModel;