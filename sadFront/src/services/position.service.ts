import api from "./api";

export interface GetProfessorPositionsRequestModel {
    professorId: number;
}

export const getProfessorPositions = async(request: GetProfessorPositionsRequestModel) => {
    try {
        return await api.get(`/eduPortal/positions/${request.professorId}`);
    } catch (e) {
        console.error(e);
        throw e;
    }
}