import client from "../Http/axios";

export const getLandingInfo = async () => {
    try {
        const result = await client.get(`/eduportal/getLandingInfo`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}