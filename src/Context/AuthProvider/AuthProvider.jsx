import React, { Children } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Components/firebase/firebase.init';

const AuthProvider = ({children}) => {

// Create User code here;
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

// current User code here;
onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser){
        console.log('inside if',currentUser);
    }
    else{
        console.log('else',currentUser);
    }
})

// SignIn user code here;


    const userInfo = {
        createUser,
    }
  
    return (
       <AuthContext value={userInfo}>
           {children}
       </AuthContext>
    );
};

export default AuthProvider;