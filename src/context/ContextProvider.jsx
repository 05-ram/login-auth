import React, { useState } from 'react'
import AuthContext from './AuthContext';

const ContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () => setIsAuthenticated(true);
    const logOut = () => setIsAuthenticated(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;