import React, { useState } from 'react';
import AuthContext from './AuthContext';

const ContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('');

    const login = (role) => {
        setIsAuthenticated(true);
        setUserRole(role);
    };

    const logOut = () => {
        setIsAuthenticated(false);
        setUserRole('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default ContextProvider;
