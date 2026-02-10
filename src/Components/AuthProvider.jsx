import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './FIrebase.config';

const googleProvider= new GoogleAuthProvider()

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

    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateInfo=(name,photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const userData={
        createUser,
        signIn,
        emailVerify,
        forgotPassword,
        user,
        logOutUser,
        googleSignIn,
        updateInfo
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