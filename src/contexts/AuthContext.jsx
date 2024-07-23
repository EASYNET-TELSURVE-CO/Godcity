import React, { createContext, useContext, useEffect, useState } from "react";
import SpinningLoader from "../components/common/Loader"; // Adjust the path as necessary

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const defaultUser = {
    id: null,
    name: "Jon Snow",
    email: "deadmanwalking@gmail.com",
    role: "admin" // e.g., 'user' or 'admin'
    // Add other default fields as necessary
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = userData => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {loading ? <SpinningLoader /> : children}
        </AuthContext.Provider>
    );
};
