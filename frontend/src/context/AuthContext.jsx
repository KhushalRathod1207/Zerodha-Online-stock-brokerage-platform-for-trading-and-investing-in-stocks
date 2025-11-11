import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get("/auth/current", { withCredentials: true });
                setCurrentUser(res.data.user);
            } catch {
                setCurrentUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const isAuth = !!currentUser; // true if user exists

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, isAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
