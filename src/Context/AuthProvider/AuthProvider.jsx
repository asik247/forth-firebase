import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Components/firebase/firebase.init';

const AuthProvider = ({children}) => {
const [user,Setuser] = useState(null)

// Create User code here;
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

// current User code here;
// onAuthStateChanged(auth,(currentUser)=>{
//     if(currentUser){
//         console.log('inside if',currentUser);
//     }
//     else{
//         console.log('else',currentUser);
//     }
// })

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("current user",currentUser);
        Setuser(currentUser)
    })
    return()=>{
        unsubscribe
    }
},[])
// useEffect user kore kobo;

// SignIn user code here;


    const userInfo = {
        user,
        createUser,
    }
  
    return (
       <AuthContext value={userInfo}>
           {children}
       </AuthContext>
    );
};

export default AuthProvider;