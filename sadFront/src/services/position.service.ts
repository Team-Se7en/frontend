import { ResetTvOutlined } from "@mui/icons-material";
import client from "Http/axios";

export interface GetProfessorPositionsRequestModel {
    professorId: number;
}

export const getProfessorRecentPositions = async() => {
    try {
        const result = await client.get(`/eduportal/professors/my_recent_positions`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const deletePosition = async(id: number) => {
    try {
        const result = await client.delete(`/eduportal/positions/${id}`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getPositionFullInfoProfessor = async(id: number) => {
    try {
        const result = await client.get(`/eduportal/positions/${id}`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
