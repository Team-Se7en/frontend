import React, { useEffect, useState } from "react";
import { AuthContext } from "./authUtils";
import { UserInfo } from "../models/UserInfo";
import { getUserInfo } from "../services/auth.service";


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {

        const fetchUserInfo = async () => {
            const result = await getUserInfo();
            setUserInfo(result.data);
        };


        if (isLoggedIn) {
            fetchUserInfo();
        }
        else {
            setUserInfo(null);
        }
    }, [isLoggedIn])

    return (
        <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
