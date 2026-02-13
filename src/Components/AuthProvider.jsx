import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './FIrebase.config';

const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
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
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[]);

    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateInfo=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const userData={
        createUser,
        signIn,
        emailVerify,
        forgotPassword,
        user,
        logOutUser,
        googleSignIn,
        updateInfo,
        loading,

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