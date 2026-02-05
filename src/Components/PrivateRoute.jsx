import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    console.log(location);
    const {user}=use(AuthContext)
    if(user){
        return children
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;