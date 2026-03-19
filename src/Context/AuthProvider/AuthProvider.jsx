import React, { Children } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {
        emal:'asik@gmail.com'
    }
    const nameInfo = {
        name:'asik'
    }
    return (
       <AuthContext value={nameInfo}>
           {children}
       </AuthContext>
    );
};

export default AuthProvider;