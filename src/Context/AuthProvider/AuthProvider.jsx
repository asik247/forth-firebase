import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Components/firebase/firebase.init';

const AuthProvider = ({children}) => {
const [user,Setuser] = useState(null)
const [loading,setLoading] = useState(true)

// Create User code here;
const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

// SignIn user code here;
const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// SignOut user code here;
const signOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
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
        setLoading(false)
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
        signInUser,
        signOutUser,
        loading
    }
  
    return (
       <AuthContext value={userInfo}>
           {children}
       </AuthContext>
    );
};

export default AuthProvider;