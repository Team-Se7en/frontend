import client from "../Http/axios";
import { ProfessorCardViewFullInfo } from "../models/CardInfo";

export interface GetProfessorPositionsRequestModel {
    professorId: number;
}

export const getProfessorRecentPositions = async () => {
    try {
        const result = await client.get(`/eduportal/professors/my_recent_positions`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getProfessorPositions = async () => {
    try {
        const result = await client.get(`/eduportal/professors/my_positions`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const deletePosition = async (id: number) => {
    try {
        const result = await client.delete(`/eduportal/positions/${id}`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getPositionFullInfoProfessor = async (id: number) => {
    try {
        const result = await client.get(`/eduportal/positions/${id}`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const updatePosition = async (id: number, model: ProfessorCardViewFullInfo) => {
    try {
        const result = await client.put(`/eduportal/positions/${id}/`, model);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const createPosition = async (model: ProfessorCardViewFullInfo) => {
    try {
        const result = await client.post(`/eduportal/positions`, model);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}