import api from "./api";

export const getLandingInfo = async () => {
    try {
        const result = await api.get(`/eduportal/landing`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}