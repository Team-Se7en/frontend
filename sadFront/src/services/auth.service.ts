import client from "Http/axios";

export const getUserInfo = async() => {
    try {
        const result = await client.get(`/eduportal/userinfo/`);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}