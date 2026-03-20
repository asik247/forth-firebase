import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);

    // useLocation code here;
    const location = useLocation();
    // console.log(location);
    if(loading){
       return <p>Loadding........</p>

    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'} ></Navigate>
};

export default PrivateRoutes;