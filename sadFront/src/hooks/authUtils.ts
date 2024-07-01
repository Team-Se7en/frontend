import { createContext, useContext } from "react";
import { UserInfo } from "../models/UserInfo";

export interface AuthContextType {
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
    login: () => void;
    logout: () => void;
}

const initialAuthContext: AuthContextType = {
    isLoggedIn: false,
    userInfo: null,
    login: () => { },
    logout: () => { },
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const useAuth = () => {
    return useContext(AuthContext);
};