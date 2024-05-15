import { createPositionRequestModel, ProfessorCardViewFullInfo } from "../models/CardInfo";
import { ProfessorPositionsQueryParams } from "../models/QueryParams";
import client from "../Http/axios";
import { formatTime } from "../lib/format-time";

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

export const getProfessorPositions = async (queryParams?: ProfessorPositionsQueryParams) => {
    try {
        const result = await client.get(`/eduportal/prof_own_position_filter/`, { params: {
            "term": queryParams?.term,
            "ordering": queryParams?.ordering,
            "fee__gte": queryParams?.feeMin,
            "fee__lte": queryParams?.feeMax,
            "position_start_date__year":  queryParams?.year,
        } });
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
        console.log(model);
        const result = await client.post(`/eduportal/positions/`, model);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}