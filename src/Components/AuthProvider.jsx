import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './FIrebase.config';

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailVerify=(accountUser)=>{
        return sendEmailVerification(accountUser)
    }

    const forgotPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe();
        }
    },[]);

    const logOutUser=()=>{
        return signOut(auth)
    }

    const userData={
        createUser,
        signIn,
        emailVerify,
        forgotPassword,
        user,
        logOutUser,
        
    }

    return (
        <div>
            <AuthContext value={userData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;