import { ProfessorCardViewFullInfo } from "../models/CardInfo";
import { ProfessorPositionsQueryParams } from "../models/QueryParams";
import { RequestModel } from "../models/Request";
import client from "../Http/axios";
import { useEffect } from "react";

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



export const getProfessorPositions = async(page1:number, queryParams?: ProfessorPositionsQueryParams) =>  {
    
    useEffect(() => {

    }, [page1, queryParams]);
    
    try {
        console.log(queryParams,"this is query params");

        const result = await client.get(`/eduportal/prof_own_position_filter/`, { params: {
            "term": queryParams?.term,
            "ordering": queryParams?.ordering,
            "fee__gte": queryParams?.feeMin,
            "fee__lte": queryParams?.feeMax,
            "position_start_date__year":  queryParams?.year,
            "page":page1,
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

export const getPositionFullInfo = async (id: number) => {
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
        const result = await client.post(`/eduportal/positions/`, model);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const applyToPosition = async (model: RequestModel) => {
    try {
        const result = await client.post(`/eduportal/requests/`, model);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}