import client from "../Http/axios";


export const professorAcceptRequest = async(id: number) => {
    try {
        const response = await client.get(`/eduportal/requests/${id}/professor_accept_request/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const professorRejectRequest = async(id: number) => {
    try {
        const response = await client.get(`/eduportal/requests/${id}/professor_reject_request/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const studentAcceptRequest = async(id: number) => {
    try {
        const response = await client.get(`/eduportal/requests/${id}/student_accept_request/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const studentRejectRequest = async(id: number) => {
    try {
        const response = await client.get(`/eduportal/requests/${id}/student_reject_request/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}