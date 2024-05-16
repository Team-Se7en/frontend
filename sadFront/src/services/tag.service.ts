import client from "../Http/axios";


export const getTags = async () => {
    try {
        const result = await client.get(`/eduportal/tags`);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}