import { StudentPositionsQueryParams } from "../models/QueryParams";
import client from "../Http/axios";

export interface GetStudentPositionsRequestModel {
    studentId: number;
}

export const getStudentRecentPositions = async () => {
    try {
        const result = await client.get(`/eduportal/positions`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getStudentPositions = async (queryParams?: StudentPositionsQueryParams) => {
    try {
        var result = await client.get(`/eduportal/stud_position_filter/`, { params: {
            "term": queryParams?.term,
            "ordering": queryParams?.ordering,
            "fee__gte": queryParams?.feeMin,
            "fee__lte": queryParams?.feeMax,
            "position_start_date__year":  queryParams?.year,
        } });
        
        if (queryParams?.filled != -1) {
            result = await client.get(`/eduportal/stud_position_filter/`, { params: {
                "term": queryParams?.term,
                "ordering": queryParams?.ordering,
                "fee__gte": queryParams?.feeMin,
                "fee__lte": queryParams?.feeMax,
                "position_start_date__year":  queryParams?.year,
                "filled": queryParams?.filled,
            } });
            
    }
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
