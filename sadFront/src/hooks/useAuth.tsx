import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../models/UserInfo";
import { UserType } from "../models/UserType";
import { useLocalStorage } from "./useLocalStorage";
import { getUserInfo } from "../services/auth.service";

export interface AuthContextType {
    user: UserInfo | null;
    login: (userInfo: UserInfo) => void;
    logout: () => void;
}

const initalContext: AuthContextType = {
    user: null,
    login: () => { },
    logout: () => { },
}

const AuthContext = createContext(initalContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);

    const login = async (data) => {
        if (data) {
            const response = await getUserInfo();
            setUser(response.data);
            const redirect = () => {
                if (data.is_student) {
                    window.location.href = "/studenthomepage";
                } else {
                    window.location.href = "/professorhomepage/page1=1/page2=1";
                }

            };

            setTimeout(redirect, 3000);
        }
    };

    const logout = () => {
        setUser(null);
        window.location.href = "/";
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};