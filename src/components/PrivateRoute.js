import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const PrivateRoute = ({ children }) => {
    let auth = useAuth();
    return (
        auth.user ? children : <Navigate to='/home' />

    );
}

export default PrivateRoute